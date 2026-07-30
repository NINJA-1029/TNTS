import React from "react";
import { Sparkles, Compass, Map, Globe, Wifi, WifiOff, Users } from "lucide-react";
import { t } from "../data/i18n";

export function HeaderNav({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  isOffline,
  setIsOffline,
  onOpenSos
}) {
  const languageOptions = [
    { code: "en", label: "EN" },
    { code: "ta", label: "தமிழ் (TA)" },
    { code: "te", label: "తెలుగు (TE)" },
    { code: "hi", label: "हिंदी (HI)" },
    { code: "ml", label: "മലയാളം (ML)" },
    { code: "kn", label: "ಕನ್ನಡ (KN)" }
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => setActiveTab("explore")}>
          <div className="gopuram-icon-wrapper">
            <svg viewBox="0 0 100 120" className="gopuram-svg">
              <path
                d="M50 5 L65 30 L80 30 L75 55 L85 55 L80 80 L90 80 L85 110 L15 110 L10 80 L20 80 L15 55 L25 55 L20 30 L35 30 Z"
                fill="#FFC107"
                stroke="#FF6F00"
                strokeWidth="2"
              />
              <rect x="42" y="80" width="16" height="30" fill="#3D081B" rx="2" />
              <circle cx="50" cy="20" r="4" fill="#FFF" />
            </svg>
          </div>
          <div className="brand-text font-serif">
            <h1 className="brand-title">Heritage Farm</h1>
            <span className="brand-tagline">{t("footer.tagline", language)}</span>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="main-nav">
          <button
            className={`nav-link ${activeTab === "planner" ? "active" : ""}`}
            onClick={() => setActiveTab("planner")}
          >
            <Sparkles size={16} className="nav-icon" />
            <span>{t("nav.planner", language)}</span>
          </button>

          <button
            className={`nav-link ${activeTab === "explore" ? "active" : ""}`}
            onClick={() => setActiveTab("explore")}
          >
            <Compass size={16} className="nav-icon" />
            <span>{t("nav.explore", language)}</span>
          </button>

          <button
            className={`nav-link ${activeTab === "map" ? "active" : ""}`}
            onClick={() => setActiveTab("map")}
          >
            <Map size={16} className="nav-icon" />
            <span>{t("nav.map", language)}</span>
          </button>

          <button
            className={`nav-link ${activeTab === "crowd" ? "active" : ""}`}
            onClick={() => setActiveTab("crowd")}
          >
            <Users size={16} className="nav-icon" />
            <span>{t("nav.crowdAnalyzer", language)}</span>
          </button>

          {/* 6-Language Switcher Dropdown */}
          <div className="lang-switcher">
            <Globe size={15} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-select"
            >
              {languageOptions.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Offline / Edge Engine Mode Toggle */}
          <button
            className={`edge-status-pill ${isOffline ? "offline" : "online"}`}
            onClick={() => setIsOffline(!isOffline)}
            title="Click to toggle offline airplane test mode"
          >
            {isOffline ? <WifiOff size={14} /> : <Wifi size={14} />}
            <span className="hide-mobile">{isOffline ? t("nav.gemmaOffline", language) : t("nav.gemmaSync", language)}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
