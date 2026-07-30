import React, { useState, useRef, useEffect } from "react";
import { Camera, Volume2, VolumeX, X, Sparkles, Navigation } from "lucide-react";
import { speakAudioGuide, stopAudioGuide } from "../services/gemmaEdgeEngine";

export function ARExplorerCard({ onLaunchAR, language }) {
  return (
    <section className="ar-explorer-hero-card">
      <div className="ar-card-body">
        <div className="ar-left-content">
          <div className="new-feature-badge font-serif">
            <Sparkles size={14} />
            <span>UPCOMING FEATURE</span>
          </div>

          <h2 className="ar-title font-serif">AR Explorer with Gemma 4 AI Guide</h2>
          <p className="ar-description">
            {language === "en"
              ? "Meet your virtual Tamil Nadu AI guide powered by Gemma 4 who speaks Tamil & English. Point your camera to see AR markers for nearby heritage sites, hear cultural stories, and book instantly."
              : "தமிழ் மற்றும் ஆங்கிலத்தில் பேசும் தமிழ்நாடு மெய்நிகர் Gemma 4 AI வழிகாட்டியைச் சந்தியுங்கள். அருகில் உள்ள இடங்களை அறிய உங்கள் கேமராவைப் பயன்படுத்துங்கள்."}
          </p>

          <ul className="ar-bullets-list">
            <li>
              <span className="bullet-dot"></span>
              <span>Gemma 4 AI guide narrates history in your language (தமிழ்நாடு)</span>
            </li>
            <li>
              <span className="bullet-dot"></span>
              <span>AR overlays show nearby experiences in real-time</span>
            </li>
            <li>
              <span className="bullet-dot"></span>
              <span>Instant booking & offline map caching from AR view</span>
            </li>
            <li>
              <span className="bullet-dot"></span>
              <span>Works on any smartphone browser offline</span>
            </li>
          </ul>

          <button className="try-ar-btn" onClick={onLaunchAR}>
            <Camera size={18} />
            <span>Launch Upcoming AR Explorer</span>
          </button>
        </div>

        <div className="ar-right-mockup">
          <div className="phone-frame-mockup">
            <div className="phone-screen">
              <div className="ar-app-header font-serif">
                <span>தமிழ்நாடு</span>
              </div>
              <div className="ar-mock-overlay">
                <div className="ar-pin pulse">📍 Brihadeeswarar Temple</div>
                <div className="ar-pin">🌾 Paddy Farmstay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ARExplorerModal({ isOpen, onClose, language }) {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [selectedArPin, setSelectedArPin] = useState(null);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const arMarkers = [
    {
      id: "m1",
      title: "Meenakshi Amman Temple",
      tamilTitle: "மீனாட்சி அம்மன் திருக்கோயில்",
      distance: "45 meters away",
      audioStory: "Built in 1600 CE, this gopuram features 1,511 colorful mythological stone sculptures.",
      x: 30,
      y: 35
    },
    {
      id: "m2",
      title: "Brihadeeswarar Temple",
      tamilTitle: "தஞ்சாவூர் பெருவுடையார் கோயில்",
      distance: "120 meters away",
      audioStory: "An 80-ton single block granite carved at top, constructed without binding mortar.",
      x: 65,
      y: 25
    },
    {
      id: "m3",
      title: "Madurai Jigarthanda Hub",
      tamilTitle: "மதுரை புகழ்பெற்ற ஜிகர்தண்டா நிலையம்",
      distance: "210 meters away",
      audioStory: "Famous cold almond resin and Nannari syrup dessert drink shop established in 1977.",
      x: 75,
      y: 65
    }
  ];

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [isOpen]);

  const startCamera = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      }
    } catch (e) {
      console.log("Using AR simulation backdrop");
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    stopAudioGuide();
    setIsPlayingVoice(false);
  };

  const handleSpeakStory = (marker) => {
    setSelectedArPin(marker);
    const story = language === "ta" ? marker.tamilTitle + ". " + marker.audioStory : marker.audioStory;
    speakAudioGuide(story, language === "ta" ? "ta-IN" : "en-IN");
    setIsPlayingVoice(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop fade-in" onClick={onClose}>
      <div className="ar-modal-container slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="ar-modal-header">
          <div className="ar-title-tag font-serif">
            <Camera size={20} />
            <span>AR EXPLORER HUD • தமிழ்நாடு AI GUIDE</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="ar-camera-view-port">
          {/* Real Web Camera or Simulated Historic Backdrop */}
          {cameraActive ? (
            <video ref={videoRef} autoPlay playsInline className="ar-video-feed" />
          ) : (
            <div className="ar-simulated-backdrop">
              <div className="sky-overlay"></div>
              <div className="monument-silhouette"></div>
            </div>
          )}

          {/* HUD Target Overlay */}
          <div className="hud-overlay-grid">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="compass-badge font-serif">
              <Navigation size={14} />
              <span>HEADING 142° SE • OFFLINE AR RADAR</span>
            </div>

            {/* Interactive Floating AR Pins */}
            {arMarkers.map((marker) => (
              <button
                key={marker.id}
                className={`ar-floating-marker ${selectedArPin?.id === marker.id ? "selected" : ""}`}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                onClick={() => handleSpeakStory(marker)}
              >
                <div className="pin-beacon"></div>
                <div className="pin-card-preview">
                  <div className="pin-title">{language === "ta" ? marker.tamilTitle : marker.title}</div>
                  <div className="pin-dist">{marker.distance}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Pin Info Card */}
          {selectedArPin && (
            <div className="ar-info-drawer fade-in">
              <div className="drawer-header">
                <div>
                  <h4>{selectedArPin.title}</h4>
                  <span className="tamil-sub">{selectedArPin.tamilTitle}</span>
                </div>
                <button
                  className="voice-play-chip"
                  onClick={() => handleSpeakStory(selectedArPin)}
                >
                  {isPlayingVoice ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  <span>{isPlayingVoice ? "Stop Audio" : "Play Narration"}</span>
                </button>
              </div>
              <p className="ar-story-text">{selectedArPin.audioStory}</p>
            </div>
          )}
        </div>

        <div className="ar-modal-footer">
          <Sparkles size={16} />
          <span>Gemma Edge AI Camera Vision • Works 100% Offline without Cellular Data</span>
        </div>
      </div>
    </div>
  );
}
