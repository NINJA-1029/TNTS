// Local Storage & IndexedDB persistence helper for Edge App

const STORAGE_KEYS = {
  SAVED_ITINERARY: "heritage_farm_saved_itinerary",
  EMERGENCY_CONTACTS: "heritage_farm_emergency_contacts",
  USER_PREFERENCES: "heritage_farm_user_prefs",
  OFFLINE_CACHE_STATUS: "heritage_farm_offline_cache"
};

export const defaultEmergencyContacts = [
  { id: 1, name: "Primary Contact / Kin", phone: "+91 98765 43210", relation: "Family" },
  { id: 2, name: "Local Hotel / Farmstay Host", phone: "+91 94433 11223", relation: "Accomodation" }
];

export function getSavedItinerary() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_ITINERARY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

export function saveItinerary(itinerary) {
  try {
    localStorage.setItem(STORAGE_KEYS.SAVED_ITINERARY, JSON.stringify(itinerary));
    return true;
  } catch (e) {
    return false;
  }
}

export function getEmergencyContacts() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EMERGENCY_CONTACTS);
    return data ? JSON.parse(data) : defaultEmergencyContacts;
  } catch (e) {
    return defaultEmergencyContacts;
  }
}

export function saveEmergencyContacts(contacts) {
  try {
    localStorage.setItem(STORAGE_KEYS.EMERGENCY_CONTACTS, JSON.stringify(contacts));
    return true;
  } catch (e) {
    return false;
  }
}

export function saveUserPreferences(prefs) {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(prefs));
    return true;
  } catch (e) {
    return false;
  }
}

export function getUserPreferences() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return data ? JSON.parse(data) : { interests: ["agri", "heritage"], duration: 8, startDistrict: "madurai", safeForWomen: true, sustainableFirst: true };
  } catch (e) {
    return { interests: ["agri", "heritage"], duration: 8, startDistrict: "madurai", safeForWomen: true, sustainableFirst: true };
  }
}
