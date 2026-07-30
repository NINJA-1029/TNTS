import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
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
  Cpu
} from "lucide-react";
import { DISTRICTS } from "../data/heritageData";
import { generateGemmaItinerary, speakAudioGuide, stopAudioGuide } from "../services/gemmaEdgeEngine";
import { saveItinerary } from "../services/offlineStorage";

export function TravelArcPlanner({ language, generatedItinerary, setGeneratedItinerary, isOffline }) {
  const [plannerStep, setPlannerStep] = useState(1); // 1: INTERESTS, 2: LOGISTICS, 3: CURATION
  const [selectedThemes, setSelectedThemes] = useState(["agri", "heritage"]);
  const [durationDays, setDurationDays] = useState(3);
  const [startDistrict, setStartDistrict] = useState("madurai");
  const [safeForWomen, setSafeForWomen] = useState(true);
  const [sustainableFirst, setSustainableFirst] = useState(true);

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
          <h1 className="travel-arc-title font-serif">Travel Arc</h1>
          <p className="travel-arc-tagline">CRAFTING TAMIL NADU'S HERITAGE STORIES</p>
        </div>

        {/* Step Control Capsule (INTERESTS / LOGISTICS / CURATION) */}
        <div className="segmented-step-tabs">
          <button 
            className={`step-tab-pill ${plannerStep === 1 ? "active" : ""}`}
            onClick={() => setPlannerStep(1)}
          >
            <Compass size={16} />
            <span>INTERESTS</span>
          </button>

          <button 
            className={`step-tab-pill ${plannerStep === 2 ? "active" : ""}`}
            onClick={() => setPlannerStep(2)}
          >
            <Clock size={16} />
            <span>LOGISTICS</span>
          </button>

          <button 
            className={`step-tab-pill ${plannerStep === 3 ? "active" : ""}`}
            onClick={() => setPlannerStep(3)}
          >
            <Sparkles size={16} />
            <span>CURATION</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Grid Layout matching Image 2 */}
      <div className="planner-main-grid">
        {/* Left Main Card (Yellow background matching reference) */}
        <div className="planner-yellow-card">
          {plannerStep === 1 && (
            <div className="step-content-container fade-in">
              <h2 className="card-main-title font-serif">WHAT FUELS YOUR CURIOSITY?</h2>
              <span className="card-sub-title">SELECT ONE OR MORE THEMES</span>

              {/* 3 Theme Cards Grid */}
              <div className="theme-cards-grid">
                <div 
                  className={`theme-card-box ${selectedThemes.includes("agri") ? "selected" : ""}`}
                  onClick={() => toggleTheme("agri")}
                >
                  <div className="theme-card-icon">🌾</div>
                  <h3 className="theme-card-name">FARM & VILLAGE</h3>
                  <p className="theme-card-desc">Farmstays & Villages</p>
                </div>

                <div 
                  className={`theme-card-box ${selectedThemes.includes("heritage") ? "selected" : ""}`}
                  onClick={() => toggleTheme("heritage")}
                >
                  <div className="theme-card-icon">🏛️</div>
                  <h3 className="theme-card-name">ART & HERITAGE</h3>
                  <p className="theme-card-desc">Ancient Temples & Arts</p>
                </div>

                <div 
                  className={`theme-card-box ${selectedThemes.includes("eco") ? "selected" : ""}`}
                  onClick={() => toggleTheme("eco")}
                >
                  <div className="theme-card-icon">🏔️</div>
                  <h3 className="theme-card-name">WILD & NATURE</h3>
                  <p className="theme-card-desc">Mountains & Wildlife</p>
                </div>
              </div>

              {/* Bottom Right Action Button inside Card */}
              <div className="card-action-bar">
                <button className="set-logistics-btn" onClick={() => setPlannerStep(2)}>
                  <span>SET LOGISTICS</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {plannerStep === 2 && (
            <div className="step-content-container fade-in">
              <h2 className="card-main-title font-serif">DEFINE YOUR RHYTHM.</h2>
              <span className="card-sub-title">CUSTOMIZE YOUR TRIP DURATION & START POINT</span>

              {/* Duration Slider Container */}
              <div className="duration-slider-box">
                <div className="slider-label-row">
                  <span className="label-text">📅 HOW LONG?</span>
                  <span className="duration-display">{durationDays} Days</span>
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
                  <span>1 Day</span>
                  <span>7 Days</span>
                  <span>14 Days</span>
                </div>
              </div>

              {/* Start Point Dropdown */}
              <div className="start-point-box">
                <label className="label-text">START POINT DISTRICT</label>
                <select 
                  value={startDistrict} 
                  onChange={(e) => setStartDistrict(e.target.value)}
                  className="district-custom-select"
                >
                  {DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.tamilName}) - {d.zone} Zone
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
                  <span>🛡️ Filter Women-Safe Vetted Hostels & Guides</span>
                </label>
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={sustainableFirst} 
                    onChange={(e) => setSustainableFirst(e.target.checked)} 
                  />
                  <span>🌱 Prioritize Organic Farmstays & Zero-Carbon Transit</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="step-action-footer-row">
                <button className="back-step-btn" onClick={() => setPlannerStep(1)}>
                  <ArrowLeft size={16} />
                  <span>GO BACK</span>
                </button>

                <button className="generate-gemma-btn" onClick={handleGenerate}>
                  <Sparkles size={18} />
                  <span>GENERATE WITH GEMMA 4 AI</span>
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
                  <h3>Gemma 4 Edge AI Engine Active</h3>
                  <p className="status-text">{progressStatus}</p>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${generationProgress}%` }}></div>
                  </div>
                  <span className="percent-text">{generationProgress}% Completed (100% Offline)</span>
                </div>
              ) : (
                <div className="curation-result-box">
                  <div className="result-header-bar">
                    <div>
                      <h3 className="result-title">YOUR GEMMA 2B HERITAGE ARC</h3>
                      <span className="meta-badge">
                        {generatedItinerary?.meta?.durationDays} Days • Starts in {generatedItinerary?.meta?.startDistrict} • Cached Offline
                      </span>
                    </div>
                    <div className="result-actions">
                      <button className="save-btn" onClick={handleSaveItinerary}>
                        <Bookmark size={16} />
                        <span>Save Offline</span>
                      </button>
                    </div>
                  </div>

                  {savedSuccessMsg && (
                    <div className="notice-banner success">
                      <CheckCircle size={16} />
                      <span>Itinerary saved locally! Accessible anytime without internet connection.</span>
                    </div>
                  )}

                  {/* Day-by-day Itinerary */}
                  <div className="itinerary-days-list">
                    {generatedItinerary?.days.map((dayItem) => (
                      <div key={dayItem.day} className="day-card">
                        <div className="day-card-header">
                          <div className="day-badge">Day {dayItem.day}</div>
                          <div className="day-title-group">
                            <h4>{dayItem.title}</h4>
                            <span className="tamil-sub">{dayItem.tamilTitle}</span>
                          </div>
                          <button 
                            className={`audio-narrate-btn ${playingAudioDay === dayItem.day ? "playing" : ""}`}
                            onClick={() => handlePlayDayAudio(dayItem)}
                            title="Listen offline voice guide"
                          >
                            <Volume2 size={16} />
                            <span>{playingAudioDay === dayItem.day ? "Pause Voice" : "Voice Guide"}</span>
                          </button>
                        </div>

                        <ul className="activities-list">
                          {dayItem.activities.map((act, actIdx) => (
                            <li key={actIdx}>
                              <CheckCircle size={14} className="check-icon" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="gemma-tip-box">
                          <Cpu size={14} />
                          <span><strong>Gemma Edge Insight:</strong> {dayItem.gemmaTip}</span>
                        </div>
                      </div>
                    ))}
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
            <h3 className="pref-heading">YOUR PREFERENCES</h3>

            <div className="pref-item-row">
              <div className="pref-check-circle">✓</div>
              <div className="pref-item-info">
                <label className="pref-item-label">INTERESTS</label>
                <span className="pref-item-value">
                  {selectedThemes.length === 0 
                    ? "None selected" 
                    : selectedThemes.map(t => t === "agri" ? "Farm & Soil" : t === "heritage" ? "Art & Heritage" : "Wild & Nature").join(", ")}
                </span>
              </div>
            </div>

            <div className="pref-item-row">
              <div className="pref-check-circle">✓</div>
              <div className="pref-item-info">
                <label className="pref-item-label">TRAVEL DURATION</label>
                <span className="pref-item-value">{durationDays} Days</span>
              </div>
            </div>

            <div className="pref-item-row">
              <div className="pref-check-circle">✓</div>
              <div className="pref-item-info">
                <label className="pref-item-label">TARGET ZONE</label>
                <span className="pref-item-value">All</span>
              </div>
            </div>
          </div>

          {/* Inspirational Quote Card */}
          <div className="quote-pill-box">
            <p className="quote-text font-serif">
              "Traveling is not just about the destination, it's about the heritage we rediscover along the way."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
