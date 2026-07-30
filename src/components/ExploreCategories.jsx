import React, { useState } from "react";
import { 
  Sprout, 
  Landmark, 
  Mountain, 
  ArrowRight, 
  Star, 
  Volume2, 
  VolumeX,
  ShieldCheck, 
  MapPin, 
  Info,
  X,
  Filter,
  Search,
  Compass
} from "lucide-react";
import { HERITAGE_CATEGORIES, EXPERIENCES, DISTRICTS } from "../data/heritageData";
import { speakAudioGuide, stopAudioGuide } from "../services/gemmaEdgeEngine";

export function ExploreCategories({ language }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
  const [selectedDistrictFilter, setSelectedDistrictFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpModal, setSelectedExpModal] = useState(null);
  const [playingExpAudioId, setPlayingExpAudioId] = useState(null);

  // Strict District & Category & Search Filter logic
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    const matchesCategory = activeCategoryFilter === "all" || exp.category === activeCategoryFilter;
    const matchesDistrict = selectedDistrictFilter === "all" || exp.districtId === selectedDistrictFilter;
    const matchesSearch = searchQuery === "" || 
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      exp.districtName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDistrict && matchesSearch;
  });

  const handleToggleAudio = (exp) => {
    if (playingExpAudioId === exp.id) {
      stopAudioGuide();
      setPlayingExpAudioId(null);
    } else {
      const text = `${exp.title}. District: ${exp.districtName}. ${exp.description}`;
      speakAudioGuide(text, language === "ta" ? "ta-IN" : "en-IN");
      setPlayingExpAudioId(exp.id);
    }
  };

  return (
    <section className="explore-categories-section fade-in">
      {/* Section Title Header */}
      <div className="section-title-box text-center">
        <div className="section-badge font-serif">
          <Compass size={14} />
          <span>HERITAGE DISCOVERY HUB</span>
        </div>
        <h2 className="main-heading font-serif">Explore Tamil Nadu</h2>
        <h3 className="tamil-main-heading font-serif">தமிழ்நாட்டை ஆராயுங்கள்</h3>
        <p className="section-subtext">
          Discover authentic rural farmstays, ancient Chola & Pallava temples, local food spots, and eco trails.
        </p>

        {/* Search Bar */}
        <div className="explore-search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder={language === "ta" ? "இடங்கள், உணவுகள், கோயில்களைத் தேடுங்கள்..." : "Search temples, food spots, farmstays, districts..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* 3 Main Category Highlight Cards */}
      <div className="category-cards-grid">
        <div 
          className={`category-card ${activeCategoryFilter === "agri" ? "selected" : ""}`}
          onClick={() => setActiveCategoryFilter("agri")}
        >
          <div className="cat-icon-container agri">
            <Sprout size={30} />
          </div>
          <h3 className="cat-title font-serif">Agri & Rural</h3>
          <span className="cat-tamil-title font-serif">விவசாயம் & கிராமப்புறம்</span>
          <p className="cat-desc">Engage with traditional farming practices and rural farmstays.</p>
          <button className="explore-cat-link font-serif">
            <span>Explore Agri</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div 
          className={`category-card ${activeCategoryFilter === "heritage" ? "selected" : ""}`}
          onClick={() => setActiveCategoryFilter("heritage")}
        >
          <div className="cat-icon-container heritage">
            <Landmark size={30} />
          </div>
          <h3 className="cat-title font-serif">Heritage & Culture</h3>
          <span className="cat-tamil-title font-serif">பாரம்பரியம் & கலாச்சாரம்</span>
          <p className="cat-desc">Journey through UNESCO temples, ancient art, and living history.</p>
          <button className="explore-cat-link font-serif">
            <span>Explore Heritage</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div 
          className={`category-card ${activeCategoryFilter === "eco" ? "selected" : ""}`}
          onClick={() => setActiveCategoryFilter("eco")}
        >
          <div className="cat-icon-container eco">
            <Mountain size={30} />
          </div>
          <h3 className="cat-title font-serif">Eco & Adventure</h3>
          <span className="cat-tamil-title font-serif">சுற்றுச்சூழல் & சாகசம்</span>
          <p className="cat-desc">Scenic Western Ghats paths, tea gardens, and zero-carbon trails.</p>
          <button className="explore-cat-link font-serif">
            <span>Explore Eco</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* DISTRICT FILTER DROPDOWN (DROPBOX STYLE) */}
      <div className="district-dropbox-container">
        <div className="district-dropbox-label font-serif">
          <Filter size={18} className="filter-icon" />
          <span>FILTER BY DISTRICT (DROPBOX):</span>
        </div>

        <div className="district-dropbox-wrapper">
          <MapPin size={18} className="dropbox-pin-icon" />
          <select 
            value={selectedDistrictFilter} 
            onChange={(e) => setSelectedDistrictFilter(e.target.value)}
            className="district-dropbox-select font-serif"
          >
            <option value="all">📍 All Tamil Nadu Districts ({EXPERIENCES.length} Places Mapped)</option>
            {DISTRICTS.map((dist) => {
              const countInDist = EXPERIENCES.filter((e) => e.districtId === dist.id).length;
              return (
                <option key={dist.id} value={dist.id}>
                  📍 {dist.name} ({dist.tamilName}) — {countInDist} Heritage Places
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-tab-bar">
        <button
          className={`filter-chip ${activeCategoryFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("all")}
        >
          All Experiences ({filteredExperiences.length})
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "heritage" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("heritage")}
        >
          Temples & Monuments ({filteredExperiences.filter(e => e.category === 'heritage').length})
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "food" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("food")}
        >
          Famous Regional Food Spots
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "agri" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("agri")}
        >
          Agri & Farmstays
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "eco" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("eco")}
        >
          Eco & Adventure
        </button>
      </div>

      {/* Experience Cards Grid */}
      {filteredExperiences.length > 0 ? (
        <div className="experiences-grid">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="exp-card fade-in">
              <div className="exp-image-box">
                <img src={exp.image} alt={exp.title} loading="lazy" />
                <div className="exp-category-badge">{exp.category.toUpperCase()}</div>
                {exp.safeForWomen && (
                  <div className="exp-safety-tag">
                    <ShieldCheck size={12} /> Safe for Women
                  </div>
                )}
              </div>

              <div className="exp-content">
                <div className="exp-district">
                  <MapPin size={13} />
                  <span>{exp.districtName}</span>
                </div>

                <h4 className="exp-title font-serif">{exp.title}</h4>
                <p className="exp-desc">{exp.description}</p>

                <div className="exp-meta-row">
                  <div className="meta-price">{exp.price}</div>
                  <div className="meta-rating">
                    <Star size={14} fill="#F8C868" stroke="none" />
                    <span>{exp.rating}</span>
                  </div>
                </div>

                <div className="exp-card-actions">
                  <button 
                    className="exp-details-btn"
                    onClick={() => setSelectedExpModal(exp)}
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>

                  <button 
                    className={`exp-audio-btn ${playingExpAudioId === exp.id ? "playing" : ""}`}
                    onClick={() => handleToggleAudio(exp)}
                  >
                    {playingExpAudioId === exp.id ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{playingExpAudioId === exp.id ? "Stop Voice" : "Voice Guide"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-experiences-box">
          <Compass size={40} />
          <h3>No heritage experiences match your selected filter</h3>
          <p>Try switching district or category filter to discover more places.</p>
          <button 
            className="reset-filter-btn"
            onClick={() => {
              setActiveCategoryFilter("all");
              setSelectedDistrictFilter("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Experience Details Modal */}
      {selectedExpModal && (
        <div className="modal-backdrop fade-in" onClick={() => setSelectedExpModal(null)}>
          <div className="exp-modal-content slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="exp-modal-header">
              <div className="exp-modal-badge">{selectedExpModal.category.toUpperCase()}</div>
              <button className="close-btn" onClick={() => setSelectedExpModal(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="exp-modal-body">
              <div className="modal-img-wrapper">
                <img src={selectedExpModal.image} alt={selectedExpModal.title} />
              </div>

              <div className="modal-text-content">
                <div className="exp-district">
                  <MapPin size={14} />
                  <span>{selectedExpModal.districtName}</span>
                </div>
                <h3 className="modal-title font-serif">{selectedExpModal.title}</h3>
                <p className="modal-desc">{selectedExpModal.description}</p>

                <div className="modal-tags-row">
                  {selectedExpModal.safeForWomen && (
                    <span className="tag-pill safe">
                      <ShieldCheck size={12} /> Safe for Women Certified
                    </span>
                  )}
                  <span className="tag-pill price">{selectedExpModal.price}</span>
                  <span className="tag-pill rating">⭐ {selectedExpModal.rating} Rating</span>
                </div>

                <div className="modal-actions-row">
                  <button 
                    className={`modal-audio-btn ${playingExpAudioId === selectedExpModal.id ? "playing" : ""}`}
                    onClick={() => handleToggleAudio(selectedExpModal)}
                  >
                    {playingExpAudioId === selectedExpModal.id ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{playingExpAudioId === selectedExpModal.id ? "Stop Audio Guide" : "Listen Offline Voice Guide"}</span>
                  </button>

                  <button className="modal-close-action" onClick={() => setSelectedExpModal(null)}>
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
