// Jharkhand Tourism Platform JavaScript - Fixed Version

// Application data from the provided JSON
const appData = {
  "destinations": [
    {
      "id": 1,
      "name": "Netarhat",
      "type": "Hill Station",
      "description": "Known as the Queen of Chotanagpur, famous for sunrise and sunset views",
      "location": "Latehar District",
      "distance_from_ranchi": "156 km",
      "elevation": "1128 meters",
      "best_time": "October to March",
      "attractions": ["Sunrise Point", "Sunset Point (Magnolia Point)", "Upper Ghaghri Falls", "Pine Forests"],
      "weather": {"temp": "18°C", "condition": "Partly Cloudy", "humidity": "65%"},
      "image": "netarhat-hills.jpg",
      "rating": 4.6
    },
    {
      "id": 2,
      "name": "Betla National Park",
      "type": "Wildlife Sanctuary",
      "description": "One of India's first tiger reserves under Project Tiger",
      "location": "Latehar District",
      "distance_from_ranchi": "170 km",
      "area": "226.32 sq km",
      "best_time": "October to June",
      "attractions": ["Tiger Safari", "Elephant Rides", "Watchtowers", "Palamu Fort"],
      "weather": {"temp": "25°C", "condition": "Sunny", "humidity": "55%"},
      "image": "betla-tigers.jpg",
      "rating": 4.4
    },
    {
      "id": 3,
      "name": "Deoghar",
      "type": "Religious Site",
      "description": "Home to Baidyanath Jyotirlinga, one of 12 sacred temples",
      "location": "Deoghar District",
      "distance_from_ranchi": "250 km",
      "best_time": "July to March",
      "attractions": ["Baidyanath Temple", "Naulakha Mandir", "Tapovan Caves", "Trikut Hills"],
      "weather": {"temp": "22°C", "condition": "Clear", "humidity": "60%"},
      "image": "deoghar-temple.jpg",
      "rating": 4.7
    },
    {
      "id": 4,
      "name": "Hundru Falls",
      "type": "Waterfall",
      "description": "98-meter high waterfall formed by Subarnarekha River",
      "location": "Ranchi District",
      "distance_from_ranchi": "45 km",
      "height": "98 meters",
      "best_time": "July to February",
      "attractions": ["Main Falls", "Trekking Trails", "Picnic Spots", "Photography"],
      "weather": {"temp": "24°C", "condition": "Light Rain", "humidity": "78%"},
      "image": "hundru-falls.jpg",
      "rating": 4.5
    },
    {
      "id": 5,
      "name": "Ranchi",
      "type": "Capital City",
      "description": "Capital city with waterfalls, parks and modern amenities",
      "location": "Ranchi District",
      "distance_from_ranchi": "0 km",
      "best_time": "October to March",
      "attractions": ["Rock Garden", "Tagore Hill", "Birsa Zoological Park", "Patratu Valley"],
      "weather": {"temp": "26°C", "condition": "Partly Cloudy", "humidity": "62%"},
      "image": "ranchi-city.jpg",
      "rating": 4.2
    }
  ],
  "tribal_communities": [
    {
      "name": "Santhal",
      "population": "2.8 million",
      "region": "Eastern Jharkhand",
      "crafts": ["Sohrai Paintings", "Traditional Music", "Dance Forms"],
      "festivals": ["Sohrai", "Karam", "Baha"],
      "description": "Largest tribal community known for their rich cultural traditions"
    },
    {
      "name": "Munda",
      "population": "1.2 million", 
      "region": "Central Jharkhand",
      "crafts": ["Wood Carving", "Traditional Ornaments", "Agricultural Tools"],
      "festivals": ["Sarhul", "Karma", "Sohrai"],
      "description": "Known for their connection to nature and sustainable farming"
    },
    {
      "name": "Oraon",
      "population": "900k",
      "region": "Western Jharkhand", 
      "crafts": ["Bhitichitra Paintings", "Bamboo Crafts", "Pottery"],
      "festivals": ["Sarhul", "Karma", "Jani Shikar"],
      "description": "Famous for their traditional paintings and artistic heritage"
    },
    {
      "name": "Ho",
      "population": "700k",
      "region": "Southern Jharkhand",
      "crafts": ["Metal Work", "Jewelry Making", "Traditional Weapons"],
      "festivals": ["Maghe", "Baa", "Kolom Sing"],
      "description": "Skilled metalworkers and jewelry craftsmen"
    }
  ],
  "handicrafts": [
    {
      "id": 1,
      "name": "Dhokra Art",
      "type": "Metal Craft",
      "description": "4000-year-old lost wax technique creating bronze and copper artifacts",
      "artisans": "Malhar Community",
      "price_range": "₹500 - ₹15,000",
      "image": "dhokra-art.jpg",
      "availability": "In Stock",
      "rating": 4.8
    },
    {
      "id": 2,
      "name": "Sohrai Paintings",
      "type": "Wall Art",
      "description": "Traditional harvest festival paintings with natural pigments",
      "artisans": "Santhal Community",
      "price_range": "₹300 - ₹5,000",
      "image": "sohrai-painting.jpg",
      "availability": "In Stock", 
      "rating": 4.6
    },
    {
      "id": 3,
      "name": "Bamboo Crafts",
      "type": "Utility Items",
      "description": "Traditional baskets and utility items from local bamboo",
      "artisans": "Multiple Communities",
      "price_range": "₹200 - ₹2,000",
      "image": "bamboo-craft.jpg",
      "availability": "Limited Stock",
      "rating": 4.5
    },
    {
      "id": 4,
      "name": "Terracotta Items",
      "type": "Pottery",
      "description": "Traditional clay pottery and decorative items",
      "artisans": "Kumhar Community", 
      "price_range": "₹150 - ₹3,000",
      "image": "terracotta.jpg",
      "availability": "In Stock",
      "rating": 4.4
    }
  ],
  "guides": [
    {
      "id": 1,
      "name": "Raj Kumar Singh",
      "specialization": "Wildlife & Nature",
      "languages": ["Hindi", "English", "Mundari"],
      "experience": "8 years",
      "rating": 4.8,
      "verified": true,
      "price": "₹2500/day",
      "blockchain_id": "GID001BKC"
    },
    {
      "id": 2,
      "name": "Sunita Devi",
      "specialization": "Tribal Culture & Handicrafts",
      "languages": ["Hindi", "English", "Santhali"],
      "experience": "6 years", 
      "rating": 4.9,
      "verified": true,
      "price": "₹2000/day",
      "blockchain_id": "GID002BKC"
    }
  ]
};

// Application State
let currentSection = 'home';
let currentFilter = 'all';
let chatbotOpen = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDestinations();
    initializeCulture();
    initializeMarketplace();
    initializeTripPlanner();
    initializeChatbot();
    initializeModals();
    initializeCharts();
    initializeRealTimeData();
    initializeVRTours();
  
    
    // Set active section
    showSection('home');
    
    console.log('Jharkhand Smart Tourism Platform Initialized');
});

// Navigation functionality - FIXED
function initializeNavigation() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            if (section) {
                showSection(section);
                
                // Update active navigation
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Brand/logo click to go home
    const brand = document.querySelector('.nav__brand');
    if (brand) {
        brand.addEventListener('click', () => {
            showSection('home');
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('.nav__link[data-section="home"]').classList.add('active');
        });
        brand.style.cursor = 'pointer';
    }
    
    // Hero action buttons
    document.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        if (action === 'explore-destinations') {
            showSection('destinations');
            updateNavigation('destinations');
        } else if (action === 'plan-trip') {
            showSection('planner');
            updateNavigation('planner');
        }
    });
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav__menu--open');
        });
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('section--active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('section--active');
        currentSection = sectionId;
        
        // Initialize section-specific content if needed
        if (sectionId === 'dashboard') {
            // Reinitialize charts when dashboard is shown
            setTimeout(() => {
                initializeCharts();
            }, 100);
        }
    }
}

function updateNavigation(sectionId) {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Destinations functionality

function initializeDestinations() {
    renderDestinations();
    initializeDestinationFilters();
    initializeMapMarkers();
}

function renderDestinations(filter = 'all') {
    const destinationsGrid = document.getElementById('destinationsGrid');
    if (!destinationsGrid) return;
    
    let filteredDestinations = appData.destinations;
    
    if (filter !== 'all') {
        filteredDestinations = appData.destinations.filter(dest => dest.type === filter);
    }
    
    destinationsGrid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card" data-destination="${dest.id}">
            <div class="destination-card__image">
                ${getDestinationIcon(dest.type)}
            </div>
            <div class="destination-card__content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="destination-card__meta">
                    <span>⭐ ${dest.rating}</span>
                    <span>📍 ${dest.distance_from_ranchi}</span>
                </div>
                <div class="destination-weather">
                    <span>${dest.weather.temp} | ${dest.weather.condition}</span>
                </div>
                <button class="btn btn--primary btn--sm explore-destination-btn" data-destination-id="${dest.id}">
                    Explore Details
                </button>
            </div>
        </div>
    `).join('');
    
    // Add click listeners for destination details
    document.querySelectorAll('.explore-destination-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const destId = parseInt(btn.getAttribute('data-destination-id'));
            showDestinationModal(destId);
        });
    });
}

function initializeDestinationFilters() {
    const filterButtons = document.querySelectorAll('.filters .filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter
            filterButtons.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            
            // Render filtered destinations
            renderDestinations(filter);
            currentFilter = filter;
        });
    });
}

function initializeMapMarkers() {
    const mapMarkers = document.querySelectorAll('.map-marker');
    
    mapMarkers.forEach(marker => {
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            const destId = parseInt(marker.getAttribute('data-destination'));
            showDestinationModal(destId);
        });
    });
}

function getDestinationIcon(type) {
    const icons = {
        'Hill Station': '🏔️',
        'Wildlife Sanctuary': '🐅',
        'Religious Site': '🏛️',
        'Waterfall': '💧',
        'Capital City': '🏙️'
    };
    return icons[type] || '📍';
}




// Culture & Heritage functionality
function initializeCulture() {
    const tribesGrid = document.querySelector('.tribes-grid');
    const handicraftsGrid = document.querySelector('.handicrafts-grid');
    
    if (tribesGrid) {
        // Image mapping for tribal communities
        const tribeImages = {
            'Santhal': 'https://live.staticflickr.com/7606/16147402643_4586ed4b6f_b.jpg',
            'Munda': 'https://th.bing.com/th/id/OIP.o5EAXOOztWvrZNMetBjupAAAAA?w=150&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3r',
            'Oraon': 'https://th.bing.com/th/id/OIP.u6MnLfDUAfVXmOcZmArQnQHaD4?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            'Ho': 'https://tse4.mm.bing.net/th/id/OIP.Gb3YgTtQhFcKaprddO_acAHaD_?rs=1&pid=ImgDetMain&o=7&rm=3'
        };

        tribesGrid.innerHTML = appData.tribal_communities.map(tribe => `
            <div class="tribe-card">
                <img class="tribe-image" src="${tribeImages[tribe.name]}" alt="${tribe.name} tribal art" loading="lazy">
                <h4>${tribe.name}</h4>
                <div class="tribe-meta">
                    <span>Population: ${tribe.population}</span>
                    <span>${tribe.region}</span>
                </div>
                <p>${tribe.description}</p>
                <div class="crafts-list">
                    ${tribe.crafts.map(craft => `<span class="craft-tag">${craft}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
    
    if (handicraftsGrid) {
        renderHandicrafts();
    }
}

function renderHandicrafts() {
    const handicraftsGrid = document.querySelector('.handicrafts-grid');
    if (!handicraftsGrid) return;

    // Image mapping for handicrafts
    // const craftImages = {
    //     'Dhokra Art': 'https://th.bing.com/th/id/OIP.Cb4oUfIIxLUfhbe8qM4jywHaGT?w=212&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    //     'Sohrai Paintings': 'https://th.bing.com/th/id/OIP.GyiiqAQdesJCCD0gZNBx8gHaER?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    //     'Bamboo Crafts': 'https://th.bing.com/th/id/OIP.hW2GqCh6qaHwJ54LTjUg7QHaE8?w=296&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3r',
    //     'Terracotta Items': 'https://th.bing.com/th/id/OIP.vWz6XEVXExxHRZLDPKwh0QHaFV?w=212&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    // };
    // after gpt
     const craftImages = {
        'Dhokra Art': 'https://im.whatshot.in/img/2017/Oct/shutterstock-394791178-1o-1506944975.jpg',
        'Sohrai Paintings': 'https://c8.alamy.com/comp/2PNJA43/sohrai-painting-is-a-mural-art-traditionally-practiced-by-women-in-the-hazaribagh-district-of-jharkhand-in-india-traditionally-used-to-decorate-the-h-2PNJA43.jpg',
        'Bamboo Crafts': 'https://i.ytimg.com/vi/ZHdKsna19xc/hqdefault.jpg',
        'Terracotta Items': 'https://th.bing.com/th/id/OIP.lhuWv30TVsAhG2YCjsCC4QHaHa?w=147&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    };

    handicraftsGrid.innerHTML = appData.handicrafts.map(craft => `
        <div class="handicraft-card">
            <div class="product-image">
                <img src="${craftImages[craft.name]}" alt="${craft.name}" loading="lazy">
                 
            </div>
            <div class="product-info">
                <h4 class="product-name">${craft.name}</h4>
                <div class="handicraft-meta">
                    <span>${craft.type}</span>
                    <span class="product-rating">⭐ ${craft.rating}</span>
                </div>
                <p>${craft.description}</p>
                <div class="product-price">${craft.price_range}</div>
                <span class="availability availability--${craft.availability === 'In Stock' ? 'in-stock' : 'limited'}">${craft.availability}</span>
            </div>
        </div>
    `).join('');


    // Add click listeners for marketplace links
    document.querySelectorAll('.marketplace-link-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection('marketplace');
            updateNavigation('marketplace');
        });
    });
}
function renderMarketplaceItems() {
    const marketplaceGrid = document.getElementById('marketplaceGrid');
    if (!marketplaceGrid) return;
    
    // Image mapping for marketplace items
    const marketplaceImages = {
        'Dhokra Art': 'https://im.whatshot.in/img/2017/Oct/shutterstock-394791178-1o-1506944975.jpg',
        'Sohrai Paintings': 'https://c8.alamy.com/comp/2PNJA43/sohrai-painting-is-a-mural-art-traditionally-practiced-by-women-in-the-hazaribagh-district-of-jharkhand-in-india-traditionally-used-to-decorate-the-h-2PNJA43.jpg',
        'Bamboo Crafts': 'https://i.ytimg.com/vi/ZHdKsna19xc/hqdefault.jpg',
        'Terracotta Items': 'https://th.bing.com/th/id/OIP.lhuWv30TVsAhG2YCjsCC4QHaHa?w=147&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        'Tribal Homestay - Netarhat': 'https://tse1.mm.bing.net/th/id/OIP.FKilhNZm41uuUBJ7xHxR1AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
        'Forest Lodge - Betla': 'https://tse4.mm.bing.net/th/id/OIP.u92uUxidlM7IPgacHMpDzwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
        'Tribal Organic Honey': 'https://tse1.mm.bing.net/th/id/OIP.AnUNISS35rPFiryo8renHAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        'Traditional Handia': 'https://tse1.mm.bing.net/th/id/OIP.VAl_DCdNCtOWvMl9XT7-PAHaFN?rs=1&pid=ImgDetMain&o=7&rm=3'
    };
    
    const items = [
        ...appData.handicrafts.map(item => ({...item, category: 'handicrafts'})),
        {id: 'h1', name: 'Tribal Homestay - Netarhat', category: 'homestays', price_range: '₹1500-3000/night', rating: 4.7, availability: 'Available'},
        {id: 'h2', name: 'Forest Lodge - Betla', category: 'homestays', price_range: '₹2000-4000/night', rating: 4.5, availability: 'Available'},
        {id: 'f1', name: 'Tribal Organic Honey', category: 'food', price_range: '₹300-800', rating: 4.6, availability: 'In Stock'},
        {id: 'f2', name: 'Traditional Handia', category: 'food', price_range: '₹150-300', rating: 4.4, availability: 'In Stock'}
    ];
    
    marketplaceGrid.innerHTML = items.map(item => `
        <div class="product-card" data-category="${item.category}">
            <div class="product-image">
                <img src="${marketplaceImages[item.name] || 'https://via.placeholder.com/300x160?text=' + encodeURIComponent(item.name)}" 
                     alt="${item.name}" 
                     loading="lazy"
                      
                     onerror="this.src='https://via.placeholder.com/300x160?text=' + encodeURIComponent('${item.name}')">
            </div>
            <div class="product-info">
                <h4 class="product-name">${item.name}</h4>
                <div class="product-price">${item.price_range}</div>
                <div class="product-rating">⭐ ${item.rating}</div>
                <div class="availability availability--${item.availability.toLowerCase().replace(' ', '-')}">${item.availability}</div>
                 <a href="payment.html" target="_blank">
                <button class="btn btn--primary btn--sm book-now-btn">Book Now</button>
                </a>
            </div>
        </div>
    `).join('');
    
    // Add click listeners for booking
    document.querySelectorAll('.book-now-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Booking functionality would integrate with secure payment gateway and blockchain verification system.');
        });
    });
}

// Trip Planner functionality
function initializeTripPlanner() {
    const tripPlannerForm = document.getElementById('tripPlannerForm');
    if (!tripPlannerForm) return;
    
    tripPlannerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        generateAIItinerary(new FormData(tripPlannerForm));
    });
}
/* Newsletter form */
document.addEventListener('DOMContentLoaded', function() {
  const newsletter = document.getElementById('newsletterForm');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thanks for subscribing! You'll now receive updates.");
      newsletter.reset();
    });
  }
});



function generateAIItinerary(formData) {
    const duration = formData.get('duration');
    const budget = formData.get('budget');
    const interests = formData.getAll('interests');
    
    // Simulate AI-generated itinerary
    const itinerary = createPersonalizedItinerary(duration, budget, interests);
    
    displayItinerary(itinerary);
}

function createPersonalizedItinerary(duration, budget, interests) {
    const days = parseInt(duration);
    const itinerary = [];
    
    for (let i = 1; i <= days; i++) {
        const dayPlan = {
            day: i,
            title: `Day ${i}`,
            activities: []
        };
        
        if (interests.includes('nature')) {
            if (i === 1) dayPlan.activities.push('Visit Netarhat for sunrise views');
            if (i === 2) dayPlan.activities.push('Betla National Park tiger safari');
            if (i === 3) dayPlan.activities.push('Hundru Falls trek and photography');
        }
        
        if (interests.includes('culture')) {
            dayPlan.activities.push('Tribal village visit and handicraft shopping');
        }
        
        if (interests.includes('heritage')) {
            dayPlan.activities.push('Deoghar temple complex tour');
        }
        
        if (interests.includes('adventure')) {
            dayPlan.activities.push('Trekking and adventure sports');
        }
        
        // Add budget-specific recommendations
        if (budget === 'luxury') {
            dayPlan.accommodation = 'Premium resort with spa facilities';
            dayPlan.transport = 'Private AC car with driver';
        } else if (budget === 'mid-range') {
            dayPlan.accommodation = 'Comfortable hotel or eco-lodge';
            dayPlan.transport = 'Shared taxi or bus service';
        } else {
            dayPlan.accommodation = 'Budget hotel or homestay';
            dayPlan.transport = 'Public transport and local buses';
        }
        
        itinerary.push(dayPlan);
    }
    
    return itinerary;
}

function displayItinerary(itinerary) {
    const itineraryContent = document.getElementById('itineraryContent');
    const generatedItinerary = document.getElementById('generatedItinerary');
    
    if (!itineraryContent || !generatedItinerary) return;
    
    itineraryContent.innerHTML = itinerary.map(day => `
        <div class="itinerary-day">
            <h4>${day.title}</h4>
            <div class="activities">
                ${day.activities.map(activity => `<div>• ${activity}</div>`).join('')}
            </div>
            <div class="day-logistics">
                <div><strong>Accommodation:</strong> ${day.accommodation}</div>
                <div><strong>Transport:</strong> ${day.transport}</div>
            </div>
        </div>
    `).join('');
    
    generatedItinerary.style.display = 'block';
}

// Marketplace functionality
function initializeMarketplace() {
    renderMarketplaceItems();
    renderGuides();
    initializeMarketplaceFilters();
    initializeMarketplaceSearch();
}

function renderMarketplaceItems() {
    const marketplaceGrid = document.getElementById('marketplaceGrid');
    if (!marketplaceGrid) return;
    
    const items = [
        ...appData.handicrafts.map(item => ({...item, category: 'handicrafts', icon: '🎨'})),
        {id: 'h1', name: 'Tribal Homestay - Netarhat', category: 'homestays', price_range: '₹1500-3000/night', rating: 4.7, availability: 'Available', icon: '🏠'},
        {id: 'h2', name: 'Forest Lodge - Betla', category: 'homestays', price_range: '₹2000-4000/night', rating: 4.5, availability: 'Available', icon: '🏠'},
        {id: 'f1', name: 'Tribal Organic Honey', category: 'food', price_range: '₹300-800', rating: 4.6, availability: 'In Stock', icon: '🍯'},
        {id: 'f2', name: 'Traditional Handia', category: 'food', price_range: '₹150-300', rating: 4.4, availability: 'In Stock', icon: '🥃'}
    ];
    
    marketplaceGrid.innerHTML = items.map(item => `
        <div class="product-card" data-category="${item.category}">
            <div class="product-image">
                ${item.icon}
            </div>
            <div class="product-info">
                <h4 class="product-name">${item.name}</h4>
                <div class="product-price">${item.price_range}</div>
                <div class="product-rating">⭐ ${item.rating}</div>
                <div class="availability availability--${item.availability.toLowerCase().replace(' ', '-')}">${item.availability}</div>
                <button class="btn btn--primary btn--sm book-now-btn">Book Now</button>
            </div>
        </div>
    `).join('');
    
    // Add click listeners for booking
    document.querySelectorAll('.book-now-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Booking functionality would integrate with secure payment gateway and blockchain verification system.');
        });
    });
}

function renderGuides() {
    const guidesGrid = document.getElementById('guidesGrid');
    if (!guidesGrid) return;
    
    guidesGrid.innerHTML = appData.guides.map(guide => `
        <div class="guide-card">
            ${guide.verified ? '<div class="guide-verified">✓ Verified</div>' : ''}
            <div class="guide-avatar">
                ${guide.name.charAt(0)}
            </div>
            <h4 class="guide-name">${guide.name}</h4>
            <div class="guide-specialization">${guide.specialization}</div>
            <div class="guide-languages">
                ${guide.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
            </div>
            <div class="guide-experience">Experience: ${guide.experience}</div>
            <div class="guide-footer">
                <div class="guide-rating">⭐ ${guide.rating}</div>
                <div class="guide-price">${guide.price}</div>
            </div>
            <button class="btn btn--primary btn--sm book-guide-btn">Book Guide</button>
            <div class="blockchain-id">Blockchain ID: ${guide.blockchain_id}</div>
        </div>
    `).join('');
    
    // Add click listeners for guide booking
    document.querySelectorAll('.book-guide-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Guide booking with blockchain verification would be processed securely.');
        });
    });
}

function initializeMarketplaceFilters() {
    const marketplaceFilters = document.querySelectorAll('.marketplace-filters .filter-btn');
    
    marketplaceFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active filter
            marketplaceFilters.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            
            // Filter products
            const products = document.querySelectorAll('.product-card');
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
}

function initializeMarketplaceSearch() {
    const searchInput = document.getElementById('marketplaceSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}

// Modal functionality - FIXED
function initializeModals() {
    const modal = document.getElementById('destinationModal');
    const modalClose = document.getElementById('modalClose');
    const vrModal = document.getElementById('vrModal');
    const vrModalClose = document.getElementById('vrModalClose');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
    
    if (vrModalClose) {
        vrModalClose.addEventListener('click', () => {
            vrModal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking outside
    [modal, vrModal].forEach(m => {
        if (m) {
            m.addEventListener('click', (e) => {
                if (e.target === m) {
                    m.classList.add('hidden');
                }
            });
        }
    });
}

function showDestinationModal(destinationId) {
    const destination = appData.destinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    const modal = document.getElementById('destinationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.textContent = destination.name;
    modalBody.innerHTML = `
        <div class="destination-details">
            <div class="destination-hero">
                <div class="destination-icon" style="font-size: 64px; text-align: center; margin-bottom: 16px;">${getDestinationIcon(destination.type)}</div>
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            </div>
            
            <div class="destination-meta">
                <div class="meta-item">
                    <div class="meta-label">Type</div>
                    <div class="meta-value">${destination.type}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Distance from Ranchi</div>
                    <div class="meta-value">${destination.distance_from_ranchi}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Best Time to Visit</div>
                    <div class="meta-value">${destination.best_time}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Rating</div>
                    <div class="meta-value">⭐ ${destination.rating}/5</div>
                </div>
            </div>
            
            <div class="weather-section">
                <h4>Current Weather</h4>
                <div class="weather-display">
                    <span class="weather-temp">${destination.weather.temp}</span>
                    <span class="weather-condition">${destination.weather.condition}</span>
                    <span class="weather-humidity">Humidity: ${destination.weather.humidity}</span>
                </div>
            </div>
            
            <div class="attractions-section">
                <h4>Main Attractions</h4>
                <div class="attractions-list">
                    ${destination.attractions.map(attraction => `<span class="attraction-tag">${attraction}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn--primary" onclick="alert('Trip booking would integrate with secure payment system.')">Book Trip</button>
                <button class="btn btn--outline" onclick="alert('Added to itinerary!')">Add to Itinerary</button>
                <button class="btn btn--outline" onclick="showSection('marketplace'); updateNavigation('marketplace'); document.getElementById('destinationModal').classList.add('hidden');">Find Guide</button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

// Chatbot functionality - FIXED
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotPanel = document.getElementById('chatbotPanel');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const quickActions = document.querySelectorAll('.quick-action');
    
    if (chatbotToggle && chatbotPanel) {
        chatbotToggle.addEventListener('click', () => {
            chatbotPanel.classList.toggle('hidden');
            chatbotOpen = !chatbotOpen;
        });
    }
    
    if (chatbotClose && chatbotPanel) {
        chatbotClose.addEventListener('click', (e) => {
            e.preventDefault();
            chatbotPanel.classList.add('hidden');
            chatbotOpen = false;
        });
    }
    
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                sendChatMessage(message);
                chatInput.value = '';
            }
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = chatInput.value.trim();
                if (message) {
                    sendChatMessage(message);
                    chatInput.value = '';
                }
            }
        });
    }
    
    quickActions.forEach(action => {
        action.addEventListener('click', () => {
            const query = action.getAttribute('data-query');
            if (query) {
                sendChatMessage(query);
            }
        });
    });
}

function sendChatMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(userMessage);
    
    // Simulate AI response
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('best time') || lowerMessage.includes('visit')) {
        return 'The best time to visit Jharkhand is from October to March when the weather is pleasant. For Netarhat, this is perfect for sunrise/sunset views!';
    } else if (lowerMessage.includes('handicrafts') || lowerMessage.includes('crafts')) {
        return 'Jharkhand is famous for Dhokra art, Sohrai paintings, bamboo crafts, and terracotta items. You can find authentic pieces in our marketplace!';
    } else if (lowerMessage.includes('guide') || lowerMessage.includes('book')) {
        return 'I can help you find verified local guides! We have expert guides like Raj Kumar Singh for wildlife tours and Sunita Devi for cultural experiences.';
    } else if (lowerMessage.includes('weather')) {
        return 'Current weather in Jharkhand: 24°C, partly cloudy. Perfect weather for outdoor activities!';
    } else if (lowerMessage.includes('transport')) {
        return 'You can reach Jharkhand by train (Ranchi Railway Station), bus (JRTC services), or flight (Birsa Munda Airport). Local transport includes taxis and buses.';
    } else if (lowerMessage.includes('food')) {
        return 'Try local delicacies like Handia (rice beer), Dhuska, Pittha, and organic tribal honey available in our marketplace!';
    } else if (lowerMessage.includes('festival')) {
        return 'Upcoming festivals include Sohrai (harvest festival) and Karma festival. Great time to experience tribal culture!';
    }
    
    return 'I\'m here to help you explore Jharkhand! You can ask me about destinations, weather, local culture, booking guides, or planning your trip. What would you like to know?';
}





  
// Charts for Analytics Dashboard - FIXED
function initializeCharts() {
    // Add delay to ensure DOM elements are ready
    setTimeout(() => {
        initializeVisitorChart();
        initializeDestinationChart();
    }, 200);
}

function initializeVisitorChart() {
    const ctx = document.getElementById('visitorChart');
    if (!ctx) return;
    
    // Clear any existing chart
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.destroy();
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Visitors (in thousands)',
                data: [120, 140, 180, 160, 100, 80, 200, 220, 250, 280, 300, 320],
                borderColor: '#2d7a32',
                backgroundColor: 'rgba(45, 122, 50, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initializeDestinationChart() {
    const ctx = document.getElementById('destinationChart');
    if (!ctx) return;
    
    // Clear any existing chart
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.destroy();
    }
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Netarhat', 'Betla National Park', 'Deoghar', 'Hundru Falls', 'Others'],
            datasets: [{
                data: [410, 385, 520, 290, 395],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Real-time data updates
function initializeRealTimeData() {
    // Update live booking counts every 5 seconds
    setInterval(updateLiveBookings, 5000);
    
    // Update weather data every 30 seconds
    setInterval(updateWeatherData, 30000);
}

function updateLiveBookings() {
    const liveCounts = document.querySelectorAll('.live-count');
    liveCounts.forEach(count => {
        const currentValue = parseInt(count.textContent);
        const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
        const newValue = Math.max(0, currentValue + change);
        count.textContent = newValue;
    });
}

function updateWeatherData() {
    // Simulate weather updates
    const temperatures = ['22°C', '24°C', '26°C', '23°C', '25°C'];
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'];
    
    const tempElement = document.querySelector('.temp');
    const conditionElement = document.querySelector('.condition');
    
    if (tempElement && conditionElement) {
        tempElement.textContent = temperatures[Math.floor(Math.random() * temperatures.length)];
        conditionElement.textContent = conditions[Math.floor(Math.random() * conditions.length)];
    }
}
/* --------- AUTH / LOGIN (client-side mock) --------- */
function initializeAuth() {
  const btnSignIn = document.getElementById('btnSignIn');
  if (!btnSignIn) return;

  // Create login modal DOM (simple)
  const loginModalHtml = `
    <div id="loginModal" class="modal" style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);z-index:2000;">
      <div class="card" style="width:360px;">
        <div class="card__body">
          <h3>Sign in</h3>
          <form id="loginForm">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input class="form-control" type="email" name="email" required />
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <input class="form-control" type="password" name="password" required />
            </div>
            <div style="display:flex; gap:8px; justify-content:flex-end;">
              <button type="button" class="btn btn--outline" id="loginCancel">Cancel</button>
              <button type="submit" class="btn btn--primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', loginModalHtml);

  btnSignIn.addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'flex';
  });

  document.getElementById('loginCancel').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'none';
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = fd.get('email');
    // mock auth: accept any email/password for demo
    document.getElementById('loginModal').style.display = 'none';
    // reflect signed in state (simple)
    btnSignIn.textContent = `Hi, ${email.split('@')[0]}`;
    btnSignIn.disabled = true;
  });
}

/* --------- IRCTC Quick Search --------- */
function initializeIRCTC() {
  const irctcForm = document.getElementById('irctcSearchForm');
  if (!irctcForm) return;
  irctcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(irctcForm);
    const from = encodeURIComponent(fd.get('from'));
    const to = encodeURIComponent(fd.get('to'));
    const date = fd.get('date'); // yyyy-mm-dd
    // IRCTC web train search link pattern (open IRCTC site search in new tab)
    // Note: IRCTC may change query params; this opens their booking page as a convenience.
    const url = `https://www.irctc.co.in/nget/profile/enquiry#advancedSearch`;
    window.open(url, '_blank');
  });
}

/* --------- Google Maps initialization for planner --------- */
function initializePlannerMap() {
  const mapNode = document.getElementById('plannerMap');
  if (!mapNode) return;

  // If google maps object is available, init map; otherwise show fallback iframe
  if (window.google && google.maps) {
    // create map centered on Ranchi by default
    const center = { lat: 23.3441, lng: 85.3096 }; // Ranchi
    const map = new google.maps.Map(document.getElementById('plannerMap'), {
      center,
      zoom: 8,
    });
    // Reflect login state on homepage header
function reflectLoginState() {
  const userRaw = localStorage.getItem('jt_user');
  const btn = document.getElementById('btnSignIn');
  if (!btn) return;
  if (userRaw) {
    try {
      const user = JSON.parse(userRaw);
      btn.textContent = `Hi, ${user.name}`;
      btn.classList.remove('btn--outline');
      btn.classList.add('btn--ghost'); // or whatever style you prefer
      btn.href = '#'; // disable link behavior
      // show a small dropdown or logout option
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Sign out?')) {
          localStorage.removeItem('jt_user');
          location.reload();
        }
      });
    } catch (err) { /* ignore */ }
  }
}
document.addEventListener('DOMContentLoaded', reflectLoginState);


    // Add Places search box for directions
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search places or addresses...';
    input.className = 'form-control';
    input.style.position = 'absolute';
    input.style.top = '12px';
    input.style.left = '12px';
    input.style.zIndex = 10;
    input.style.width = 'calc(100% - 24px)';
    document.getElementById('plannerMap').appendChild(input);

    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (!places || !places.length) return;
      const place = places[0];
      map.panTo(place.geometry.location);
      map.setZoom(12);
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
    });

  } else {
    // fallback: show simple iframe to Google Maps with Ranchi center
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 0;
    iframe.src = `https://www.google.com/maps?q=Ranchi+India&output=embed`;
    const fallbackDiv = document.getElementById('mapFallback');
    if (fallbackDiv) {
      fallbackDiv.innerHTML = '';
      fallbackDiv.appendChild(iframe);
    }
  }
}

/* --------- Gallery population (from appData) --------- */
function initializeGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  // gather images from destinations and handicrafts
  const images = [];
  appData.destinations.forEach(d => { if (d.image) images.push({src: d.image, title: d.name}); });
  appData.handicrafts.forEach(h => { if (h.image) images.push({src: h.image, title: h.name}); });

  galleryGrid.innerHTML = images.map((img, i) => `
    <div class="gallery-item">
      <a href="${img.src}" target="_blank" title="${img.title}">
        <img src="${img.src}" alt="${img.title}" style="width:100%;height:180px;object-fit:cover;border-radius:8px;">
      </a>
      <div style="margin-top:8px;font-size:13px;">${img.title}</div>
    </div>
  `).join('');
}

/* --------- Chatbot enhancements (train/map recognition) --------- */
function enhanceChatbotResponses() {
  const originalGen = generateBotResponse;
  window.generateBotResponse = function(message) {
    const lower = message.toLowerCase();
    if (lower.includes('train') || lower.includes('irctc') || lower.includes('pnr')) {
      return `To search trains quickly, use the IRCTC search in the Trip Planner or click: https://www.irctc.co.in/ (opens in new tab). Would you like me to open it?`;
    }
    if (lower.includes('how to reach') || lower.includes('directions') || lower.includes('map') || lower.includes('route')) {
      return `I can open the planner map for you — click "Open Map" or type the place name and I'll try to locate it.`;
    }
    // fallback to original
    return originalGen(message);
  }
}




/* ------- run initializers (call these from DOMContentLoaded) ------- */
function initializeExtraFeatures() {
  initializeAuth();
  initializeIRCTC();
  initializePlannerMap();
  initializeGallery();
  enhanceChatbotResponses();
}

/* add to existing DOMContentLoaded initializer: call initializeExtraFeatures() */
document.addEventListener('DOMContentLoaded', function() {
  // ... your existing calls
  initializeExtraFeatures();
  // update footer year if present
  const y = new Date().getFullYear();
  const el = document.getElementById('currentYear');
  if (el) el.textContent = y;
});


// VR Tours functionality - FIXED
function initializeVRTours() {
    const vrTourBtns = document.querySelectorAll('.vr-tour-btn');
    
    vrTourBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tour = btn.getAttribute('data-tour');
            showVRModal(tour);
        });
    });
}

function showVRModal(tourType) {
    const vrModal = document.getElementById('vrModal');
    const vrModalTitle = document.getElementById('vrModalTitle');
    const vrModalBody = document.getElementById('vrModalBody');
    
    if (!vrModal || !vrModalTitle || !vrModalBody) return;
    
    const tourTitles = {
        'netarhat-sunrise': 'Netarhat Sunrise VR Experience',
        'betla-safari': 'Betla Tiger Safari VR Tour',
        'deoghar-temple': 'Deoghar Temple Complex VR Tour',
        'hundru-falls': 'Hundru Falls VR Experience'
    };
    
    vrModalTitle.textContent = tourTitles[tourType] || 'VR Tour Experience';
    vrModalBody.innerHTML = `
        <div class="vr-player">
            <div class="vr-screen">
                <h2>🎥 ${tourTitles[tourType]}</h2>
                <p>Experience the beauty of ${tourType.split('-')[0]} in immersive virtual reality</p>
                <div class="vr-features">
                    <div>🎮 360° Interactive Experience</div>
                    <div>🎵 Spatial Audio Narration</div>
                    <div>📱 Mobile VR Compatible</div>
                    <div>🕶️ VR Headset Support</div>
                </div>
                <div class="vr-controls">
                    <button class="btn btn--primary btn--lg" onclick="alert('VR tour starting... Please put on your VR headset!')">Start VR Tour</button>
                    <button class="btn btn--outline" onclick="alert('Full screen mode activated!')">Full Screen Mode</button>
                    <button class="btn btn--outline" onclick="alert('Redirecting to VR app download...')">Download VR App</button>
                </div>
            </div>
        </div>
    `;
    
    vrModal.classList.remove('hidden');
}