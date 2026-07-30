import React, { useState, useEffect } from "react";
import { 
  Sprout, 
  Landmark, 
  Mountain, 
  CheckCircle, 
  Sliders, 
  ArrowRight, 
  ArrowLeft, 
  Volume2, 
  Bookmark, 
  Clock, 
  Compass,
  Cpu,
  Calendar,
  ShieldCheck,
  Users
} from "lucide-react";
import { DISTRICTS, getDistrictLabel } from "../data/heritageData";
import { t } from "../data/i18n";
import { generateGemmaItinerary, speakAudioGuide, stopAudioGuide } from "../services/gemmaEdgeEngine";
import { saveItinerary } from "../services/offlineStorage";

export function TravelArcPlanner({ language, generatedItinerary, setGeneratedItinerary, isOffline }) {
  const [plannerStep, setPlannerStep] = useState(1); // 1: INTERESTS, 2: LOGISTICS, 3: CURATION
  const [selectedThemes, setSelectedThemes] = useState(["agri", "heritage"]);
  const [durationDays, setDurationDays] = useState(3);
  const [startDistrict, setStartDistrict] = useState("madurai");
  const [safeForWomen, setSafeForWomen] = useState(true);
  const [sustainableFirst, setSustainableFirst] = useState(true);
  const [avoidCrowds, setAvoidCrowds] = useState(true);

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState("");
  const [playingAudioDay, setPlayingAudioDay] = useState(null);
  const [savedSuccessMsg, setSavedSuccessMsg] = useState(false);

  const [showSettings, setShowSettings] = useState(false);
  const [apiMode, setApiMode] = useState(() => localStorage.getItem("gemma_api_mode") || "simulated");
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("gemma_api_key") || "");
  const [cloudModel, setCloudModel] = useState(() => localStorage.getItem("gemma_cloud_model") || "gemini-2.5-flash");
  const [ollamaEndpoint, setOllamaEndpoint] = useState(() => localStorage.getItem("gemma_ollama_endpoint") || "http://localhost:11434/api/generate");
  const [ollamaModel, setOllamaModel] = useState(() => localStorage.getItem("gemma_ollama_model") || "gemma:2b");

  useEffect(() => {
    localStorage.setItem("gemma_api_mode", apiMode);
  }, [apiMode]);

  useEffect(() => {
    localStorage.setItem("gemma_api_key", apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem("gemma_cloud_model", cloudModel);
  }, [cloudModel]);

  useEffect(() => {
    localStorage.setItem("gemma_ollama_endpoint", ollamaEndpoint);
  }, [ollamaEndpoint]);

  useEffect(() => {
    localStorage.setItem("gemma_ollama_model", ollamaModel);
  }, [ollamaModel]);

  const toggleTheme = (themeId) => {
    if (selectedThemes.includes(themeId)) {
      if (selectedThemes.length > 1) {
        setSelectedThemes(selectedThemes.filter((t) => t !== themeId));
      }
    } else {
      setSelectedThemes([...selectedThemes, themeId]);
    }
  };

  const handleGenerate = async () => {
    setPlannerStep(3);
    setIsGenerating(true);
    setGenerationProgress(0);

    const result = await generateGemmaItinerary({
      duration: durationDays,
      interests: selectedThemes,
      startPoint: startDistrict,
      safeForWomen,
      sustainableFirst,
      onProgress: (status, pct) => {
        setProgressStatus(status);
        setGenerationProgress(pct);
      },
      apiMode: isOffline ? "simulated" : apiMode,
      apiKey,
      cloudModel,
      ollamaEndpoint,
      ollamaModel
    });

    setGeneratedItinerary(result);
    setIsGenerating(false);
  };

  const handlePlayDayAudio = (dayObj) => {
    if (playingAudioDay === dayObj.day) {
      stopAudioGuide();
      setPlayingAudioDay(null);
    } else {
      const textToSpeak = `${dayObj.title}. Activities: ${dayObj.activities.join(". ")}. Safety Note: ${dayObj.gemmaTip}`;
      speakAudioGuide(textToSpeak, language === "ta" ? "ta-IN" : "en-IN");
      setPlayingAudioDay(dayObj.day);
    }
  };

  const handleSaveItinerary = () => {
    if (generatedItinerary) {
      saveItinerary(generatedItinerary);
      setSavedSuccessMsg(true);
      setTimeout(() => setSavedSuccessMsg(false), 4000);
    }
  };

  const selectedDistrictObj = DISTRICTS.find((d) => d.id === startDistrict) || DISTRICTS[0];

  return (
    <div className="travel-arc-planner-root">
      {/* Header Title & Segmented Step Control Bar matching Image 2 */}
      <div className="planner-header-bar">
        <div className="planner-brand-section">
          <h1 className="travel-arc-title font-serif">{t("planner.title", language)}</h1>
          <p className="travel-arc-tagline">{t("planner.tagline", language)}</p>
        </div>

        {/* Step Control Capsule (INTERESTS / LOGISTICS / CURATION) */}
        <div className="segmented-step-tabs">
          <button 
            className={`step-tab-pill ${plannerStep === 1 ? "active" : ""}`}
            onClick={() => setPlannerStep(1)}
          >
            <Compass size={16} />
            <span>{t("planner.interests", language)}</span>
          </button>

          <button 
            className={`step-tab-pill ${plannerStep === 2 ? "active" : ""}`}
            onClick={() => setPlannerStep(2)}
          >
            <Clock size={16} />
            <span>{t("planner.logistics", language)}</span>
          </button>

          <button 
            className={`step-tab-pill ${plannerStep === 3 ? "active" : ""}`}
            onClick={() => setPlannerStep(3)}
          >
            <Compass size={16} />
            <span>{t("planner.curation", language)}</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Grid Layout matching Image 2 */}
      <div className="planner-main-grid">
        {/* Left Main Card (Yellow background matching reference) */}
        <div className="planner-yellow-card">
          {plannerStep === 1 && (
            <div className="step-content-container fade-in">
              <h2 className="card-main-title font-serif">{t("planner.whatFuels", language)}</h2>
              <span className="card-sub-title">{t("planner.selectThemes", language)}</span>

              {/* 3 Theme Cards Grid */}
              <div className="theme-cards-grid">
                <div 
                  className={`theme-card-box ${selectedThemes.includes("agri") ? "selected" : ""}`}
                  onClick={() => toggleTheme("agri")}
                >
                  <div className="theme-card-icon"><Sprout size={32} /></div>
                  <h3 className="theme-card-name">{t("planner.farmVillage", language)}</h3>
                  <p className="theme-card-desc">{t("planner.farmVillageDesc", language)}</p>
                </div>

                <div 
                  className={`theme-card-box ${selectedThemes.includes("heritage") ? "selected" : ""}`}
                  onClick={() => toggleTheme("heritage")}
                >
                  <div className="theme-card-icon"><Landmark size={32} /></div>
                  <h3 className="theme-card-name">{t("planner.artHeritage", language)}</h3>
                  <p className="theme-card-desc">{t("planner.artHeritageDesc", language)}</p>
                </div>

                <div 
                  className={`theme-card-box ${selectedThemes.includes("eco") ? "selected" : ""}`}
                  onClick={() => toggleTheme("eco")}
                >
                  <div className="theme-card-icon"><Mountain size={32} /></div>
                  <h3 className="theme-card-name">{t("planner.wildNature", language)}</h3>
                  <p className="theme-card-desc">{t("planner.wildNatureDesc", language)}</p>
                </div>
              </div>

              {/* Bottom Right Action Button inside Card */}
              <div className="card-action-bar">
                <button className="set-logistics-btn" onClick={() => setPlannerStep(2)}>
                  <span>{t("planner.setLogistics", language)}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {plannerStep === 2 && (
            <div className="step-content-container fade-in">
              <h2 className="card-main-title font-serif">{t("planner.defineRhythm", language)}</h2>
              <span className="card-sub-title">{t("planner.customizeTrip", language)}</span>

              {/* Duration Slider Container */}
              <div className="duration-slider-box">
                <div className="slider-label-row">
                  <span className="label-text"><Calendar size={16} className="inline-icon" /> {t("planner.howLong", language)}</span>
                  <span className="duration-display">{durationDays} {t("planner.days", language)}</span>
                </div>

                <input 
                  type="range" 
                  min="1" 
                  max="14" 
                  value={durationDays} 
                  onChange={(e) => setDurationDays(parseInt(e.target.value, 10))}
                  className="rhythm-range-slider"
                />
                <div className="range-min-max">
                  <span>1 {t("planner.day", language)}</span>
                  <span>7 {t("planner.days", language)}</span>
                  <span>14 {t("planner.days", language)}</span>
                </div>
              </div>

              {/* Start Point Dropdown */}
              <div className="start-point-box">
                <label className="label-text">{t("planner.startPoint", language)}</label>
                <select 
                  value={startDistrict} 
                  onChange={(e) => setStartDistrict(e.target.value)}
                  className="district-custom-select"
                >
                  {DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {getDistrictLabel(d, language)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferences Toggles */}
              <div className="preferences-toggles-grid">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={safeForWomen} 
                    onChange={(e) => setSafeForWomen(e.target.checked)} 
                  />
                  <span><ShieldCheck size={16} className="inline-icon" /> {t("planner.filterWomen", language)}</span>
                </label>
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={sustainableFirst} 
                    onChange={(e) => setSustainableFirst(e.target.checked)} 
                  />
                  <span><Sprout size={16} className="inline-icon" /> {t("planner.prioritizeOrganic", language)}</span>
                </label>
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={avoidCrowds} 
                    onChange={(e) => setAvoidCrowds(e.target.checked)} 
                  />
                  <span><Users size={16} className="inline-icon" /> {language === "ta" ? "உச்ச நெரிசலைத் தவிர்க்கவும் (ஜெம்மா AI பகுப்பாய்வு)" : "Avoid Peak Crowds (Gemma AI Analytics)"}</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="step-action-footer-row">
                <button className="back-step-btn" onClick={() => setPlannerStep(1)}>
                  <ArrowLeft size={16} />
                  <span>{t("planner.goBack", language)}</span>
                </button>

                <button className="generate-gemma-btn" onClick={handleGenerate}>
                  <ArrowRight size={18} />
                  <span>{t("planner.startPlanning", language)}</span>
                </button>
              </div>
            </div>
          )}

          {plannerStep === 3 && (
            <div className="step-content-container fade-in">
              {isGenerating ? (
                <div className="gemma-generating-state">
                  <div className="gemma-pulse-ring">
                    <Cpu size={40} className="gemma-icon-spin" />
                  </div>
                  <h3>{t("planner.edgeActive", language)}</h3>
                  <p className="status-text">{progressStatus}</p>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${generationProgress}%` }}></div>
                  </div>
                  <span className="percent-text">{generationProgress}% {t("planner.completed", language)}</span>
                </div>
              ) : (
                <div className="curation-result-box">
                  <div className="result-header-bar">
                    <div>
                      <h3 className="result-title">{t("planner.yourHeritageArc", language)}</h3>
                      <span className="meta-badge">
                        {generatedItinerary?.meta?.durationDays} {t("planner.days", language)} {" - "} {t("planner.startsIn", language)} {generatedItinerary?.meta?.startDistrict} {" - "} {t("planner.cachedOffline", language)}
                      </span>
                    </div>
                    <div className="result-actions">
                      <button className="save-btn" onClick={handleSaveItinerary}>
                        <Bookmark size={16} />
                        <span>{t("planner.saveOffline", language)}</span>
                      </button>
                    </div>
                  </div>

                  {savedSuccessMsg && (
                    <div className="notice-banner success">
                      <CheckCircle size={16} />
                      <span>{t("planner.savedSuccess", language)}</span>
                    </div>
                  )}

                  {/* Day-by-day Itinerary */}
                  <div className="itinerary-days-list">
                    {generatedItinerary?.days.map((dayItem) => {
                      const displayTitle = dayItem.localizedTitles?.[language] || (language === "ta" ? (dayItem.tamilTitle || dayItem.title) : dayItem.title);
                      const displaySubTitle = (language !== "en" && dayItem.localizedTitles?.[language]) ? dayItem.title : (language === "ta" ? dayItem.title : null);
                      const displayActivities = dayItem.localizedActivities?.[language] || (language === "ta" && dayItem.tamilActivities ? dayItem.tamilActivities : dayItem.activities);
                      const displayTip = dayItem.localizedTips?.[language] || (language === "ta" && dayItem.tamilGemmaTip ? dayItem.tamilGemmaTip : dayItem.gemmaTip);

                      return (
                        <div key={dayItem.day} className="day-card">
                          <div className="day-card-header">
                            <div className="day-badge">{t("planner.day", language)} {dayItem.day}</div>
                            <div className="day-title-group">
                              <h4>{displayTitle}</h4>
                              {displaySubTitle && <span className="tamil-sub">{displaySubTitle}</span>}
                            </div>
                            <button 
                              className={`audio-narrate-btn ${playingAudioDay === dayItem.day ? "playing" : ""}`}
                              onClick={() => handlePlayDayAudio(dayItem)}
                              title="Listen offline voice guide"
                            >
                              <Volume2 size={16} />
                              <span>{playingAudioDay === dayItem.day ? t("planner.pauseVoice", language) : t("planner.voiceGuide", language)}</span>
                            </button>
                          </div>

                          <ul className="activities-list">
                            {displayActivities.map((act, actIdx) => (
                              <li key={actIdx}>
                                <CheckCircle size={14} className="check-icon" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="gemma-tip-box">
                            <Cpu size={14} />
                            <span><strong>{t("planner.edgeInsight", language)}</strong> {displayTip}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Preferences & Quote Sidebar matching Image 2 */}
        <div className="planner-right-sidebar">
          {/* Preferences Card */}
          <div className="preferences-dark-box">
            <h3 className="pref-heading">{t("planner.preferences", language)}</h3>

            <div className="pref-item-row">
              <div className="pref-check-circle">&#10003;</div>
              <div className="pref-item-info">
                <label className="pref-item-label">{t("planner.interests", language)}</label>
                <span className="pref-item-value">
                  {selectedThemes.length === 0 
                    ? t("planner.noneSelected", language) 
                    : selectedThemes.map(th => th === "agri" ? t("planner.farmSoil", language) : th === "heritage" ? t("planner.artHeritage", language) : t("planner.wildNature", language)).join(", ")}
                </span>
              </div>
            </div>

            <div className="pref-item-row">
              <div className="pref-check-circle">&#10003;</div>
              <div className="pref-item-info">
                <label className="pref-item-label">{t("planner.travelDuration", language)}</label>
                <span className="pref-item-value">{durationDays} {t("planner.days", language)}</span>
              </div>
            </div>

            <div className="pref-item-row">
              <div className="pref-check-circle">&#10003;</div>
              <div className="pref-item-info">
                <label className="pref-item-label">{t("planner.targetZone", language)}</label>
                <span className="pref-item-value">{t("planner.all", language)}</span>
              </div>
            </div>
          </div>

          {/* Inspirational Quote Card */}
          <div className="quote-pill-box">
            <p className="quote-text font-serif">
              {t("planner.quote", language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
