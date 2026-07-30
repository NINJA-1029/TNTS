import React, { useState } from "react";
import { Users, Clock, Calendar, Sun, ShieldCheck, Compass, AlertCircle, Sparkles, Cpu, TrendingUp } from "lucide-react";
import { CROWD_DATA, getCrowdAnalysisForPlace } from "../data/crowdData";
import { EXPERIENCES } from "../data/heritageData";
import { t } from "../data/i18n";

export function CrowdAnalyzer({ language, onApplyToPlanner }) {
  const [selectedPlaceId, setSelectedPlaceId] = useState("madurai-h-1");
  const analysis = getCrowdAnalysisForPlace(selectedPlaceId, language);

  const getLevelColor = (level, percent) => {
    if (percent < 35 || level === "Low") return "#4CAF50"; // Green
    if (percent < 70 || level === "Moderate") return "#FFA726"; // Orange
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
            {EXPERIENCES.map((exp) => (
              <option key={exp.id} value={exp.id}>
                {exp.title} ({exp.districtName})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Status & Metrics Row */}
      <div className="crowd-status-grid">
        {/* Current Live Density Gauge */}
        <div className="crowd-card live-gauge-card">
          <div className="card-top-row">
            <h3 className="card-heading font-serif">{language === "ta" ? "தற்போதைய நெரிசல் அளவு" : "Live Crowd Density"}</h3>
            <span className="live-pulse-dot"></span>
          </div>

          <div className="gauge-display">
            <div className="density-number font-serif" style={{ color: levelColor }}>
              {analysis.crowdIndexPercent}%
            </div>
            <div className="density-label-badge" style={{ backgroundColor: `${levelColor}22`, border: `1px solid ${levelColor}`, color: levelColor }}>
              {analysis.currentCrowdLevel.toUpperCase()}
            </div>
          </div>

          <div className="density-progress-track">
            <div
              className="density-progress-fill"
              style={{ width: `${analysis.crowdIndexPercent}%`, backgroundColor: levelColor }}
            ></div>
          </div>

          <div className="gauge-meta-footer">
            <span>Avg Daily: {analysis.avgDailyVisitors}</span>
          </div>
        </div>

        {/* Best Time & Avoid Hours Card */}
        <div className="crowd-card timing-card">
          <h3 className="card-heading font-serif">{language === "ta" ? "சிறந்த தரிசன நேரம்" : "Optimal Visit Window"}</h3>

          <div className="timing-box best">
            <div className="time-badge-icon green"><Clock size={16} /></div>
            <div>
              <span className="time-label">{language === "ta" ? "பரிந்துரைக்கப்படும் நேரம்:" : "Recommended Time:"}</span>
              <h4 className="time-value">{analysis.bestTimeToVisit}</h4>
            </div>
          </div>

          <div className="timing-box avoid">
            <div className="time-badge-icon red"><AlertCircle size={16} /></div>
            <div>
              <span className="time-label">{language === "ta" ? "தவிர்க்க வேண்டிய நேரம்:" : "Peak Avoid Hours:"}</span>
              <h4 className="time-value">{analysis.avoidHours}</h4>
            </div>
          </div>
        </div>

        {/* Weather & Season Factor */}
        <div className="crowd-card weather-card">
          <h3 className="card-heading font-serif">{language === "ta" ? "வானிலை & திருவிழா தாக்கம்" : "Weather & Season Factors"}</h3>

          <div className="factor-item">
            <Sun size={18} className="factor-icon" />
            <div>
              <span className="factor-label">{language === "ta" ? "வானிலை:" : "Weather Condition:"}</span>
              <span className="factor-val">{analysis.weatherImpact}</span>
            </div>
          </div>

          <div className="factor-item">
            <Calendar size={18} className="factor-icon" />
            <div>
              <span className="factor-label">{language === "ta" ? "உச்ச திருவிழா காலம்:" : "Peak Festival Season:"}</span>
              <span className="factor-val">{analysis.peakSeason}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Crowd Graph */}
      <div className="graph-section-card">
        <div className="graph-header-row">
          <div>
            <h3 className="graph-title font-serif">
              <TrendingUp size={18} className="inline-icon" />
              {language === "ta" ? "மணிநேர நெரிசல் வரைபடம் (காலை 6 - இரவு 9)" : "Hourly Crowd Density Graph (6 AM - 9 PM)"}
            </h3>
            <span className="graph-sub">
              {language === "ta" ? "TN சுற்றுலா துறை வரலாற்று தரவுகளின்படி" : "Based on historical visitor movement logs"}
            </span>
          </div>
        </div>

        {/* Visual Bar Chart */}
        <div className="bar-chart-wrapper">
          <div className="bar-chart-container">
            {analysis.hourlyDensity.map((item, idx) => {
              const barColor = getLevelColor(item.label, item.density);
              return (
                <div key={idx} className="chart-bar-column">
                  <div className="bar-tooltip">
                    <span className="bar-time">{item.hour}</span>
                    <span className="bar-pct" style={{ color: barColor }}>{item.density}%</span>
                    <span className="bar-status">({item.label})</span>
                  </div>
                  <div className="bar-fill-track">
                    <div
                      className="bar-fill"
                      style={{
                        height: `${item.density}%`,
                        backgroundColor: barColor
                      }}
                    ></div>
                  </div>
                  <span className="bar-x-label">{item.hour}</span>
                </div>
              );
            })}
          </div>

          <div className="chart-legend-row">
            <div className="legend-item"><span className="legend-dot green"></span> {language === "ta" ? "குறைந்த நெரிசல் (<35%)" : "Low Crowd (<35%)"}</div>
            <div className="legend-item"><span className="legend-dot orange"></span> {language === "ta" ? "மிதமான நெரிசல் (35-70%)" : "Moderate Crowd (35-70%)"}</div>
            <div className="legend-item"><span className="legend-dot red"></span> {language === "ta" ? "அதிக நெரிசல் (>70%)" : "Peak Crowd (>70%)"}</div>
          </div>

          <div className="time-definitions-row font-serif">
            <span><strong>AM</strong> = Ante Meridiem (Morning Hours 12:00 AM - 11:59 AM)</span>
            <span>•</span>
            <span><strong>PM</strong> = Post Meridiem (Afternoon / Evening Hours 12:00 PM - 11:59 PM)</span>
          </div>
        </div>
      </div>

      {/* Weekly Forecast & Gemma AI Insight Box */}
      <div className="crowd-bottom-grid">
        {/* Day-of-Week Forecast */}
        <div className="weekly-card">
          <h3 className="card-heading font-serif">
            <Calendar size={16} className="inline-icon" />
            {language === "ta" ? "வாராந்திர நெரிசல் கணிப்பு" : "Weekly Crowd Forecast"}
          </h3>
          <div className="weekly-bars-list">
            {analysis.weeklyPattern.map((w, idx) => {
              const wColor = getLevelColor("", w.percent);
              return (
                <div key={idx} className="weekly-bar-row">
                  <span className="week-day-name">{w.day}</span>
                  <div className="week-bar-track">
                    <div className="week-bar-fill" style={{ width: `${w.percent}%`, backgroundColor: wColor }}></div>
                  </div>
                  <span className="week-percent">{w.percent}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gemma AI Predictive Insight Box */}
        <div className="gemma-crowd-insight-card">
          <div className="gemma-badge-header">
            <Cpu size={18} className="gemma-spin-icon" />
            <span>Gemma 4 Edge AI Crowd Analysis</span>
          </div>

          <p className="gemma-insight-text font-serif">
            "{analysis.activeInsight}"
          </p>

          {onApplyToPlanner && (
            <button className="apply-planner-btn" onClick={() => onApplyToPlanner(selectedPlaceId)}>
              <Sparkles size={16} />
              <span>{language === "ta" ? "பயணத் திட்டத்தில் இந்த நெரிசல் வழிகாட்டியைப் பயன்படுத்துங்கள்" : "Optimize Planner for Low Crowd Hours"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
