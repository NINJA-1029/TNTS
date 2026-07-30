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
import { t } from "../data/i18n";
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
          <span>{t("explore.discoveryHub", language)}</span>
        </div>
        <h2 className="main-heading font-serif">{t("explore.title", language)}</h2>
        <h3 className="tamil-main-heading font-serif">{language === "ta" ? "" : "தமிழ்நாட்டை ஆராயுங்கள்"}</h3>
        <p className="section-subtext">
          {t("explore.subtitle", language)}
        </p>

        {/* Search Bar */}
        <div className="explore-search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder={t("explore.searchPlaceholder", language)}
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
          <h3 className="cat-title font-serif">{t("explore.agriRural", language)}</h3>
          <span className="cat-tamil-title font-serif">{language !== "ta" ? "விவசாயம் & கிராமப்புறம்" : ""}</span>
          <p className="cat-desc">{t("explore.engageFarming", language)}</p>
          <button className="explore-cat-link font-serif">
            <span>{t("explore.exploreAgri", language)}</span>
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
          <h3 className="cat-title font-serif">{t("explore.heritageCulture", language)}</h3>
          <span className="cat-tamil-title font-serif">{language !== "ta" ? "பாரம்பரியம் & கலாச்சாரம்" : ""}</span>
          <p className="cat-desc">{t("explore.journeyHeritage", language)}</p>
          <button className="explore-cat-link font-serif">
            <span>{t("explore.exploreHeritage", language)}</span>
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
          <h3 className="cat-title font-serif">{t("explore.ecoAdventure", language)}</h3>
          <span className="cat-tamil-title font-serif">{language !== "ta" ? "சுற்றுச்சூழல் & சாகசம்" : ""}</span>
          <p className="cat-desc">{t("explore.scenicTrails", language)}</p>
          <button className="explore-cat-link font-serif">
            <span>{t("explore.exploreEco", language)}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* DISTRICT FILTER DROPDOWN */}
      <div className="district-dropbox-container">
        <div className="district-dropbox-label font-serif">
          <Filter size={18} className="filter-icon" />
          <span>{t("explore.filterByDistrict", language)}</span>
        </div>

        <div className="district-dropbox-wrapper">
          <MapPin size={18} className="dropbox-pin-icon" />
          <select 
            value={selectedDistrictFilter} 
            onChange={(e) => setSelectedDistrictFilter(e.target.value)}
            className="district-dropbox-select font-serif"
          >
            <option value="all">{t("explore.allDistricts", language)} ({EXPERIENCES.length} {t("explore.placesMapped", language)})</option>
            {DISTRICTS.map((dist) => {
              const countInDist = EXPERIENCES.filter((e) => e.districtId === dist.id).length;
              return (
                <option key={dist.id} value={dist.id}>
                  {dist.name} ({dist.tamilName}) — {countInDist} {t("explore.heritagePlaces", language)}
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
          {t("explore.allExperiences", language)} ({filteredExperiences.length})
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "heritage" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("heritage")}
        >
          {t("explore.templesMonuments", language)} ({filteredExperiences.filter(e => e.category === 'heritage').length})
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "food" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("food")}
        >
          {t("explore.foodSpots", language)}
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "agri" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("agri")}
        >
          {t("explore.agriFarmstays", language)}
        </button>

        <button
          className={`filter-chip ${activeCategoryFilter === "eco" ? "active" : ""}`}
          onClick={() => setActiveCategoryFilter("eco")}
        >
          {t("explore.ecoAdventureFilter", language)}
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
              </div>

              <div className="exp-content">
                <div className="exp-district">
                  <MapPin size={13} />
                  <span>{exp.districtName}</span>
                </div>

                <h4 className="exp-title font-serif">{exp.title}</h4>
                <p className="exp-desc">{exp.description}</p>

                {/* Prominent Safe for Women tag in content area */}
                {exp.safeForWomen && (
                  <div className="exp-safety-content-tag">
                    <ShieldCheck size={14} />
                    <span>{t("explore.safeForWomen", language)}</span>
                  </div>
                )}

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
                    <span>{t("explore.details", language)}</span>
                  </button>

                  <button 
                    className={`exp-audio-btn ${playingExpAudioId === exp.id ? "playing" : ""}`}
                    onClick={() => handleToggleAudio(exp)}
                  >
                    {playingExpAudioId === exp.id ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{playingExpAudioId === exp.id ? t("explore.stopVoice", language) : t("planner.voiceGuide", language)}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-experiences-box">
          <Compass size={40} />
          <h3>{t("explore.noResults", language)}</h3>
          <p>{t("explore.trySwitch", language)}</p>
          <button 
            className="reset-filter-btn"
            onClick={() => {
              setActiveCategoryFilter("all");
              setSelectedDistrictFilter("all");
              setSearchQuery("");
            }}
          >
            {t("explore.resetFilters", language)}
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
                      <ShieldCheck size={12} /> {t("explore.safeForWomenCertified", language)}
                    </span>
                  )}
                  <span className="tag-pill price">{selectedExpModal.price}</span>
                  <span className="tag-pill rating">
                    <Star size={12} fill="#F8C868" stroke="none" /> {selectedExpModal.rating} {t("explore.rating", language)}
                  </span>
                </div>

                <div className="modal-actions-row">
                  <button 
                    className={`modal-audio-btn ${playingExpAudioId === selectedExpModal.id ? "playing" : ""}`}
                    onClick={() => handleToggleAudio(selectedExpModal)}
                  >
                    {playingExpAudioId === selectedExpModal.id ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{playingExpAudioId === selectedExpModal.id ? t("explore.stopAudioGuide", language) : t("explore.listenVoiceGuide", language)}</span>
                  </button>

                  <button className="modal-close-action" onClick={() => setSelectedExpModal(null)}>
                    {t("explore.closeDetails", language)}
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
