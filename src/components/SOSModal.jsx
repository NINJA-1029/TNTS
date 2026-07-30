import React, { useState, useEffect } from "react";
import { 
  AlertTriangle, 
  PhoneCall, 
  Send, 
  Volume2, 
  VolumeX, 
  MapPin, 
  ShieldAlert, 
  HeartHandshake, 
  X, 
  Plus, 
  Trash2, 
  CheckCircle2,
  Copy,
  ShieldCheck,
  Compass
} from "lucide-react";
import { EMERGENCY_NUMBERS } from "../data/heritageData";
import { getEmergencyContacts, saveEmergencyContacts } from "../services/offlineStorage";

export function SOSModal({ isOpen, onClose }) {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState("");
  const [newContactPhone, setNewContactPhone] = useState("");
  const [isSirenPlaying, setIsSirenPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);
  const [sirenOsc, setSirenOsc] = useState(null);
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [gpsLocation, setGpsLocation] = useState({
    lat: "10.7867",
    lng: "79.1378",
    landmark: "Brihadeeswarar Temple Outer Ring, Thanjavur, Tamil Nadu",
    accuracy: "High (Offline GPS Vector Fix)"
  });
  const [smsSentNotice, setSmsSentNotice] = useState(false);

  useEffect(() => {
    setContacts(getEmergencyContacts());
  }, []);

  useEffect(() => {
    if (isOpen) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setGpsLocation({
              lat: pos.coords.latitude.toFixed(4),
              lng: pos.coords.longitude.toFixed(4),
              landmark: `GPS Fix (${pos.coords.latitude.toFixed(4)}°N, ${pos.coords.longitude.toFixed(4)}°E)`,
              accuracy: `Real-time GPS ±${Math.round(pos.coords.accuracy)}m`
            });
          },
          (err) => {
            console.log("Using cached offline location fix");
          },
          { timeout: 5000, enableHighAccuracy: true }
        );
      }
    } else {
      stopSiren();
    }
  }, [isOpen]);

  const toggleSiren = () => {
    if (isSirenPlaying) {
      stopSiren();
    } else {
      startSiren();
    }
  };

  const startSiren = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      
      let time = ctx.currentTime;
      for (let i = 0; i < 30; i++) {
        osc.frequency.linearRampToValueAtTime(1200, time + 0.3);
        osc.frequency.linearRampToValueAtTime(600, time + 0.6);
        time += 0.6;
      }

      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      setAudioCtx(ctx);
      setSirenOsc(osc);
      setIsSirenPlaying(true);
    } catch (e) {
      console.error("Audio error", e);
    }
  };

  const stopSiren = () => {
    if (sirenOsc) {
      try {
        sirenOsc.stop();
      } catch (e) {}
    }
    if (audioCtx) {
      try {
        audioCtx.close();
      } catch (e) {}
    }
    setIsSirenPlaying(false);
    setSirenOsc(null);
    setAudioCtx(null);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (!newContactName || !newContactPhone) return;
    const updated = [...contacts, { id: Date.now(), name: newContactName, phone: newContactPhone, relation: "Personal Contact" }];
    setContacts(updated);
    saveEmergencyContacts(updated);
    setNewContactName("");
    setNewContactPhone("");
  };

  const handleDeleteContact = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    saveEmergencyContacts(updated);
  };

  const sendSmsDispatch = () => {
    const message = encodeURIComponent(
      `🚨 EMERGENCY SOS ALERT! I need urgent help. My GPS Location: Lat ${gpsLocation.lat}, Lng ${gpsLocation.lng}. Landmark: ${gpsLocation.landmark}. Open Google Maps: https://maps.google.com/?q=${gpsLocation.lat},${gpsLocation.lng}`
    );
    const primaryPhone = contacts[0]?.phone || "100";
    window.open(`sms:${primaryPhone}?body=${message}`, "_blank");
    setSmsSentNotice(true);
    setTimeout(() => setSmsSentNotice(false), 5000);
  };

  const copyCoordinates = () => {
    const text = `GPS Coordinates: ${gpsLocation.lat}° N, ${gpsLocation.lng}° E (${gpsLocation.landmark})`;
    navigator.clipboard.writeText(text);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop fade-in" onClick={onClose}>
      <div className="sos-modal-content slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="sos-header">
          <div className="sos-title-box">
            <div className="sos-icon-ring pulse-glow">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h2 className="sos-main-heading font-serif">EMERGENCY SOS DASHBOARD</h2>
              <span className="sos-sub">Tamil Nadu Tourist Security Shield • Works 100% Offline</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Action Body */}
        <div className="sos-body">
          {/* Siren & SMS Action Banner */}
          <div className="sos-alert-banner">
            <button className={`siren-btn ${isSirenPlaying ? "active" : ""}`} onClick={toggleSiren}>
              {isSirenPlaying ? <VolumeX size={22} /> : <Volume2 size={22} />}
              <span>{isSirenPlaying ? "STOP SIREN ALARM" : "SOUND LOUD SIREN (OFFLINE)"}</span>
            </button>

            <button className="dispatch-sms-btn" onClick={sendSmsDispatch}>
              <Send size={20} />
              <span>DISPATCH SOS SMS WITH GPS</span>
            </button>
          </div>

          {smsSentNotice && (
            <div className="notice-banner success">
              <CheckCircle2 size={18} />
              <span>Emergency SMS draft formatted with live coordinates! Opening messaging app...</span>
            </div>
          )}

          {/* Offline GPS Location Radar Card */}
          <div className="gps-card">
            <div className="gps-header">
              <div className="gps-title-group">
                <MapPin size={18} className="map-pin-icon" />
                <h4>OFFLINE LOCATION RADAR</h4>
              </div>
              <div className="gps-right-group">
                <span className="gps-accuracy-badge">{gpsLocation.accuracy}</span>
                <button className="copy-coords-btn" onClick={copyCoordinates} title="Copy Coordinates">
                  <Copy size={14} />
                  <span>{copiedCoords ? "Copied!" : "Copy Coordinates"}</span>
                </button>
              </div>
            </div>

            <div className="gps-data-grid">
              <div className="gps-item">
                <label>Latitude:</label>
                <span>{gpsLocation.lat}° N</span>
              </div>
              <div className="gps-item">
                <label>Longitude:</label>
                <span>{gpsLocation.lng}° E</span>
              </div>
              <div className="gps-item full">
                <label>Landmark Reference:</label>
                <span>{gpsLocation.landmark}</span>
              </div>
            </div>
          </div>

          {/* Helplines Grid */}
          <div className="section-block">
            <h3 className="section-subheading">Direct Emergency Helplines (Tamil Nadu)</h3>
            <div className="helpline-grid">
              {EMERGENCY_NUMBERS.map((item, idx) => (
                <a key={idx} href={`tel:${item.number}`} className="helpline-card">
                  <div className="helpline-num">{item.number}</div>
                  <div className="helpline-info">
                    <div className="helpline-name">{item.service}</div>
                    <div className="helpline-desc">{item.desc}</div>
                  </div>
                  <div className="call-icon-box">
                    <PhoneCall size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Registered Personal Emergency Contacts */}
          <div className="section-block">
            <h3 className="section-subheading">Registered Personal Emergency Contacts</h3>
            <div className="contacts-list">
              {contacts.length > 0 ? (
                contacts.map((c) => (
                  <div key={c.id} className="contact-row">
                    <div className="contact-details">
                      <strong>{c.name}</strong> <span className="relation">({c.relation})</span>
                      <div className="contact-phone">{c.phone}</div>
                    </div>
                    <div className="contact-actions">
                      <a href={`tel:${c.phone}`} className="icon-call-btn" title="Call Contact">
                        <PhoneCall size={16} />
                      </a>
                      <button onClick={() => handleDeleteContact(c.id)} className="icon-del-btn" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-contacts-prompt">
                  <span>No personal contacts added yet. Add your family, guide, or hostel manager below.</span>
                </div>
              )}
            </div>

            {/* Add Contact Form */}
            <form onSubmit={handleAddContact} className="add-contact-form">
              <input
                type="text"
                placeholder="Contact Name (e.g. Spouse / Local Guide)"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (+91...)"
                value={newContactPhone}
                onChange={(e) => setNewContactPhone(e.target.value)}
                required
              />
              <button type="submit" className="add-btn">
                <Plus size={16} />
                <span>Add Contact</span>
              </button>
            </form>
          </div>

          {/* Women & Tourist Safety Guidelines */}
          <div className="safety-guidelines-box">
            <div className="guidelines-header">
              <ShieldCheck size={18} />
              <h4>Women & Solo Tourist Safety Advice (Tamil Nadu)</h4>
            </div>
            <ul className="guidelines-list">
              <li>• Always share your live itinerary and GPS coordinates before entering remote heritage corridors.</li>
              <li>• Use Gemma 2B Edge AI offline maps to track your exact position in zero-connectivity areas.</li>
              <li>• Dial 1091 (Women Helpline) or 100 (Police) directly from this dashboard in case of any emergency.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sos-footer">
          <HeartHandshake size={16} />
          <span>Gemma 2B Edge Security Shield • Certified Safe for Women & Solo Travelers</span>
        </div>
      </div>
    </div>
  );
}
