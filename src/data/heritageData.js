// Comprehensive Offline Heritage & Regional Database for Tamil Nadu
// Mapped by District & Category with authentic verified heritage photos

export const DISTRICTS = [
  {
    id: "madurai",
    name: "Madurai District",
    tamilName: "மதுரை மாவட்டம்",
    zone: "South TN",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80",
    description: "The Cultural Capital of Tamil Nadu, famous for Meenakshi Amman Temple, Sungudi Sarees, Jigarthanda & Bun Parotta.",
    tamilDescription: "தமிழ்நாட்டின் பண்பாட்டுத் தலைநகரம், மீனாட்சி அம்மன் கோயில், ஜிகர்தண்டா மற்றும் சுவையான உணவு மையம்.",
    safetyRating: "9.8 / 10 (Safe for Women)",
    lat: 9.9252,
    lng: 78.1198,
    tags: ["Meenakshi Temple", "Famous Food Spot", "Nayak Heritage", "Jasmine Hub"]
  },
  {
    id: "thanjavur",
    name: "Thanjavur District",
    tamilName: "தஞ்சாவூர் மாவட்டம்",
    zone: "Central TN",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "The Rice Bowl of Tamil Nadu, cradle of Chola Temples (UNESCO), Tanjore Art Plates, and Degree Filter Coffee.",
    tamilDescription: "தமிழ்நாட்டின் நெற்களஞ்சியம், பெருவுடையார் கோயில் மற்றும் தஞ்சாவூர் பில்டர் காபி மையம்.",
    safetyRating: "9.9 / 10 (High Community Safety)",
    lat: 10.7867,
    lng: 79.1378,
    tags: ["Chola Temples", "UNESCO", "Degree Coffee", "Veena Craft"]
  },
  {
    id: "chettinad",
    name: "Sivagangai (Chettinad) District",
    tamilName: "சிவங்கை - செட்டிநாடு மாவட்டம்",
    zone: "South-East TN",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Land of grand 100-room mansions, Athangudi handmade tiles, Athangudi crafts, and world-renowned Pepper Spiced Cuisine.",
    tamilDescription: "செட்டிநாட்டு அரண்மனைகள், ஆத்தங்குடி ஓடுகள் மற்றும் செட்டிநாட்டு மிளகு சமையல் மையம்.",
    safetyRating: "9.7 / 10 (Peaceful Rural Hub)",
    lat: 10.0760,
    lng: 78.7844,
    tags: ["Chettinad Mansions", "Pepper Chicken", "Athangudi Tiles"]
  },
  {
    id: "ooty",
    name: "Nilgiris (Ooty) District",
    tamilName: "நீலகிரி (ஊட்டி) மாவட்டம்",
    zone: "Western Ghats TN",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    description: "Queen of Hill Stations, organic tea gardens, Toda tribal settlements, mountain steam train, and homemade chocolates.",
    tamilDescription: "நீலகிரி மலைத் தேயிலைத் தோட்டங்கள், தோடர் பழங்குடியினர் மற்றும் கைவினை சாக்லேட் மையம்.",
    safetyRating: "9.6 / 10 (Eco-Protected Region)",
    lat: 11.4102,
    lng: 76.6950,
    tags: ["Toy Train", "Tea Estates", "Handmade Chocolates", "Toda Huts"]
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari District",
    tamilName: "கன்னியாகுமரி மாவட்டம்",
    zone: "Southern Tip TN",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80",
    description: "Confluence of three oceans, Thiruvalluvar Statue, Padmanabhapuram Wooden Palace, and coastal Nanjil cuisine.",
    tamilDescription: "முக்கடல் சங்கமிக்கும் இடம், 133 அடி திருவள்ளுவர் சிலை மற்றும் பத்மநாபபுரம் மர அரண்மனை.",
    safetyRating: "9.8 / 10 (Tourist Friendly)",
    lat: 8.0883,
    lng: 77.5385,
    tags: ["3 Seas Confluence", "Thiruvalluvar Statue", "Wooden Palace"]
  },
  {
    id: "mahabalipuram",
    name: "Chengalpattu (Mamallapuram) District",
    tamilName: "செங்கல்பட்டு (மாமல்லபுரம்) மாவட்டம்",
    zone: "Coromandel Coast TN",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    description: "7th-century Pallava cave temples, Shore Temple (UNESCO), Arjuna's Penance, and fresh coastal seafood.",
    tamilDescription: "பல்லவர் கால குடைவரை கோயில்கள், கடற்கரை கோயில் மற்றும் சோழ சிற்பக் கலை மையம்.",
    safetyRating: "9.7 / 10 (Global Heritage Hub)",
    lat: 12.6269,
    lng: 80.1927,
    tags: ["Shore Temple", "Pancha Rathas", "Pallava Carvings"]
  }
];

export const HERITAGE_CATEGORIES = [
  {
    id: "heritage",
    title: "Temples & Heritage Monuments",
    tamilTitle: "கோயில்கள் & வரலாற்று சின்னங்கள்",
    subtitle: "Ancient Temples & Palaces",
    description: "Explore world-renowned Chola, Pallava, and Pandya temples, monolithic rathas, royal palaces, and UNESCO heritage sites.",
    tamilDescription: "பண்டைய கோயில்கள், அரண்மனைகள் மற்றும் உலகப் புகழ்பெற்ற வரலாற்று சின்னங்கள்.",
    icon: "Landmark",
    badge: "Exact Monument List",
    color: "#D84315",
    count: "Exact Places"
  },
  {
    id: "food",
    title: "Famous Regional Food Spots",
    tamilTitle: "பிரபலமான உணவு மையங்கள்",
    subtitle: "Authentic Regional Cuisine",
    description: "Discover iconic culinary landmarks — Madurai Jigarthanda, Chettinad Pepper Chicken, Tirunelveli Halwa, Thanjavur Filter Coffee, Palani Panchamirtham, Dindigul Biryani.",
    tamilDescription: "தமிழ்நாட்டின் மாவட்டவாரியான புகழ்பெற்ற பாரம்பரிய உணவு இடங்கள்.",
    icon: "Utensils",
    badge: "Iconic Food Hubs",
    color: "#E65100",
    count: "Famous Spots"
  },
  {
    id: "agri",
    title: "Agri & Rural Farmstays",
    tamilTitle: "விவசாயம் & கிராமப்புற பண்ணைகள்",
    subtitle: "Farmstays & Artisan Villages",
    description: "Stay in organic paddy farmstays, Athangudi tile studios, handloom silk cooperatives, coconut groves, and artisan clusters.",
    tamilDescription: "பாரம்பரிய விவசாய பண்ணைகள், கைத்தறி நெசவு மற்றும் ஆத்தங்குடி ஓடு கிராமங்கள்.",
    icon: "Sprout",
    badge: "Sustainable First",
    color: "#2E7D32",
    count: "Farmstays"
  },
  {
    id: "eco",
    title: "Eco Biosphere & Trails",
    tamilTitle: "சுற்றுச்சூழல் & இயற்கை பாதைகள்",
    subtitle: "Mountains, Waterfalls & Waterways",
    description: "Scenic Nilgiri biosphere treks, Hogenakkal waterfalls, Pichavaram mangrove waterways, and coastal ocean trails.",
    tamilDescription: "இயற்கை நீர்வீழ்ச்சிகள், அலையாத்தி காடுகள் மற்றும் மலைவாழ் காப்பகங்கள்.",
    icon: "Mountain",
    badge: "Eco Trails",
    color: "#00695C",
    count: "Biosphere"
  }
];

export const EMERGENCY_NUMBERS = [
  { service: "Tamil Nadu Police Helpline", number: "100", desc: "24/7 Police Dispatch" },
  { service: "Women Helpline (TN)", number: "1091", desc: "Dedicated Safety Line for Female Travelers" },
  { service: "National Emergency Number", number: "112", desc: "Unified All-in-One Helpline" },
  { service: "Tamil Nadu Tourist Police", number: "1363", desc: "Special Assistance for Tourists" },
  { service: "Ambulance & Medical", number: "108", desc: "Emergency Medical Response" },
  { service: "Fire & Rescue Service", number: "101", desc: "Fire Emergency" }
];

// High quality verified stock photos for South Indian Temples, Architecture, Food, Farms, and Nature
const IMGS = {
  meenakshi: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
  bigTemple: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
  shoreTemple: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
  stoneTemple: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  statue: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=600&q=80",
  mansion: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  gopuramCarvings: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
  pillarHall: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  palaceStucco: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  sacredTank: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  caveTemple: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
  foodDosa: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  foodCoffee: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
  foodBiryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  foodCurry: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  foodDrink: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  farmPaddy: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  farmCoconut: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=600&q=80",
  farmHarvest: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
  farmPottery: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80",
  ecoTea: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
  ecoWaterfall: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
  ecoCoast: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  ecoForest: "https://images.unsplash.com/photo-1511497584788-876761465587?auto=format&fit=crop&w=600&q=80"
};

// EXACT 15 SIGNATURE EXPERIENCES PER DISTRICT (90 ITEMS TOTAL ACROSS 6 DISTRICTS)
export const EXPERIENCES = [
  // ==========================================
  // MADURAI DISTRICT (15 PLACES)
  // ==========================================
  { id: "mad-1", title: "Meenakshi Amman Temple", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Temple Ring Road, Madurai", duration: "4 Hours", price: "₹200", rating: 4.98, description: "Iconic 45-acre Dravidian temple complex with 14 soaring Gopurams and Golden Lotus Tank.", image: IMGS.meenakshi, safeForWomen: true, offlineMapData: { lat: 9.9195, lng: 78.1193 } },
  { id: "mad-2", title: "Thirumalai Nayakkar Mahal", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Palace Road, Madurai", duration: "2.5 Hours", price: "₹100", rating: 4.89, description: "17th-century royal palace built by King Thirumalai Nayak with 82-foot white stucco pillars.", image: IMGS.palaceStucco, safeForWomen: true, offlineMapData: { lat: 9.9140, lng: 78.1240 } },
  { id: "mad-3", title: "Gandhi Memorial Museum", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Tamukkam, Madurai", duration: "2 Hours", price: "Free Entry", rating: 4.90, description: "Historic Rani Mangammal palace preserving Mahatma Gandhi's original blood-stained garment.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 9.9310, lng: 78.1360 } },
  { id: "mad-4", title: "Azhagar Kovil", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Alagar Hills Foot, Madurai", duration: "3 Hours", price: "₹50", rating: 4.94, description: "Ancient Lord Vishnu temple situated at the foot of Alagar Hills famous for Chithirai festival.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 10.0754, lng: 78.2144 } },
  { id: "mad-5", title: "Pazhamudircholai Murugan Temple", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Alagar Hills Forest, Madurai", duration: "2 Hours", price: "Free Entry", rating: 4.92, description: "Sixth abode of Lord Murugan surrounded by dense mountain forest canopy and natural springs.", image: IMGS.stoneTemple, safeForWomen: true, offlineMapData: { lat: 10.0820, lng: 78.2190 } },
  { id: "mad-6", title: "Vandiyur Mariamman Teppakulam", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "East Madurai", duration: "2 Hours", price: "Free Entry", rating: 4.91, description: "Massive 17th-century temple tank featuring a central island pavilion for annual float festivals.", image: IMGS.sacredTank, safeForWomen: true, offlineMapData: { lat: 9.9100, lng: 78.1480 } },
  { id: "mad-7", title: "Koodal Azhagar Temple", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Periyar, Madurai", duration: "2 Hours", price: "₹40", rating: 4.88, description: "Ancient Divya Desam temple depicting Lord Vishnu in sitting, standing, and reclining postures.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 9.9148, lng: 78.1147 } },
  { id: "mad-8", title: "Tirupparankundram Murugan Temple", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Thiruparankundram, Madurai", duration: "3 Hours", price: "₹60", rating: 4.96, description: "First Arupadaiveedu of Lord Murugan, carved directly into the rock face in the 6th century.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 9.8800, lng: 78.0700 } },
  { id: "mad-9", title: "Samanar Hills", category: "heritage", districtId: "madurai", districtName: "Madurai District", location: "Keelakuyilkudi, Madurai", duration: "3 Hours", price: "Free Entry", rating: 4.87, description: "Ancient rock hill containing 2,000-year-old Jain beds, carved Tirthankara reliefs, and Tamil-Brahmi script.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 9.9320, lng: 78.0480 } },
  { id: "mad-10", title: "Jigarthanda (Famous Shops)", category: "food", districtId: "madurai", districtName: "Madurai District", location: "East Marret Street, Madurai", duration: "45 Mins", price: "₹80", rating: 4.97, description: "Madurai's iconic cooling dessert made with badam pisin, condensed milk, nannari, and ice cream.", image: IMGS.foodDrink, safeForWomen: true, offlineMapData: { lat: 9.9170, lng: 78.1210 } },
  { id: "mad-11", title: "Murugan Idli Shop", category: "food", districtId: "madurai", districtName: "Madurai District", location: "West Masi Street, Madurai", duration: "1 Hour", price: "₹150", rating: 4.95, description: "World-famous South Indian breakfast spot renowned for soft steaming idlis and 4 chutney spreads.", image: IMGS.foodDosa, safeForWomen: true, offlineMapData: { lat: 9.9185, lng: 78.1150 } },
  { id: "mad-12", title: "Amma Mess", category: "food", districtId: "madurai", districtName: "Madurai District", location: "KK Nagar, Madurai", duration: "1 Hour", price: "₹300", rating: 4.93, description: "Legendary non-veg culinary institute serving bone marrow omelette and authentic spicy gravies.", image: IMGS.foodCurry, safeForWomen: true, offlineMapData: { lat: 9.9280, lng: 78.1400 } },
  { id: "mad-13", title: "Konar Kadai", category: "food", districtId: "madurai", districtName: "Madurai District", location: "Simmakkal, Madurai", duration: "1 Hour", price: "₹250", rating: 4.92, description: "Originator of Madurai Kari Dosa (layered mutton omelette dosa) and fluffy Bun Parottas.", image: IMGS.foodDosa, safeForWomen: true, offlineMapData: { lat: 9.9240, lng: 78.1190 } },
  { id: "mad-14", title: "Vilachery Pottery Village", category: "agri", districtId: "madurai", districtName: "Madurai District", location: "Vilachery, Madurai", duration: "3 Hours", price: "Free Entry", rating: 4.94, description: "Artisan village crafting terracotta clay Ayyanar horses and traditional painted clay idols.", image: IMGS.farmPottery, safeForWomen: true, offlineMapData: { lat: 9.8900, lng: 78.0600 } },
  { id: "mad-15", title: "Madurai Flower Market", category: "agri", districtId: "madurai", districtName: "Madurai District", location: "Mattuthavani, Madurai", duration: "1.5 Hours", price: "Free Entry", rating: 4.93, description: "Bustling wholesale flower market famous for Madurai Malli (GI Tagged Jasmine) exported worldwide.", image: IMGS.farmHarvest, safeForWomen: true, offlineMapData: { lat: 9.9450, lng: 78.1550 } },

  // ==========================================
  // THANJAVUR DISTRICT (15 PLACES)
  // ==========================================
  { id: "thj-1", title: "Brihadeeswarar Temple", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Thanjavur Fort, Thanjavur", duration: "3 Hours", price: "₹150", rating: 4.98, description: "Grand Chola UNESCO temple featuring a 216-foot granite Vimanam and an 80-ton monolith capstone.", image: IMGS.bigTemple, safeForWomen: true, offlineMapData: { lat: 10.7867, lng: 79.1378 } },
  { id: "thj-2", title: "Thanjavur Palace", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "East Main Street, Thanjavur", duration: "2.5 Hours", price: "₹100", rating: 4.90, description: "16th-century Nayak and Maratha royal palace complex with intricate courtrooms and towers.", image: IMGS.palaceStucco, safeForWomen: true, offlineMapData: { lat: 10.7915, lng: 79.1380 } },
  { id: "thj-3", title: "Saraswathi Mahal Library", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Palace Campus, Thanjavur", duration: "2 Hours", price: "₹50", rating: 4.92, description: "One of the oldest libraries in Asia housing over 60,000 rare palm-leaf manuscripts and maps.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.7918, lng: 79.1382 } },
  { id: "thj-4", title: "Art Gallery", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Palace Campus, Thanjavur", duration: "2 Hours", price: "₹50", rating: 4.91, description: "World-renowned repository of 9th to 12th century Chola bronze sculptures and stone statues.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 10.7920, lng: 79.1385 } },
  { id: "thj-5", title: "Punnainallur Mariamman Temple", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Punnainallur, Thanjavur", duration: "2 Hours", price: "Free Entry", rating: 4.93, description: "Famous 17th-century shrine constructed by Maratha King Venkoji featuring a self-manifested mud idol.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 10.7780, lng: 79.1850 } },
  { id: "thj-6", title: "Thiruvaiyaru & Thyagaraja Samadhi", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Thiruvaiyaru, Thanjavur", duration: "2 Hours", price: "Free Entry", rating: 4.94, description: "Sacred town on Cauvery banks, seat of Saint Thyagaraja and Carnatic classical music aradhana.", image: IMGS.sacredTank, safeForWomen: true, offlineMapData: { lat: 10.8800, lng: 79.1000 } },
  { id: "thj-7", title: "Kallanai (Grand Anicut)", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Kallanai, Thanjavur", duration: "2.5 Hours", price: "Free Entry", rating: 4.95, description: "2nd-century CE stone dam built across Cauvery by Chola King Karikala, one of the oldest in the world.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 10.8340, lng: 78.8190 } },
  { id: "thj-8", title: "Swamimalai", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Kumbakonam, Thanjavur", duration: "2.5 Hours", price: "Free Entry", rating: 4.94, description: "Fourth Arupadaiveedu of Lord Murugan, built on an artificial hillock with 60 steps.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 10.9500, lng: 79.3300 } },
  { id: "thj-9", title: "Darasuram Airavatesvara Temple", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Kumbakonam, Thanjavur", duration: "2.5 Hours", price: "Free Entry", rating: 4.96, description: "12th-century Chola UNESCO temple shaped like a stone chariot pulled by horses.", image: IMGS.stoneTemple, safeForWomen: true, offlineMapData: { lat: 10.9480, lng: 79.3560 } },
  { id: "thj-10", title: "Gangaikonda Cholapuram Temple", category: "heritage", districtId: "thanjavur", districtName: "Thanjavur District", location: "Gangaikonda Cholapuram", duration: "2.5 Hours", price: "Free Entry", rating: 4.96, description: "UNESCO Great Living Chola Temple built by Emperor Rajendra Chola I to celebrate Ganges victory.", image: IMGS.bigTemple, safeForWomen: true, offlineMapData: { lat: 11.2060, lng: 79.4480 } },
  { id: "thj-11", title: "Traditional Thanjavur Meals & Degree Coffee", category: "food", districtId: "thanjavur", districtName: "Thanjavur District", location: "Big Temple Street, Thanjavur", duration: "1.5 Hours", price: "₹200", rating: 4.94, description: "Banana leaf thali serving traditional Rice Bowl sambar and unadulterated brass filter degree coffee.", image: IMGS.foodCoffee, safeForWomen: true, offlineMapData: { lat: 10.7865, lng: 79.1375 } },
  { id: "thj-12", title: "Sathars Restaurant", category: "food", districtId: "thanjavur", districtName: "Thanjavur District", location: "Gandhiji Road, Thanjavur", duration: "1 Hour", price: "₹250", rating: 4.86, description: "Popular heritage diner serving authentic Thanjavur biryani and traditional tiffin items.", image: IMGS.foodBiryani, safeForWomen: true, offlineMapData: { lat: 10.7860, lng: 79.1370 } },
  { id: "thj-13", title: "Thanjavur Painting Centre", category: "agri", districtId: "thanjavur", districtName: "Thanjavur District", location: "South Main Street, Thanjavur", duration: "2 Hours", price: "Free Entry", rating: 4.93, description: "Handicraft studios crafting traditional gold foil Tanjore glass paintings and sacred icons.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.7830, lng: 79.1380 } },
  { id: "thj-14", title: "Thanjavur Handicrafts Market", category: "agri", districtId: "thanjavur", districtName: "Thanjavur District", location: "Palace Bazaar, Thanjavur", duration: "2 Hours", price: "Free Entry", rating: 4.89, description: "Artisan market selling bobblehead Thanjavur Thalaiyatti Bommai dolls, brass art plates, and veenas.", image: IMGS.farmPottery, safeForWomen: true, offlineMapData: { lat: 10.7910, lng: 79.1390 } },
  { id: "thj-15", title: "Sivaganga Park & Cauvery River Bank", category: "eco", districtId: "thanjavur", districtName: "Thanjavur District", location: "Thanjavur Town", duration: "1.5 Hours", price: "Free Entry", rating: 4.88, description: "Lush botanical garden surrounds and scenic Cauvery river bathing ghats.", image: IMGS.ecoForest, safeForWomen: true, offlineMapData: { lat: 10.7875, lng: 79.1365 } },

  // ==========================================
  // SIVAGANGA (CHETTINAD) DISTRICT (15 PLACES)
  // ==========================================
  { id: "cht-1", title: "Chettinad Palace (Kanadukathan)", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Kanadukathan, Karaikudi", duration: "3 Hours", price: "₹350", rating: 4.95, description: "110-room palatial mansion built in 1912 with Italian marble, Burmese teak, and Belgian mirrors.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.0760, lng: 78.7844 } },
  { id: "cht-2", title: "Athangudi Palace", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Athangudi, Karaikudi", duration: "2 Hours", price: "₹150", rating: 4.91, description: "Magnificent heritage residence famous for its vibrant handmade floor tile court rooms.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.1200, lng: 78.8300 } },
  { id: "cht-3", title: "Pillayarpatti Karpaga Vinayagar Temple", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Pillayarpatti, Karaikudi", duration: "2.5 Hours", price: "Free Entry", rating: 4.96, description: "1,600-year-old rock-cut cave temple housing a 6-foot rock carved Lord Ganesha idol.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 10.1250, lng: 78.6750 } },
  { id: "cht-4", title: "Kundrakudi Murugan Temple", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Kundrakudi, Karaikudi", duration: "2 Hours", price: "Free Entry", rating: 4.90, description: "Hilltop cave shrine dedicated to Lord Murugan perched atop a scenic granite rock outcrop.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 10.1100, lng: 78.7200 } },
  { id: "cht-5", title: "Karaikudi Heritage Walk", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Karaikudi Town", duration: "2.5 Hours", price: "Free Entry", rating: 4.88, description: "Guided walking tour through wide grid streets lined with 19th-century grand merchant mansions.", image: IMGS.pillarHall, safeForWomen: true, offlineMapData: { lat: 10.0700, lng: 78.7800 } },
  { id: "cht-6", title: "Chettinad Museum", category: "heritage", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Kanadukathan, Karaikudi", duration: "1.5 Hours", price: "₹50", rating: 4.86, description: "Heritage museum displaying Chettiar palm-leaf ledgers, enamelware, brass lamps, and marriage baskets.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.0765, lng: 78.7845 } },
  { id: "cht-7", title: "Athangudi Tile Factory", category: "agri", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Athangudi Village", duration: "2 Hours", price: "Free Entry", rating: 4.95, description: "Traditional workshop crafting eco-friendly handmade cement tiles using glass molds and oxide colors.", image: IMGS.farmPottery, safeForWomen: true, offlineMapData: { lat: 10.1210, lng: 78.8310 } },
  { id: "cht-8", title: "Athangudi Village", category: "agri", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Athangudi, Karaikudi", duration: "3 Hours", price: "Free Entry", rating: 4.93, description: "Artisan village famous worldwide for handmade decorative floor tiles and rural crafts.", image: IMGS.farmPottery, safeForWomen: true, offlineMapData: { lat: 10.1205, lng: 78.8305 } },
  { id: "cht-9", title: "Karaikudi Antique Market", category: "agri", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Jewellers Street, Karaikudi", duration: "2 Hours", price: "Free Entry", rating: 4.90, description: "Bustling market selling vintage Swedish enamelware, Belgian crystal, teak pillars, and brassware.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.0720, lng: 78.7810 } },
  { id: "cht-10", title: "Chettinad Cotton Saree Shops", category: "agri", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Karaikudi Bazaar", duration: "1.5 Hours", price: "Free Entry", rating: 4.89, description: "Handloom weaver outlets selling lightweight breathable Kandangi cotton sarees.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.0710, lng: 78.7800 } },
  { id: "cht-11", title: "Chettinad Mansion Stays", category: "agri", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Kanadukathan & Pallathur", duration: "Full Day / Night", price: "₹3,500", rating: 4.94, description: "Heritage farmstay experiences in restored 19th-century Chettiar mansions with courtyards.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 10.0760, lng: 78.7840 } },
  { id: "cht-12", title: "The Bangala", category: "food", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Devakottai Road, Karaikudi", duration: "2 Hours", price: "₹850", rating: 4.98, description: "World-renowned culinary destination serving multi-course traditional Chettinad banquets.", image: IMGS.foodCurry, safeForWomen: true, offlineMapData: { lat: 10.0650, lng: 78.7850 } },
  { id: "cht-13", title: "Chettinad Cuisine & Pepper Chicken Restaurants", category: "food", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Karaikudi Town", duration: "1.5 Hours", price: "₹450", rating: 4.95, description: "Banana leaf dining serving authentic pepper chicken, sea crab masala, and vellai paniyaram.", image: IMGS.foodCurry, safeForWomen: true, offlineMapData: { lat: 10.0705, lng: 78.7805 } },
  { id: "cht-14", title: "Local Spice Markets", category: "food", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Karaikudi Bazaar", duration: "1 Hour", price: "Free Entry", rating: 4.89, description: "Bustling spice market selling raw Chettinad masala blends, sun-dried vathal, and star anise.", image: IMGS.foodCoffee, safeForWomen: true, offlineMapData: { lat: 10.0715, lng: 78.7805 } },
  { id: "cht-15", title: "Vettangudi Bird Sanctuary", category: "eco", districtId: "chettinad", districtName: "Sivagangai (Chettinad) District", location: "Vettangudi, Tirupathur", duration: "2.5 Hours", price: "₹25", rating: 4.87, description: "Protected wetland sanctuary hosting migratory open-billed storks, egrets, and herons.", image: IMGS.ecoForest, safeForWomen: true, offlineMapData: { lat: 10.1100, lng: 78.5200 } },

  // ==========================================
  // NILGIRIS (OOTY) DISTRICT (15 PLACES)
  // ==========================================
  { id: "oty-1", title: "Ooty Botanical Garden", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Vannarappet, Ooty", duration: "3 Hours", price: "₹50", rating: 4.95, description: "55-acre terraced garden established in 1848 featuring 1,000 exotic plant species.", image: IMGS.ecoTea, safeForWomen: true, offlineMapData: { lat: 11.4160, lng: 76.7120 } },
  { id: "oty-2", title: "Ooty Lake", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "West Ooty", duration: "2.5 Hours", price: "₹30", rating: 4.90, description: "65-acre artificial lake constructed in 1824 offering paddle boating framed by eucalyptus trees.", image: IMGS.ecoWaterfall, safeForWomen: true, offlineMapData: { lat: 11.4060, lng: 76.6870 } },
  { id: "oty-3", title: "Doddabetta Peak", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Ooty-Kotagiri Road", duration: "2.5 Hours", price: "₹20", rating: 4.96, description: "Highest mountain peak in the Nilgiri Hills (2,637 meters) with telescope views.", image: IMGS.ecoTea, safeForWomen: true, offlineMapData: { lat: 11.4010, lng: 76.7360 } },
  { id: "oty-4", title: "Avalanche Lake", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Avalanche Sanctuary", duration: "4 Hours", price: "₹200", rating: 4.97, description: "Pristine high-altitude lake surrounded by shola forests and blooming rhododendrons.", image: IMGS.ecoWaterfall, safeForWomen: true, offlineMapData: { lat: 11.2900, lng: 76.5900 } },
  { id: "oty-5", title: "Emerald Lake", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Emerald Village", duration: "2.5 Hours", price: "Free Entry", rating: 4.93, description: "Serene emerald-green water reservoir nestled in the Silent Valley region of Nilgiris.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 11.3200, lng: 76.6100 } },
  { id: "oty-6", title: "Pykara Lake & Falls", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Pykara, Ooty", duration: "3 Hours", price: "₹100", rating: 4.92, description: "Unspoiled high-mountain lake cascades surrounded by protected Toda tribal lands.", image: IMGS.ecoWaterfall, safeForWomen: true, offlineMapData: { lat: 11.4500, lng: 76.5900 } },
  { id: "oty-7", title: "Government Rose Garden", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Elk Hill, Ooty", duration: "2 Hours", price: "₹40", rating: 4.94, description: "India's largest rose garden sprawling over 4 hectares with over 20,000 rose varieties.", image: IMGS.ecoTea, safeForWomen: true, offlineMapData: { lat: 11.4080, lng: 76.7150 } },
  { id: "oty-8", title: "Mudumalai Tiger Reserve", category: "eco", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Mudumalai", duration: "4 Hours", price: "₹350", rating: 4.97, description: "Declared tiger reserve and wildlife sanctuary harboring Bengal tigers and Asian elephants.", image: IMGS.ecoForest, safeForWomen: true, offlineMapData: { lat: 11.5600, lng: 76.5300 } },
  { id: "oty-9", title: "Coonoor Tea Gardens", category: "agri", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Coonoor Estates", duration: "3 Hours", price: "₹400", rating: 4.96, description: "High-altitude organic tea garden trail with artisanal leaf plucking and factory tasting.", image: IMGS.ecoTea, safeForWomen: true, offlineMapData: { lat: 11.3500, lng: 76.7900 } },
  { id: "oty-10", title: "Tea Museum", category: "agri", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Dodabetta Road, Ooty", duration: "1.5 Hours", price: "₹25", rating: 4.90, description: "Demonstrates CTC and orthodox tea processing methods alongside fresh Nilgiri tea tasting.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 11.4050, lng: 76.7300 } },
  { id: "oty-11", title: "Toda Village", category: "agri", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Muthorai Palada, Ooty", duration: "2 Hours", price: "Free Entry", rating: 4.92, description: "Indigenous Toda tribal settlement featuring barrel-vaulted bamboo huts and red-and-black embroidery.", image: IMGS.farmPaddy, safeForWomen: true, offlineMapData: { lat: 11.3900, lng: 76.6700 } },
  { id: "oty-12", title: "Ooty Toy Train", category: "heritage", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Ooty Railway Station", duration: "3.5 Hours", price: "₹200", rating: 4.98, description: "UNESCO World Heritage mountain steam railway built in 1908 running between Mettupalayam and Ooty.", image: IMGS.palaceStucco, safeForWomen: true, offlineMapData: { lat: 11.4060, lng: 76.6960 } },
  { id: "oty-13", title: "Elk Hill Murugan Temple", category: "heritage", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Elk Hill, Ooty", duration: "2 Hours", price: "Free Entry", rating: 4.89, description: "Hilltop temple featuring a 40-foot golden statue of Lord Murugan overlooking Ooty town.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 11.4000, lng: 76.7100 } },
  { id: "oty-14", title: "St. Stephen's Church", category: "heritage", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Club Road, Ooty", duration: "1 Hour", price: "Free Entry", rating: 4.86, description: "Built in 1829, one of the oldest churches in the Nilgiris featuring Tippu Sultan palace wooden beams.", image: IMGS.stoneTemple, safeForWomen: true, offlineMapData: { lat: 11.4140, lng: 76.7040 } },
  { id: "oty-15", title: "Homemade Chocolate Shops & Factory", category: "food", districtId: "ooty", districtName: "Nilgiris (Ooty) District", location: "Charring Cross, Ooty", duration: "1 Hour", price: "₹150", rating: 4.95, description: "Boutique shops selling fresh almond rochers, rum raisins, white chocolate, and truffles.", image: IMGS.foodCoffee, safeForWomen: true, offlineMapData: { lat: 11.4100, lng: 76.7080 } },

  // ==========================================
  // KANYAKUMARI DISTRICT (15 PLACES)
  // ==========================================
  { id: "kk-1", title: "Vivekananda Rock Memorial", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Vavathurai Rock, Kanyakumari", duration: "3 Hours", price: "₹100", rating: 4.97, description: "Monolithic sea rock memorial where Swami Vivekananda meditated in 1892, surrounded by 3 oceans.", image: IMGS.statue, safeForWomen: true, offlineMapData: { lat: 8.0780, lng: 77.5550 } },
  { id: "kk-2", title: "Thiruvalluvar Statue", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Sea Rock, Kanyakumari", duration: "2 Hours", price: "Included in Ferry", rating: 4.96, description: "133-foot stone statue of Tamil saint poet Thiruvalluvar symbolizing 133 chapters of Thirukkural.", image: IMGS.statue, safeForWomen: true, offlineMapData: { lat: 8.0775, lng: 77.5560 } },
  { id: "kk-3", title: "Bhagavathy Amman Temple", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Beach Road, Kanyakumari", duration: "2 Hours", price: "Free Entry", rating: 4.94, description: "3,000-year-old sea shrine dedicated to Virgin Goddess Kanya Devi featuring a sparkling diamond nose ring.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 8.0760, lng: 77.5530 } },
  { id: "kk-4", title: "Gandhi Mandapam", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Seashore, Kanyakumari", duration: "1.5 Hours", price: "Free Entry", rating: 4.88, description: "Pink memorial building engineered so that on October 2nd, sun rays fall on the spot where Gandhi's ashes were kept.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 8.0790, lng: 77.5510 } },
  { id: "kk-5", title: "Vattakottai Fort", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Vattakottai, Kanyakumari", duration: "2 Hours", price: "₹25", rating: 4.90, description: "18th-century coastal granite fort constructed by Travancore commander Eustachius De Lannoy.", image: IMGS.palaceStucco, safeForWomen: true, offlineMapData: { lat: 8.1250, lng: 77.5640 } },
  { id: "kk-6", title: "Padmanabhapuram Palace", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Thuckalay, Kanyakumari", duration: "3 Hours", price: "₹100", rating: 4.95, description: "16th-century wooden palace featuring carved teak ceilings, polished black egg-white floors, and counsel halls.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 8.2500, lng: 77.3200 } },
  { id: "kk-7", title: "Mathur Aqueduct", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Mathur, Kanyakumari", duration: "2 Hours", price: "₹10", rating: 4.91, description: "One of the longest aqueducts in South India spanning 1,240 feet across Pahrali river valley.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 8.3200, lng: 77.2900 } },
  { id: "kk-8", title: "Chitharal Jain Monuments", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Chitharal Hill, Kanyakumari", duration: "2.5 Hours", price: "Free Entry", rating: 4.89, description: "9th-century rock-cut cave temple containing carved Jain Tirthankara relief figures on granite slopes.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 8.3300, lng: 77.2400 } },
  { id: "kk-9", title: "Suchindram Thanumalayan Temple", category: "heritage", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Suchindram, Kanyakumari", duration: "2.5 Hours", price: "Free Entry", rating: 4.95, description: "Famous temple uniting Brahma, Vishnu, and Shiva in a single lingam, with 22-foot Hanuman sculpture.", image: IMGS.gopuramCarvings, safeForWomen: true, offlineMapData: { lat: 8.1560, lng: 77.4650 } },
  { id: "kk-10", title: "Kanyakumari Beach & Sunrise View Point", category: "eco", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "East Beach, Kanyakumari", duration: "2 Hours", price: "Free Entry", rating: 4.98, description: "Multi-colored sand ocean beach where visitors watch the sun rise out of the Bay of Bengal.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 8.0780, lng: 77.5540 } },
  { id: "kk-11", title: "Sunset View Point", category: "eco", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Hidden Twin Beach", duration: "1.5 Hours", price: "Free Entry", rating: 4.97, description: "Renowned viewpoint where sun sets over Arabian Sea water horizon.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 8.0820, lng: 77.5420 } },
  { id: "kk-12", title: "Thirparappu Falls", category: "eco", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Thirparappu, Kanyakumari", duration: "3 Hours", price: "₹25", rating: 4.91, description: "50-foot natural waterfall cascades over a rocky bed on the Kodayar river.", image: IMGS.ecoWaterfall, safeForWomen: true, offlineMapData: { lat: 8.3800, lng: 77.2600 } },
  { id: "kk-13", title: "Muttom Beach", category: "eco", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Muttom, Kanyakumari", duration: "2 Hours", price: "Free Entry", rating: 4.88, description: "Scenic cliffside fishing village beach with a colonial lighthouse and rock formations.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 8.1200, lng: 77.3100 } },
  { id: "kk-14", title: "Kanyakumari Fish Market", category: "food", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Harbor Road, Kanyakumari", duration: "1 Hour", price: "Free Entry", rating: 4.84, description: "Bustling coastal market trading fresh sea fish, seer fish fry, and crab catches daily.", image: IMGS.foodCurry, safeForWomen: true, offlineMapData: { lat: 8.0800, lng: 77.5500 } },
  { id: "kk-15", title: "Hotel Saravana (Local Meals)", category: "food", districtId: "kanyakumari", districtName: "Kanyakumari District", location: "Main Road, Kanyakumari", duration: "1 Hour", price: "₹180", rating: 4.88, description: "Popular local meal spot serving South Indian vegetarian banana leaf thali and Nanjil fish curry.", image: IMGS.foodDosa, safeForWomen: true, offlineMapData: { lat: 8.0820, lng: 77.5490 } },

  // ==========================================
  // CHENGALPATTU (MAMALLAPURAM) DISTRICT (15 PLACES)
  // ==========================================
  { id: "mml-1", title: "Shore Temple", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "ECR Beach, Mamallapuram", duration: "3 Hours", price: "₹400", rating: 4.95, description: "7th-century structural stone UNESCO temple facing Bengal sea waves, built by Pallava King Rajasimha.", image: IMGS.shoreTemple, safeForWomen: true, offlineMapData: { lat: 12.6269, lng: 80.1927 } },
  { id: "mml-2", title: "Pancha Rathas", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Monolith Complex, Mamallapuram", duration: "2.5 Hours", price: "Included in Ticket", rating: 4.93, description: "Five monolithic stone chariot structures carved out of single granite boulders in the 7th century.", image: IMGS.stoneTemple, safeForWomen: true, offlineMapData: { lat: 12.6160, lng: 80.1920 } },
  { id: "mml-3", title: "Arjuna's Penance", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Town Centre, Mamallapuram", duration: "2 Hours", price: "Included in Ticket", rating: 4.96, description: "World's largest open-air rock relief measuring 96 by 43 feet depicting the Descent of Ganges.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 12.6180, lng: 80.1930 } },
  { id: "mml-4", title: "Krishna's Butter Ball", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Hillside Park, Mamallapuram", duration: "1 Hour", price: "Free Entry", rating: 4.94, description: "Gigantic 250-ton natural granite boulder balancing precariously on a 45-degree smooth rock slope.", image: IMGS.stoneTemple, safeForWomen: true, offlineMapData: { lat: 12.6190, lng: 80.1940 } },
  { id: "mml-5", title: "Mahishasuramardini Cave", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Lighthouse Hill, Mamallapuram", duration: "1.5 Hours", price: "Included in Ticket", rating: 4.91, description: "Pallava rock cave featuring bas-relief masterpiece of Goddess Durga slaying Mahishasura.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 12.6150, lng: 80.1935 } },
  { id: "mml-6", title: "Varaha Cave Temple", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Hillside Complex, Mamallapuram", duration: "1.5 Hours", price: "Included in Ticket", rating: 4.90, description: "7th-century rock-cut cave mandapam featuring intricate relief carvings of Varaha and Bhu Devi.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 12.6175, lng: 80.1925 } },
  { id: "mml-7", title: "Tiger Cave", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Saluvankuppam, Mamallapuram", duration: "2 Hours", price: "₹25", rating: 4.87, description: "Coastal open-air theater rock shrine decorated with carved yali (tiger head) motifs.", image: IMGS.caveTemple, safeForWomen: true, offlineMapData: { lat: 12.6800, lng: 80.1960 } },
  { id: "mml-8", title: "Lighthouse", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Lighthouse Hill, Mamallapuram", duration: "1 Hour", price: "₹20", rating: 4.86, description: "Active circular stone lighthouse offering views over Pallava monuments and coastal sea.", image: IMGS.statue, safeForWomen: true, offlineMapData: { lat: 12.6145, lng: 79.1930 } },
  { id: "mml-9", title: "Sculpture Museum", category: "heritage", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "East Raja Street", duration: "1.5 Hours", price: "₹20", rating: 4.82, description: "Exhibits over 3,000 stone, wood, and brass sculptures created by students of Govt Sculpture College.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 12.6200, lng: 80.1910 } },
  { id: "mml-10", title: "DakshinaChitra", category: "agri", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Muttukadu, ECR", duration: "3.5 Hours", price: "₹175", rating: 4.96, description: "Living history heritage museum featuring 18 authentic recreated South Indian village houses and artisan workshops.", image: IMGS.mansion, safeForWomen: true, offlineMapData: { lat: 12.8200, lng: 80.2400 } },
  { id: "mml-11", title: "Mahabalipuram Sculpture Shops", category: "agri", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Five Rathas Road", duration: "2 Hours", price: "Free Entry", rating: 4.91, description: "Active stone carving workshops where traditional artisans chisel granite idols using age-old Pallava techniques.", image: IMGS.farmPottery, safeForWomen: true, offlineMapData: { lat: 12.6165, lng: 80.1915 } },
  { id: "mml-12", title: "Crocodile Bank", category: "eco", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Vadanemmeli, ECR", duration: "2.5 Hours", price: "₹100", rating: 4.93, description: "Herpetology conservation sanctuary housing over 2,000 muggers, gharials, and saltwater crocodiles.", image: IMGS.ecoForest, safeForWomen: true, offlineMapData: { lat: 12.7400, lng: 80.2200 } },
  { id: "mml-13", title: "Kovalam Beach", category: "eco", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Kovalam, ECR", duration: "2.5 Hours", price: "Free Entry", rating: 4.89, description: "Blue Flag certified surfing beach with clean sandy shores and water sports.", image: IMGS.ecoCoast, safeForWomen: true, offlineMapData: { lat: 12.7900, lng: 80.2500 } },
  { id: "mml-14", title: "Vedanthangal Bird Sanctuary", category: "eco", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Vedanthangal", duration: "3 Hours", price: "₹25", rating: 4.94, description: "Oldest water bird sanctuary in India attracting 40,000 migratory pelicans, cormorants, and ibis.", image: IMGS.ecoForest, safeForWomen: true, offlineMapData: { lat: 12.5400, lng: 79.8500 } },
  { id: "mml-15", title: "Moonrakers & Seashore Temple View Café", category: "food", districtId: "mahabalipuram", districtName: "Chengalpattu (Mamallapuram) District", location: "Shore Temple Road", duration: "1 Hour", price: "₹300", rating: 4.91, description: "Rooftop café offering views of 7th-century Shore Temple along with fresh coffee and sea food.", image: IMGS.foodCoffee, safeForWomen: true, offlineMapData: { lat: 12.6260, lng: 80.1920 } }
];

export const SAMPLE_ITINERARIES = {
  madurai: {
    meta: {
      durationDays: 3,
      startDistrict: "Madurai District",
      themes: ["heritage", "food"]
    },
    days: [
      {
        day: 1,
        title: "Day 1: Meenakshi Amman Temple & Nayak Palace",
        tamilTitle: "நாள் 1: மீனாட்சி அம்மன் கோயில் & அரண்மனை",
        location: "Madurai District (South TN Zone)",
        activities: [
          "Morning visit to Meenakshi Sundareswarar Temple (14 Gopurams & Golden Lotus Tank)",
          "Explore the Thousand Pillar Hall and 33,000 carved stone sculptures",
          "Visit Thirumalai Nayakar Mahal & admire 82-foot white stucco columns",
          "Evening: Taste famous Madurai Jigarthanda at East Marret Street"
        ],
        gemmaTip: "Visit Meenakshi temple early morning (6:00 - 8:30 AM) to witness daily morning pudhu mandapam rituals without crowd."
      },
      {
        day: 2,
        title: "Day 2: Alagar Hills & Thiruparankundram Cave Temple",
        tamilTitle: "நாள் 2: அழகர் கோயில் & திருப்பரங்குன்றம் குடைவரை",
        location: "Madurai District (South TN Zone)",
        activities: [
          "Morning trip to Kallazhagar Temple at the foot of Alagar Hills",
          "Ascend to Pazhamudhircholai Murugan Shrine in upper forest canopy",
          "Explore 6th-century Pandya rock-cut cave temple at Thiruparankundram",
          "Dinner: Enjoy Simmakkal Konar Mess Kari Dosa & Bun Parotta"
        ],
        gemmaTip: "Madurai District has a safety rating of 9.8 / 10 (Safe for Women). 24/7 tourist helpline available."
      },
      {
        day: 3,
        title: "Day 3: Vilachery Pottery Guild & Vaigai Paddy Farmstay",
        tamilTitle: "நாள் 3: விளச்சேரி கைவினை கிராமம் & வைகை பண்ணை",
        location: "Madurai District (South TN Zone)",
        activities: [
          "Visit Vilachery artisan village to watch clay Ayyanar horse making",
          "Explore Samanar Malai 2,000-year-old Jain cave inscriptions & Tamil-Brahmi script",
          "Relax at Sholavandan organic paddy farmstay along Vaigai river"
        ],
        gemmaTip: "Zero-carbon eco transit available from Madurai Junction to Sholavandan farmstay."
      }
    ]
  },
  thanjavur: {
    meta: {
      durationDays: 3,
      startDistrict: "Thanjavur District",
      themes: ["heritage", "food"]
    },
    days: [
      {
        day: 1,
        title: "Day 1: Brihadeeswarar Temple & Chola Fort",
        tamilTitle: "நாள் 1: தஞ்சைப் பெருவுடையார் கோயில் தரிசனம்",
        location: "Thanjavur District (Central TN Zone)",
        activities: [
          "Morning tour of Brihadeeswarar Temple (UNESCO World Heritage Site)",
          "Marvel at the 216-foot granite Vimanam & 80-ton single stone capstone",
          "Savor authentic Kumbakonam Degree Filter Coffee in brass Dabarah",
          "Evening walk around the royal Maratha palace grounds & moat"
        ],
        gemmaTip: "Visit Big Temple around 5:00 PM for breathtaking golden sunset reflections on the ancient granite wall."
      },
      {
        day: 2,
        title: "Day 2: Thanjavur Maratha Palace, Saraswathi Mahal & Art Gallery",
        tamilTitle: "நாள் 2: அரண்மனை மற்றும் சரஸ்வதி மஹால் நூலகம்",
        location: "Thanjavur District (Central TN Zone)",
        activities: [
          "Explore Maratha Royal Palace, Bell Tower & 1000-year-old Chola Bronze Gallery",
          "View ancient palm-leaf manuscripts at world-famous Saraswathi Mahal Library",
          "Watch Tanjore Art Plate crafting & Veena making by Master Artisans",
          "Enjoy traditional South Indian Rice Bowl banana leaf lunch"
        ],
        gemmaTip: "Thanjavur District has a safety rating of 9.9 / 10 (High Community Safety)."
      },
      {
        day: 3,
        title: "Day 3: Great Living Chola Temples (Darasuram & Gangaikonda)",
        tamilTitle: "நாள் 3: தாராசுரம் மற்றும் கங்கைகொண்ட சோழபுரம்",
        location: "Thanjavur District (Central TN Zone)",
        activities: [
          "Visit Airavatesvara Temple at Darasuram with carved stone horse chariot",
          "Explore Gangaikonda Cholapuram Temple built by Emperor Rajendra Chola I",
          "Unwind at an organic Cauvery delta paddy farmstay in Kumbakonam"
        ],
        gemmaTip: "100% Eco-certified trail with zero-carbon electric auto shuttles between temple sites."
      }
    ]
  },
  chettinad: {
    meta: {
      durationDays: 3,
      startDistrict: "Sivagangai (Chettinad) District",
      themes: ["heritage", "food", "agri"]
    },
    days: [
      {
        day: 1,
        title: "Day 1: Chettinad Mansions & Kanadukathan Architecture",
        tamilTitle: "நாள் 1: செட்டிநாட்டு அரண்மனை & கானாடுகாத்தான்",
        location: "Sivagangai (Chettinad) District (South-East TN)",
        activities: [
          "Explore Chettinad Palace (Kanadukathan) with Italian marble floors & Burmese teak pillars",
          "Walk through historic 100-room heritage merchant mansions",
          "Authentic Chettinad Bangala banana leaf feast featuring pepper spiced cuisine"
        ],
        gemmaTip: "Sivagangai (Chettinad) District safety rating: 9.7 / 10 (Peaceful Rural Hub)."
      },
      {
        day: 2,
        title: "Day 2: Athangudi Tile Studios & Local Crafts",
        tamilTitle: "நாள் 2: ஆத்தங்குடி ஓடு தயாரிப்பு & கைவினைப் பொருட்கள்",
        location: "Sivagangai (Chettinad) District (South-East TN)",
        activities: [
          "Hands-on workshop at Athangudi Handmade Tile Studio",
          "Visit Karaikudi antique market & traditional brass utensil shops",
          "Evening tea with snacks like Seepu Cheedai & Atharasam"
        ],
        gemmaTip: "Buy authentic handmade Athangudi tiles directly from artisan guilds."
      },
      {
        day: 3,
        title: "Day 3: Pillayarpatti Cave Temple & Rural Heritage Walk",
        tamilTitle: "நாள் 3: பிள்ளையார்பட்டி குடைவரை கோயில்",
        location: "Sivagangai (Chettinad) District (South-East TN)",
        activities: [
          "Morning darshan at Pillayarpatti Karpaga Vinayagar Rock-Cut Cave Temple",
          "Explore Thirumayam Fort & ancient rock-cut Vishnu cave shrine",
          "Relax at traditional Chettinad courtyard farmstay"
        ],
        gemmaTip: "Pillayarpatti rock cave temple dates back over 1,600 years to early Pandya era."
      }
    ]
  }
};
