// 1. Initialize Map
const map = L.map('map-container', { zoomControl: false }).setView([1.46853, 110.42892], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const greenIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

// 2. The FULL Dataset
const aedLocations = [
  { "location": "Pejabat Am, Ground Floor, Allamanda College", "googleLink": "https://maps.app.goo.gl/cWztF6VWmS567vSv5", "latitude": 1.4712434818790097, "longitude": 110.42993763560229 },
  { "location": "Pejabat Am, Ground Floor, Sakura College", "googleLink": "https://maps.app.goo.gl/AoxPjAtFNEP3NMM27", "latitude": 1.4693512094575545, "longitude": 110.42989941550191 },
  { "location": "Pejabat Am, First Floor, Bunga Raya College", "googleLink": "https://maps.app.goo.gl/eU9uuV7gkdDUrYLm7", "latitude": 1.4684115466887886, "longitude": 110.43540048090381 },
  { "location": "Pejabat Am, Ground Floor, Cempaka College", "googleLink": "https://maps.app.goo.gl/1QhAVkEKq9wT7iJZ8", "latitude": 1.4657312237570348, "longitude": 110.4322544792106 },
  { "location": "Pejabat Am, Ground Floor, Tun Ahmad Zaidi College", "googleLink": "https://maps.app.goo.gl/6bZzFNbrYoEFBHWz6", "latitude": 1.4657578079481013, "longitude": 110.43543930973162 },
  { "location": "Pejabat Am, First Floor, Kenanga College", "googleLink": "https://maps.app.goo.gl/WGnyMg5ipbZvmD2Q6", "latitude": 1.4581609698059042, "longitude": 110.4546236365316 },
  { "location": "Pejabat Am, Ground Floor, Seroja College", "googleLink": "https://maps.app.goo.gl/afVNU87WbauCRbKA9", "latitude": 1.4596414957495378, "longitude": 110.44919496895308 },
  { "location": "Guard House, Rafflesia College", "googleLink": "https://maps.app.goo.gl/xwdyxdXpFkiuRtgZ7", "latitude": 1.4492220434952954, "longitude": 110.4526524179085 },
  { "location": "Lobby Guard Floor, PETARY", "googleLink": "https://maps.app.goo.gl/5rhPYC8WXrpHxT5aA", "latitude": 1.4642558946870967, "longitude": 110.4266105771959 },
  { "location": "Lift Lobby Ground Floor, FACA", "googleLink": "https://maps.app.goo.gl/qRwyNsABPoUqkuDx8", "latitude": 1.463832332039258, "longitude": 110.42743946259165 },
  { "location": "Lobby Ground Floor, FELC", "googleLink": "https://maps.app.goo.gl/Co9RMMv6WS5uUjcB8", "latitude": 1.4641287120004445, "longitude": 110.42860830984203 },
  { "location": "Main Lobby, Lower Ground Floor, FSSH", "googleLink": "https://maps.app.goo.gl/nwHPrbjadSo5Fgii9", "latitude": 1.4637474320036539, "longitude": 110.42916318595618 },
  { "location": "Lobby Ground Floor, FCSHD", "googleLink": "https://maps.app.goo.gl/NPZGJse1p7EbQC8g7", "latitude": 1.4628907373305122, "longitude": 110.42908341354995 },
  { "location": "Lobby Ground Floor, FEB", "googleLink": "https://maps.app.goo.gl/grMFCUBLsrm6eesT9", "latitude": 1.463947304013352, "longitude": 110.43016617793678 },
  { "location": "Ground Floor, in front of PETARY FMHS", "googleLink": "https://maps.app.goo.gl/5WnZiGM19HE1eto26", "latitude": 1.46246312397711, "longitude": 110.43180226638968 },
  { "location": "Admin Office Ground Floor, Faculty of Built Environment", "googleLink": "https://maps.app.goo.gl/DJgDNpZtMKeszikx7", "latitude": 1.470195215409585, "longitude": 110.44795619433722 },
  { "location": "White House, near Admin Office entry", "googleLink": "https://maps.app.goo.gl/LdDzFnh9hc4NzY9UA", "latitude": 1.460228072817142, "longitude": 110.4524472132531 },
  { "location": "First Floor, Pejabat Seksyen Kebudayaan, Pusat Khidmat Pelajar", "googleLink": "https://maps.app.goo.gl/x2AAsYFrrkDwBM47", "latitude": 1.4662841866932788, "longitude": 110.42616844978247 },
  { "location": "Lobby Ground Floor, Faculty of Resource Science and Technology", "googleLink": "https://maps.app.goo.gl/1NFmPYTLvFKtdQnr9", "latitude": 1.4696789464347144, "longitude": 110.42815263866486 },
  { "location": "Civil Engineering Block, in front of lift Lobby", "googleLink": "https://maps.app.goo.gl/S3m3W5JVYADnGYgE9", "latitude": 1.4683436784448038, "longitude": 110.42715992583781 },
  { "location": "Admin Block, 2nd Floor General Office Lobby, Faculty of Engineering", "googleLink": "https://maps.app.goo.gl/5sidNTCSPcAM75Nt6", "latitude": 1.468298241104032, "longitude": 110.42829729573943 },
  { "location": "Ground Floor, Main Lobby, Block A, FCSIT", "googleLink": "https://maps.app.goo.gl/6Zub3xWcRUpBLUmw9", "latitude": 1.4685341182801874, "longitude": 110.42892193627169 },
  { "location": "Ground Floor, beside lift Lobby, HEPA Unimas", "googleLink": "https://maps.app.goo.gl/NKWBWMZbht5SKUSW7", "latitude": 1.4665815179157893, "longitude": 110.42757370065067 },
  { "location": "Lobby Ground Floor, TAHODC", "googleLink": "https://maps.app.goo.gl/7T2rM2zLg5JcsZWj7", "latitude": 1.4639035213274136, "longitude": 110.42609002524594 }
];

// Global variables for user location
let userLat = null;
let userLng = null;
let userMarker = null;

// 3. Distance Calculation (Haversine Formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Returns distance in km
}

// 4. Handle Location & Fallback
function setUserLocation(lat, lng, isMock = false) {
  userLat = lat;
  userLng = lng;
  
  map.flyTo([userLat, userLng], 16);

  if (userMarker) map.removeLayer(userMarker);
  
  const popupText = isMock ? "<b>Mock Location (Testing)</b>" : "<b>You are here</b>";
  userMarker = L.marker([userLat, userLng]).addTo(map).bindPopup(popupText).openPopup();

  // Re-render the cards now that we have a location to calculate distances!
  renderLocations(aedLocations);
}

function locateUser() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Location blocked/failed. Using fallback.");
        // Fallback location set to the center of campus area if blocked
        setUserLocation(1.465, 110.430, true); 
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  } else {
    setUserLocation(1.465, 110.430, true);
  }
}

// Auto-locate on load
locateUser();
document.getElementById('locate-btn').addEventListener('click', locateUser);

// 5. Render Cards Dynamically (With Sorting and Distances)
const cardContainer = document.getElementById('card-container');
let currentMarkers = [];

function renderLocations(locationsData) {
  cardContainer.innerHTML = '';
  currentMarkers.forEach(marker => map.removeLayer(marker));
  currentMarkers = [];

  // Create a copy of the array so we can add distances and sort it
  let processedData = [...locationsData];

  // If we have a user location, calculate distance for every AED
  if (userLat && userLng) {
    processedData.forEach(site => {
      site.distanceKm = calculateDistance(userLat, userLng, site.latitude, site.longitude);
    });
    // Sort array from closest to furthest
    processedData.sort((a, b) => a.distanceKm - b.distanceKm);
  }

  // Generate map markers and cards
  processedData.forEach((site, index) => {
    // Map Marker
    const marker = L.marker([site.latitude, site.longitude], { icon: greenIcon })
      .addTo(map)
      .bindPopup(`<b>${site.location}</b>`);
    currentMarkers.push(marker);

    // Distance formatting
    let distanceDisplay = "Searching location...";
    let timeDisplay = "";
    if (site.distanceKm !== undefined) {
      const meters = Math.round(site.distanceKm * 1000);
      distanceDisplay = `📍 ${meters}m away`;
      // Estimate walking time (avg speed 80 meters per minute)
      const walkMins = Math.ceil(meters / 80);
      timeDisplay = ` • ${walkMins} min walk`;
    }

    // Add a "Nearest" badge to the first item
    const badgeHtml = index === 0 ? `<span class="badge" style="position:absolute; top:10px; left:10px; background:#34d399; color:white; padding:4px 12px; border-radius:8px; font-size:12px; font-weight:bold;">Nearest</span>` : '';

    // Card HTML
    const card = document.createElement('div');
    card.className = 'aed-card';
    card.innerHTML = `
      <div class="card-image" style="background-color: #e5e7eb; position: relative; height: 100px;">
        ${badgeHtml}
      </div>
      <div class="card-content">
        <h3 style="font-size: 14px; margin-bottom: 5px;">${site.location}</h3>
        <p style="color: #6b7280; font-size: 12px; margin-bottom: 5px;">${distanceDisplay}${timeDisplay}</p>
        <p style="color: #007bff; font-weight: bold; font-size: 13px; margin-top: 5px;">Tap to Navigate ↗</p>
      </div>
    `;

    // Click event to open Google Maps routing
    card.addEventListener('click', () => {
      let mapsUrl = site.googleLink; // Default
      if (userLat && userLng) {
        mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${site.latitude},${site.longitude}`;
      }
      window.open(mapsUrl, '_blank');
    });

    cardContainer.appendChild(card);
  });
}

// 6. Search Bar Logic
document.getElementById('search-box').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredLocations = aedLocations.filter(site => 
    site.location.toLowerCase().includes(searchTerm)
  );
  renderLocations(filteredLocations);
});