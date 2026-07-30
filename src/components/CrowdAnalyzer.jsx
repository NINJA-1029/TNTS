import React, { useState } from "react";
import { Users, Clock, Calendar, Sun, ShieldCheck, Compass, AlertCircle, Sparkles, Cpu, TrendingUp } from "lucide-react";
import { CROWD_DATA, getCrowdAnalysisForPlace } from "../data/crowdData";
import { EXPERIENCES, getLocalizedExperience } from "../data/heritageData";
import { t } from "../data/i18n";

export function CrowdAnalyzer({ language, onApplyToPlanner }) {
  const [selectedPlaceId, setSelectedPlaceId] = useState("mad-1");
  const analysis = getCrowdAnalysisForPlace(selectedPlaceId, language);

  const getLevelColor = (level, percent) => {
    if (percent < 35 || level === "Low" || level === "குறைவு") return "#4CAF50"; // Green
    if (percent < 70 || level === "Moderate" || level === "மிதமான") return "#FFA726"; // Orange
    return "#EF5350"; // Red
  };

  const levelColor = getLevelColor(analysis.currentCrowdLevel, analysis.crowdIndexPercent);

  return (
    <section className="crowd-analyzer-container fade-in">
      {/* Header Banner */}
      <div className="crowd-header-banner">
        <div className="crowd-title-group">
          <div className="crowd-icon-badge">
            <Users size={24} />
          </div>
          <div>
            <h2 className="crowd-main-title font-serif">
              {language === "ta" ? "தமிழ்நாடு சுற்றுலா கூட்ட நெரிசல் பகுப்பாய்வு" : "Tamil Nadu Tourism Crowd Analyzer"}
            </h2>
            <p className="crowd-sub-title">
              {language === "ta"
                ? "வரலாற்று சுற்றுலா தரவு & வானிலை அடிப்படையில் ஜெம்மா AI கணிப்பு"
                : "Gemma AI Predictive Engine based on TN Tourism statistics, weather, and festival calendars"}
            </p>
          </div>
        </div>

        {/* Place Dropdown Switcher */}
        <div className="place-picker-box">
          <label className="picker-label font-serif">
            <Compass size={15} />
            <span>{language === "ta" ? "இடத்தைத் தேர்ந்தெடுக்கவும்:" : "SELECT HERITAGE SITE:"}</span>
          </label>
          <select
            value={selectedPlaceId}
            onChange={(e) => setSelectedPlaceId(e.target.value)}
            className="place-picker-select font-serif"
          >
            {EXPERIENCES.map((exp) => {
              const loc = getLocalizedExperience(exp, language);
              return (
                <option key={exp.id} value={exp.id}>
                  {loc.title} ({loc.districtName})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Main Status & Metrics Row */}
      <div className="crowd-status-grid">
        {/* Live Density Meter */}
        <div className="crowd-card density-card">
          <div className="card-top-row">
            <span className="card-tag font-serif">{language === "ta" ? "நேரலை கூட்ட அடர்த்தி" : "LIVE CROWD DENSITY"}</span>
            <div className="live-indicator">
              <span className="live-dot pulse"></span>
              <span>{language === "ta" ? "நேரலை கணிப்பு" : "PREDICTED REALTIME"}</span>
            </div>
          </div>

          <h3 className="place-name font-serif">{analysis.placeName}</h3>
          
          <div className="density-number-wrapper" style={{ color: levelColor }}>
            <span className="density-percent">{analysis.crowdIndexPercent}%</span>
            <span className="density-badge" style={{ backgroundColor: levelColor }}>
              {analysis.currentCrowdLevel}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${analysis.crowdIndexPercent}%`, backgroundColor: levelColor }}
            ></div>
          </div>

          <div className="visitor-meta-info">
            <div>
              <span className="meta-lbl">{language === "ta" ? "தற்போதைய பார்வையாளர்கள்" : "Estimated Visitors"}</span>
              <span className="meta-val">{analysis.visitorEstimateCount}</span>
            </div>
            <div>
              <span className="meta-lbl">{language === "ta" ? "அதிகபட்ச திறன்" : "Max Capacity"}</span>
              <span className="meta-val">{analysis.maxCapacity}</span>
            </div>
          </div>
        </div>

        {/* Optimal Time Recommendation */}
        <div className="crowd-card recommendation-card">
          <div className="card-top-row">
            <span className="card-tag font-serif">{language === "ta" ? "சிறந்த பார்வை நேரம்" : "OPTIMAL VISIT TIME"}</span>
            <Clock size={18} color="#F8C868" />
          </div>

          <div className="rec-time-badge font-serif">
            <Clock size={20} />
            <span>{analysis.recommendedVisitWindow}</span>
          </div>

          <p className="rec-desc">{analysis.recommendationReason}</p>

          <div className="avoid-window-box">
            <AlertCircle size={16} color="#EF5350" />
            <div>
              <strong>{language === "ta" ? "தவிர்க்க வேண்டிய நேரம்: " : "Avoid Peak Hours: "}</strong>
              <span>{analysis.peakHoursToAvoid}</span>
            </div>
          </div>

          <button 
            className="apply-planner-btn font-serif"
            onClick={() => onApplyToPlanner(selectedPlaceId)}
          >
            <Sparkles size={16} />
            <span>{language === "ta" ? "திட்டமிடுபவருக்குப் பயன்படுத்து" : "Apply Best Time to AI Planner"}</span>
          </button>
        </div>
      </div>

      {/* Hourly Crowd Distribution Breakdown */}
      <div className="hourly-crowd-section">
        <h4 className="section-hdr font-serif">
          <TrendingUp size={18} />
          <span>{language === "ta" ? "24-மணி நேர கூட்ட அடர்த்தி வரைபடம்" : "24-Hour Crowd Distribution Forecast"}</span>
        </h4>

        <div className="hourly-chart-grid">
          {analysis.hourlyForecast.map((item, idx) => (
            <div key={idx} className="hourly-col">
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{ 
                    height: `${item.percentage}%`,
                    backgroundColor: getLevelColor(item.level, item.percentage)
                  }}
                >
                  <span className="bar-tooltip">{item.percentage}%</span>
                </div>
              </div>
              <span className="hour-label">{item.hour}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Factors Grid */}
      <div className="factors-grid">
        <div className="factor-box">
          <Sun size={20} color="#FFA726" />
          <div>
            <h5>{language === "ta" ? "வானிலை தாக்கம்" : "Weather Impact"}</h5>
            <p>{analysis.weatherFactor}</p>
          </div>
        </div>

        <div className="factor-box">
          <Calendar size={20} color="#81C784" />
          <div>
            <h5>{language === "ta" ? "திருவிழா / வார இறுதி" : "Festival & Weekend Effect"}</h5>
            <p>{analysis.festivalEffect}</p>
          </div>
        </div>

        <div className="factor-box">
          <ShieldCheck size={20} color="#29B6F6" />
          <div>
            <h5>{language === "ta" ? "பாதுகாப்பு & வசதிகள்" : "Safety & Facilities"}</h5>
            <p>{analysis.safetyStatus}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
