import React, { useState, useEffect, useRef } from "react";
import { MapPin, Volume2, ShieldCheck, Navigation, Info, Compass } from "lucide-react";
import { DISTRICTS, EXPERIENCES } from "../data/heritageData";
import { speakAudioGuide, stopAudioGuide } from "../services/gemmaEdgeEngine";

export function OfflineMapView({ language, itinerary }) {
  const [selectedMapDistrict, setSelectedMapDistrict] = useState(DISTRICTS[0]);
  const [isPlayingMapAudio, setIsPlayingMapAudio] = useState(false);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const polylineRef = useRef(null);

  // Dynamically load Leaflet assets from CDN
  useEffect(() => {
    if (window.L) {
      setLeafletLoaded(true);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      setLeafletLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  // Initialize Leaflet map
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return;
    if (mapInstanceRef.current) return;

    const L = window.L;
    const map = L.map(mapRef.current, {
      center: [10.8, 78.8], // Central Tamil Nadu
      zoom: 7,
      zoomControl: true,
      attributionControl: true
    });

    // Dark Map Theme (CartoDB Dark Matter) matching the app aesthetic
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18
    }).addTo(map);

    mapInstanceRef.current = map;
    markersGroupRef.current = L.featureGroup().addTo(map);

    // Refresh size shortly after init
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [leafletLoaded]);

  // Update markers, polyline and viewbounds when itinerary or selected district changes
  useEffect(() => {
    if (!leafletLoaded || !mapInstanceRef.current) return;

    const L = window.L;
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;

    // Clear old drawings
    markersGroup.clearLayers();
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

    // Helper for creating custom circular icons
    const createCustomIcon = (numberLabel, isSelected, isDayNode = false, dayNum = null) => {
      let bg = isSelected ? "#FF7A00" : "#3D081B";
      let border = isSelected ? "#FFF4D4" : "#F8C868";
      let size = isSelected ? "34px" : "26px";
      if (isDayNode) {
        bg = "#FF7A00";
        border = "#FFF";
        size = "28px";
      }

      return L.divIcon({
        className: "custom-leaflet-icon",
        html: `
          <div style="
            background: ${bg};
            border: 2px solid ${border};
            color: #FFF;
            width: ${size};
            height: ${size};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: ${isSelected || isDayNode ? '13px' : '11px'};
            box-shadow: 0 3px 6px rgba(0,0,0,0.4);
            font-family: 'Outfit', sans-serif;
            transition: all 0.2s ease;
          ">
            ${dayNum ? `D${dayNum}` : numberLabel}
          </div>
        `,
        iconSize: isSelected ? [34, 34] : [26, 26],
        iconAnchor: isSelected ? [17, 17] : [13, 13]
      });
    };

    // 1. Draw base districts
    DISTRICTS.forEach((dist, idx) => {
      const isSelected = selectedMapDistrict?.id === dist.id;
      const marker = L.marker([dist.lat, dist.lng], {
        icon: createCustomIcon(idx + 1, isSelected)
      });

      marker.on("click", () => {
        setSelectedMapDistrict(dist);
      });

      marker.addTo(markersGroup);
    });

    // 2. Plot itinerary route if active
    if (itinerary && itinerary.days && itinerary.days.length > 0) {
      const routePoints = [];

      itinerary.days.forEach((dayItem) => {
        // Find matching district base coordinates
        const matchedDist = DISTRICTS.find(d => 
          dayItem.location.toLowerCase().includes(d.name.split(" ")[0].toLowerCase()) || 
          d.name.toLowerCase().includes(dayItem.location.toLowerCase()) ||
          dayItem.title.toLowerCase().includes(d.name.split(" ")[0].toLowerCase())
        );

        if (matchedDist) {
          routePoints.push([matchedDist.lat, matchedDist.lng]);

          // Plot a Day marker
          const dayMarker = L.marker([matchedDist.lat, matchedDist.lng], {
            icon: createCustomIcon(null, false, true, dayItem.day),
            zIndexOffset: 200
          });

          const popupContent = `
            <div style="color: #3D081B; font-family: 'Outfit', sans-serif; padding: 4px; max-width: 220px;">
              <h4 style="margin: 0 0 4px 0; font-family: 'Cinzel', serif; color: #FF7A00; font-weight: 700;">Day ${dayItem.day}</h4>
              <p style="margin: 0 0 6px 0; font-weight: 600; font-size: 13px; line-height: 1.2;">${dayItem.title}</p>
              <p style="margin: 0; font-size: 11px; opacity: 0.9; border-top: 1px solid #DDD; padding-top: 4px;">📍 ${dayItem.location}</p>
            </div>
          `;

          dayMarker.bindPopup(popupContent);
          dayMarker.addTo(markersGroup);

          // Scan activities for specific experience matching
          dayItem.activities.forEach((act) => {
            const matchedExp = EXPERIENCES.find(exp => 
              act.toLowerCase().includes(exp.title.toLowerCase()) ||
              exp.title.toLowerCase().includes(act.toLowerCase())
            );

            if (matchedExp && matchedExp.offlineMapData) {
              const expMarker = L.marker([matchedExp.offlineMapData.lat, matchedExp.offlineMapData.lng], {
                icon: L.divIcon({
                  className: "exp-leaflet-marker",
                  html: `<div style="font-size:18px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); cursor: pointer;">📍</div>`,
                  iconSize: [20, 20],
                  iconAnchor: [10, 20]
                }),
                zIndexOffset: 300
              });

              expMarker.bindPopup(`
                <div style="color: #3D081B; font-family: 'Outfit', sans-serif; padding: 4px; max-width: 180px;">
                  <h5 style="margin: 0 0 2px 0; color: #FF7A00; font-weight:700;">${matchedExp.title}</h5>
                  <p style="margin: 0; font-size: 11px; opacity: 0.85;">${matchedExp.location}</p>
                </div>
              `);

              expMarker.addTo(markersGroup);
            }
          });
        }
      });

      // Draw path line
      if (routePoints.length > 1) {
        const polyline = L.polyline(routePoints, {
          color: "#FF7A00",
          weight: 4,
          opacity: 0.85,
          dashArray: "8, 8",
          lineJoin: "round"
        }).addTo(map);

        polylineRef.current = polyline;

        // Auto zoom map to fit route
        map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
      }
    }
  }, [leafletLoaded, selectedMapDistrict, itinerary]);

  const handlePlayDistrictAudio = (dist) => {
    if (isPlayingMapAudio) {
      stopAudioGuide();
      setIsPlayingMapAudio(false);
    } else {
      const text = language === "ta" ? dist.tamilDescription : dist.description;
      speakAudioGuide(text, language === "ta" ? "ta-IN" : "en-IN");
      setIsPlayingMapAudio(true);
    }
  };

  return (
    <div className="offline-map-view-container">
      <div className="map-view-header">
        <div>
          <h2 className="map-title font-serif">Tamil Nadu Heritage Map</h2>
          <span className="map-subtitle">100% Cached Vector Coordinates • Offline Route Guidance</span>
        </div>
        <div className="offline-cache-badge">
          <Compass size={14} />
          <span>6 Districts Cached • GPS Active</span>
        </div>
      </div>

      <div className="map-interactive-layout">
        {/* Real Interactive Leaflet Map */}
        <div className="vector-map-canvas" style={{ minHeight: "500px", position: "relative" }}>
          <div 
            ref={mapRef} 
            id="leaflet-map" 
            style={{ 
              width: "100%", 
              height: "100%", 
              minHeight: "500px", 
              borderRadius: "20px", 
              background: "#270410",
              border: "1px solid rgba(253, 227, 167, 0.3)"
            }}
          >
            {!leafletLoaded && (
              <div className="map-loading-state">
                <Compass size={32} className="gemma-icon-spin" />
                <p>Loading Interactive Heritage Map...</p>
              </div>
            )}
          </div>
        </div>

        {/* Selected District Information Panel */}
        <div className="map-district-panel">
          {selectedMapDistrict && (
            <div className="district-detail-card fade-in">
              <img 
                src={selectedMapDistrict.image} 
                alt={selectedMapDistrict.name} 
                className="district-hero-img"
              />

              <div className="district-card-header">
                <div>
                  <h3 className="font-serif">{selectedMapDistrict.name}</h3>
                  <span className="tamil-sub font-serif">{selectedMapDistrict.tamilName}</span>
                </div>
                <div className="safety-badge font-serif">
                  <ShieldCheck size={14} />
                  <span>{selectedMapDistrict.safetyRating}</span>
                </div>
              </div>

              <p className="district-desc">
                {language === "ta" ? selectedMapDistrict.tamilDescription : selectedMapDistrict.description}
              </p>

              <div className="tags-row">
                {selectedMapDistrict.tags.map((t, idx) => (
                  <span key={idx} className="tag-chip">#{t}</span>
                ))}
              </div>

              <div className="district-actions">
                <button
                  className="audio-guide-btn"
                  onClick={() => handlePlayDistrictAudio(selectedMapDistrict)}
                >
                  <Volume2 size={16} />
                  <span>{isPlayingMapAudio ? "Stop Audio" : "Listen Audio Guide"}</span>
                </button>
              </div>

              <div className="district-exps-preview">
                <h4>Nearby Experiences:</h4>
                {EXPERIENCES.filter((e) => e.districtId === selectedMapDistrict.id).map((e) => (
                  <div key={e.id} className="mini-exp-item">
                    <MapPin size={13} color="#FF7A00" />
                    <span>{e.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
