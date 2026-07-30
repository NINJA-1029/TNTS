import React, { useState, useEffect } from "react";
import { HeaderNav } from "./components/HeaderNav";
import { KolamBorders } from "./components/KolamBorders";
import { TravelArcPlanner } from "./components/TravelArcPlanner";
import { ExploreCategories } from "./components/ExploreCategories";
import { OfflineMapView } from "./components/OfflineMapView";
import { CrowdAnalyzer } from "./components/CrowdAnalyzer";
import { SOSModal } from "./components/SOSModal";
import { AlertTriangle, ShieldCheck, Cpu, HeartHandshake, Compass, Sparkles, MapPin, Users } from "lucide-react";
import { getSavedItinerary } from "./services/offlineStorage";
import { t } from "./data/i18n";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("planner");
  const [language, setLanguage] = useState("en");
  const [isOffline, setIsOffline] = useState(true); // Default to offline-first mode
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(() => getSavedItinerary());

  // Keyboard shortcut: Press Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSosOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleApplyCrowdToPlanner = (placeId) => {
    setActiveTab("planner");
  };

  return (
    <div className="app-root-container">
      {/* Traditional Side & Corner Kolam Image Borders */}
      <KolamBorders />

      {/* Top Header Navigation */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        isOffline={isOffline}
        setIsOffline={setIsOffline}
        onOpenSos={() => setIsSosOpen(true)}
      />

      {/* Main Container View Switcher */}
      <main className="main-content-viewport">
        {/* Tab 1: AI Planner */}
        {activeTab === "planner" && (
          <div className="view-pane fade-in">
            <TravelArcPlanner 
              language={language} 
              generatedItinerary={generatedItinerary}
              setGeneratedItinerary={setGeneratedItinerary}
              isOffline={isOffline}
            />
          </div>
        )}

        {/* Tab 2: Explore */}
        {activeTab === "explore" && (
          <div className="view-pane fade-in">
            <ExploreCategories language={language} />
          </div>
        )}

        {/* Tab 3: Map View */}
        {activeTab === "map" && (
          <div className="view-pane fade-in">
            <OfflineMapView language={language} itinerary={generatedItinerary} />
          </div>
        )}

        {/* Tab 4: Crowd Analyzer */}
        {activeTab === "crowd" && (
          <div className="view-pane fade-in">
            <CrowdAnalyzer language={language} onApplyToPlanner={handleApplyCrowdToPlanner} />
          </div>
        )}
      </main>

      {/* Sandal & Maroon Glassmorphic Site Footer */}
      <footer className="site-footer">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo font-serif">
              <Compass size={20} className="logo-compass" />
              <span>{t("footer.brand", language)}</span>
            </div>
            <p className="footer-tagline">{t("footer.tagline", language)}</p>
            <p className="footer-desc">
              {t("footer.desc", language)}
            </p>
          </div>

          {/* Quick Nav */}
          <div className="footer-col nav-col">
            <h4 className="footer-heading font-serif">{t("footer.quickNav", language)}</h4>
            <ul className="footer-links">
              <li><button onClick={() => setActiveTab("planner")}><Sparkles size={14} className="footer-link-icon" /> {t("footer.aiPlanner", language)}</button></li>
              <li><button onClick={() => setActiveTab("explore")}><Compass size={14} className="footer-link-icon" /> {t("footer.heritageExplorer", language)}</button></li>
              <li><button onClick={() => setActiveTab("map")}><MapPin size={14} className="footer-link-icon" /> {t("footer.offlineMap", language)}</button></li>
              <li><button onClick={() => setActiveTab("crowd")}><Users size={14} className="footer-link-icon" /> {t("nav.crowdAnalyzer", language)}</button></li>
            </ul>
          </div>

          {/* Safety & Certification */}
          <div className="footer-col cert-col">
            <h4 className="footer-heading font-serif">{t("footer.safetyCert", language)}</h4>
            <div className="cert-badge-box">
              <ShieldCheck size={16} color="#81C784" />
              <span>{t("footer.certifiedSafe", language)}</span>
            </div>
            <div className="cert-badge-box">
              <Cpu size={16} color="#F8C868" />
              <span>{t("footer.poweredBy", language)}</span>
            </div>
            <div className="cert-badge-box">
              <HeartHandshake size={16} color="#FF7A00" />
              <span>{t("footer.zeroCarbonTourism", language)}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {t("footer.copyright", language)}</p>
        </div>
      </footer>

      {/* FLOATING SOS BUTTON */}
      <button 
        className="floating-sos-btn pulse-glow" 
        onClick={() => setIsSosOpen(true)}
        aria-label="Activate Emergency SOS"
      >
        <span className="sos-pill-badge">SOS</span>
        <AlertTriangle size={24} className="sos-alert-icon" />
      </button>

      {/* SOS Emergency Dashboard Modal */}
      <SOSModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} language={language} />
    </div>
  );
}
