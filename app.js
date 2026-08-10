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
  {
    "location": "Pejabat Am, Ground Floor, Kolej Allamanda",
    "googleLink": "https://maps.app.goo.gl/cWztF6VWmS567vSv5",
    "latitude": 1.4712434818790097,
    "longitude": 110.42993763560229,
    "imageUrl": "images/kolej_allamanda.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_allamanda.png"
  },
  {
    "location": "Pejabat Am, Ground Floor, Kolej Sakura",
    "googleLink": "https://maps.app.goo.gl/AoxPjAtFNEP3NMM27",
    "latitude": 1.4693512094575545,
    "longitude": 110.42989941550191,
    "imageUrl": "images/kolej_sakura.png" //"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_sakura.png"
  },
  {
    "location": "Pejabat Am, First Floor, Kolej Bunga Raya",
    "googleLink": "https://maps.app.goo.gl/eU9uuV7gkdDUrYLm7",
    "latitude": 1.4684115466887886,
    "longitude": 110.43540048090381,
    "imageUrl": "images/kolej_bunga_raya.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_bunga_raya.png"
  },
  {
    "location": "Pejabat Am, Ground Floor, Kolej Cempaka",
    "googleLink": "https://maps.app.goo.gl/1QhAVkEKq9wT7iJZ8",
    "latitude": 1.4657312237570348,
    "longitude": 110.4322544792106,
    "imageUrl": "images/kolej_cempaka.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_cempaka.png"
  },
  {
    "location": "Pejabat Am, Ground Floor, Kolej Tun Ahmad Zaidi",
    "googleLink": "https://maps.app.goo.gl/6bZzFNbrYoEFBHWz6",
    "latitude": 1.4657578079481013,
    "longitude": 110.43543930973162,
    "imageUrl": "images/kolej_taz.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_taz.png"
  },
  {
    "location": "Pejabat Am, First Floor, Kolej Kenanga",
    "googleLink": "https://maps.app.goo.gl/WGnyMg5ipbZvmD2Q6",
    "latitude": 1.4581609698059042,
    "longitude": 110.4546236365316,
    "imageUrl": "images/kolej_kenanga.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_kenanga.png"
  },
  {
    "location": "Pejabat Am, Ground Floor, Kolej Seroja",
    "googleLink": "https://maps.app.goo.gl/afVNU87WbauCRbKA9",
    "latitude": 1.4596414957495378,
    "longitude": 110.44919496895308,
    "imageUrl": "images/kolej_seroja.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_seroja.png"
  },
  {
    "location": "Guard House, Kolej Rafflesia",
    "googleLink": "https://maps.app.goo.gl/xwdyxdXpFkiuRtgZ7",
    "latitude": 1.4492220434952954,
    "longitude": 110.4526524179085,
    "imageUrl": "images/kolej_rafflesia.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\kolej_rafflesia.png"
  },
  {
    "location": "Lobby Guard Floor, Perpustakaan Tun Abdul Rahman Ya'kub (PETARY)",
    "googleLink": "https://maps.app.goo.gl/5rhPYC8WXrpHxT5aA",
    "latitude": 1.4642558946870967,
    "longitude": 110.4266105771959,
    "imageUrl": "images/petary_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\petary_lobby.png"
  },
  {
    "location": "Lift Lobby Ground Floor, Fakulti Seni Gunaan dan Kreatif (FSGK)",
    "googleLink": "https://maps.app.goo.gl/qRwyNsABPoUqkuDx8",
    "latitude": 1.463832332039258,
    "longitude": 110.42743946259165,
    "imageUrl": "images/faca_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\faca_lobby.png"
  },
  {
    "location": "Lobby Ground Floor, Fakulti Pendidikan, Bahasa dan Komunikasi (FPBK)",
    "googleLink": "https://maps.app.goo.gl/Co9RMMv6WS5uUjcB8",
    "latitude": 1.4641287120004445,
    "longitude": 110.42860830984203,
    "imageUrl": "images/felc_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\felc_lobby.png"
  },
  {
    "location": "Main Lobby, Lower Ground Floor, Fakulti Sains Sosial dan Kemanusiaan (FSSK)",
    "googleLink": "https://maps.app.goo.gl/nwHPrbjadSo5Fgii9",
    "latitude": 1.4637474320036539,
    "longitude": 110.42916318595618,
    "imageUrl": "images/fssk_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fssk_lobby.png"
  },
  {
    "location": "Lobby Ground Floor, Fakulti Sains Kognitif dan Pembangunan Manusia (FSKPM)",
    "googleLink": "https://maps.app.goo.gl/NPZGJse1p7EbQC8g7",
    "latitude": 1.4628907373305122,
    "longitude": 110.42908341354995,
    "imageUrl": "images/fskpm_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fskpm_lobby.png"
  },
  {
    "location": "Lobby Ground Floor, Fakulti Ekonomi dan Bisnes (FEB)",
    "googleLink": "https://maps.app.goo.gl/grMFCUBLsrm6eesT9",
    "latitude": 1.463947304013352,
    "longitude": 110.43016617793678,
    "imageUrl": "images/feb_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\feb_lobby.png"
  },
  {
    "location": "Ground Floor, in front of PETARY Fakulti Perubatan dan Sains Kesihatan (FPSK)",
    "googleLink": "https://maps.app.goo.gl/5WnZiGM19HE1eto26",
    "latitude": 1.46246312397711,
    "longitude": 110.43180226638968,
    "imageUrl": "images/fpsk_petary.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fpsk_petary.png"
  },
  {
    "location": "Admin Office Ground Floor, Fakulti Alam Bina (FAB)",
    "googleLink": "https://maps.app.goo.gl/DJgDNpZtMKeszikx7",
    "latitude": 1.470195215409585,
    "longitude": 110.44795619433722,
    "imageUrl": "images/fab_admin.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fab_admin.png"
  },
  {
    "location": "White House, near Admin Office entry",
    "googleLink": "https://maps.app.goo.gl/LdDzFnh9hc4NzY9UA",
    "latitude": 1.460228072817142,
    "longitude": 110.4524472132531,
    "imageUrl": "images/white_house.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\white_house.png"
  },
  {
    "location": "First Floor, Pejabat Seksyen Kebudayaan, Pusat Khidmat Pelajar",
    "googleLink": "https://maps.app.goo.gl/x2AAsYFrrkDwBM47",
    "latitude": 1.4662841866932788,
    "longitude": 110.42616844978247,
    "imageUrl": "images/pusat_seksyen_kebudayaan.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\pejaba_seksyen_kebudayan.png"
  },
  {
    "location": "Lobby Ground Floor, Fakulti Sains dan Teknologi Sumber (FSTS)",
    "googleLink": "https://maps.app.goo.gl/1NFmPYTLvFKtdQnr9",
    "latitude": 1.4696789464347144,
    "longitude": 110.42815263866486,
    "imageUrl": "images/fsts_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fsts_lobby.png"
  },
  {
    "location": "Civil Engineering Block, in front of lift Lobby",
    "googleLink": "https://maps.app.goo.gl/S3m3W5JVYADnGYgE9",
    "latitude": 1.4683436784448038,
    "longitude": 110.42715992583781,
    "imageUrl": "images/civil_engineering.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\civil_engineering.png"
  },
  {
    "location": "Admin Block, 2nd Floor General Office Lobby, Fakulti Kejuruteraan (FK)",
    "googleLink": "https://maps.app.goo.gl/5sidNTCSPcAM75Nt6",
    "latitude": 1.468298241104032,
    "longitude": 110.42829729573943,
    "imageUrl": "images/fakulti_kejuruteraan.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fakulti_kejuruteraan.png"
  },
  {
    "location": "Ground Floor, Main Lobby, Block A, Fakulti Sains Komputer dan Teknologi Maklumat (FSKTM)",
    "googleLink": "https://maps.app.goo.gl/6Zub3xWcRUpBLUmw9",
    "latitude": 1.4685341182801874,
    "longitude": 110.42892193627169,
    "imageUrl": "images/fcsit_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\fcsit_lobby.png"
  },
  {
    "location": "Ground Floor, beside lift Lobby, Bahagian Hal Ehwal Pelajar dan Alumni (HEPA) Unimas",
    "googleLink": "https://maps.app.goo.gl/NKWBWMZbht5SKUSW7",
    "latitude": 1.4665815179157893,
    "longitude": 110.42757370065067,
    "imageUrl": "images/HEPA_ground.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\HEPA_ground.png"
  },
  {
    "location": "Lobby Ground Floor, Tun Abang Haji Openg Digital Centre (TAHODC)",
    "googleLink": "https://maps.app.goo.gl/7T2rM2zLg5JcsZWj7",
    "latitude": 1.4639035213274136,
    "longitude": 110.42609002524594,
    "imageUrl": "images/tahodc_lobby.png"//"C:\Users\user\OneDrive\Documents\AED LOCATION\images\tahodc_lobby.png"
  }
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
    
    console.log("Requesting high-accuracy GPS lock...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success! Get real coordinates
        setUserLocation(position.coords.latitude, position.coords.longitude, false);
      },
      (error) => {
        // Handle specific errors instead of using a mock location
        let errorMessage = "An unknown error occurred.";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access was denied. Please allow location permissions in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Check your device's GPS signal.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out. Please try again.";
            break;
        }
        alert(errorMessage);
        console.error("Geolocation Error:", error);
      },
      { 
        enableHighAccuracy: true, 
        timeout: 10000,           
        maximumAge: 0             
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Auto-locate on load
locateUser();
document.getElementById('locate-btn').addEventListener('click', locateUser);

// 5. Render Cards Dynamically (With Horizontal Layout)
const cardContainer = document.getElementById('card-container');
let currentMarkers = [];

function renderLocations(locationsData) {
  cardContainer.innerHTML = '';
  currentMarkers.forEach(marker => map.removeLayer(marker));
  currentMarkers = [];

  let processedData = [...locationsData];

  if (userLat && userLng) {
    processedData.forEach(site => {
      site.distanceKm = calculateDistance(userLat, userLng, site.latitude, site.longitude);
    });
    processedData.sort((a, b) => a.distanceKm - b.distanceKm);
  }

  processedData.forEach((site, index) => {
    const marker = L.marker([site.latitude, site.longitude], { icon: greenIcon })
      .addTo(map)
      .bindPopup(`<b>${site.location}</b>`);
    currentMarkers.push(marker);

    let distanceDisplay = "Searching location...";
    let timeDisplay = "";
    if (site.distanceKm !== undefined) {
      const meters = Math.round(site.distanceKm * 1000);
      distanceDisplay = `📍 ${meters}m away`;
      const walkMins = Math.ceil(meters / 80);
      timeDisplay = ` • ${walkMins} min walk`;
    }

    const badgeHtml = index === 0 
      ? `<span style="background:#34d399; color:white; padding:4px 8px; border-radius:6px; font-size:10px; font-weight:bold; display:inline-block; margin-bottom:8px; align-self: flex-start;">Nearest</span>` 
      : '';

    const imageElement = site.imageUrl 
      ? `<img src="${site.imageUrl}" alt="${site.location}" style="max-width: 100%; max-height: 100%; border-radius: 8px; object-fit: contain;">` 
      : `<div style="width: 100%; height: 100%; background: #e5e7eb; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #888;">No Image</div>`;

    const card = document.createElement('div');
    card.className = 'aed-card';
    card.innerHTML = `
      <div style="display: flex; flex-direction: row; padding: 15px; width: 100%; height: 100%; align-items: center; justify-content: space-between; gap: 15px; box-sizing: border-box;">
        
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; min-width: 0;">
          ${badgeHtml}
          <h3 style="font-size: 15px; margin-bottom: 6px; color: #111; line-height: 1.2;">${site.location}</h3>
          <p style="color: #6b7280; font-size: 12px; margin-bottom: 6px;">${distanceDisplay}${timeDisplay}</p>
          <p style="color: #007bff; font-weight: bold; font-size: 13px; margin-top: 4px;">Tap to Navigate ↗</p>
        </div>
        
        <div style="width: 100px; height: 100px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
          ${imageElement}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      let mapsUrl = site.googleLink; 
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