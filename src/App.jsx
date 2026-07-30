import React, { useState, useEffect } from "react";
import { HeaderNav } from "./components/HeaderNav";
import { KolamBorders } from "./components/KolamBorders";
import { TravelArcPlanner } from "./components/TravelArcPlanner";
import { ExploreCategories } from "./components/ExploreCategories";
import { ARExplorerCard, ARExplorerModal } from "./components/ARExplorerModal";
import { OfflineMapView } from "./components/OfflineMapView";
import { SOSModal } from "./components/SOSModal";
import { AlertTriangle, ShieldCheck, Cpu, HeartHandshake, Compass } from "lucide-react";
import { getSavedItinerary } from "./services/offlineStorage";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("planner");
  const [language, setLanguage] = useState("en");
  const [isOffline, setIsOffline] = useState(true); // Default to offline-first mode
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isArOpen, setIsArOpen] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(() => getSavedItinerary());

  // Keyboard shortcut: Press Escape to close modals or 'S' for SOS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSosOpen(false);
        setIsArOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app-root-container">
      {/* Traditional Side & Corner Kolam SVG Borders */}
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
            <ARExplorerCard onLaunchAR={() => setIsArOpen(true)} language={language} />
            <ExploreCategories language={language} />
          </div>
        )}

        {/* Tab 3: Map View */}
        {activeTab === "map" && (
          <div className="view-pane fade-in">
            <OfflineMapView language={language} itinerary={generatedItinerary} />
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
              <span>Heritage Farm • Travel Arc</span>
            </div>
            <p className="footer-tagline">Crafting Tamil Nadu's Heritage Stories</p>
            <p className="footer-desc">
              100% Offline Edge AI tourist guide for exploring ancient UNESCO Chola & Pallava temples, organic farmstays, local food spots, and Western Ghats eco trails.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="footer-col nav-col">
            <h4 className="footer-heading font-serif">Quick Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => setActiveTab("planner")}>✨ AI Itinerary Planner</button></li>
              <li><button onClick={() => setActiveTab("explore")}>🧭 Heritage Explorer</button></li>
              <li><button onClick={() => setActiveTab("map")}>📍 Offline Vector Map</button></li>
              <li><button onClick={() => setIsArOpen(true)}>🕶️ AR Camera Guide</button></li>
            </ul>
          </div>

          {/* Safety & Certification */}
          <div className="footer-col cert-col">
            <h4 className="footer-heading font-serif">Safety & Certification</h4>
            <div className="cert-badge-box">
              <ShieldCheck size={16} color="#81C784" />
              <span>Certified Safe for Women & Solo Travelers</span>
            </div>
            <div className="cert-badge-box">
              <Cpu size={16} color="#F8C868" />
              <span>Powered by Google Gemma 2B Edge AI</span>
            </div>
            <div className="cert-badge-box">
              <HeartHandshake size={16} color="#FF7A00" />
              <span>Zero-Carbon Sustainable Rural Tourism</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2026 Heritage Farm • Tamil Nadu Offline Edge AI Guide</p>
          <div className="footer-status-pill">
            <span className="live-dot"></span>
            <span>Gemma 2B Engine Active (100% Offline)</span>
          </div>
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
      <SOSModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />

      {/* AR Explorer Live HUD Modal */}
      <ARExplorerModal isOpen={isArOpen} onClose={() => setIsArOpen(false)} language={language} />
    </div>
  );
}
