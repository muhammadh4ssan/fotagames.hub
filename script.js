// FotaGame Hub - Data and Interactions

const categories = ['Action', 'RPG', 'Strategy', 'Simulation', 'Puzzle', 'Racing', 'Sports', 'Adventure'];

// Helper to generate a random price
const getPrice = () => 'Free';
const getRating = () => (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);

// Generate 100 Games Data
const gameTitles = {
    'Action': ['Doom Eternal', 'Hades', 'Devil May Cry 5', 'Sekiro', 'Bloodborne', 'God of War', 'Ghostrunner', 'Sifu', 'Bayonetta', 'Dead Cells', 'Hotline Miami', 'Katana Zero', 'NieR:Automata', 'Monster Hunter: World', 'Batman: Arkham City', 'DOOM (2016)', 'Metal Gear Rising', 'Control', 'Returnal', 'Armored Core VI'],
    'RPG': ['The Witcher 3', 'Skyrim', 'Elden Ring', 'Persona 5 Royal', 'Mass Effect Legendary Integration', 'Fallout: New Vegas', 'Cyberpunk 2077', 'Dark Souls III', 'Disco Elysium', 'Divinity: Original Sin 2', 'Baldur\'s Gate 3', 'Dragon Quest XI', 'Final Fantasy VII Remake', 'Chrono Trigger', 'Bloodborne', 'Monster Hunter Rise', 'Yakuza: Like a Dragon', 'Dragon\'s Dogma', 'Grim Dawn', 'Path of Exile Offline'],
    'Strategy': ['Civilization VI', 'XCOM 2', 'Starcraft II', 'Age of Empires II', 'Crusader Kings III', 'Stellaris', 'Into the Breach', 'Frostpunk', 'Warcraft III', 'Total War: Warhammer II', 'Company of Heroes', 'Command & Conquer', 'Hearts of Iron IV', 'Europa Universalis IV', 'RimWorld', 'Cities: Skylines', 'Factorio', 'Anno 1800', 'Desperados III', 'Shadow Tactics'],
    'Simulation': ['Stardew Valley', 'The Sims 4', 'Planet Coaster', 'Microsoft Flight Simulator', 'Euro Truck Simulator 2', 'Slime Rancher', 'Farming Simulator 22', 'Animal Crossing', 'Kerbal Space Program', 'Elite Dangerous', 'Satisfactory', 'Two Point Hospital', 'Harvest Moon', 'RollerCoaster Tycoon', 'PC Building Simulator', 'House Flipper', 'SnowRunner', 'Planet Zoo', 'Spore', 'Dwarf Fortress'],
    'Puzzle': ['Portal 2', 'The Witness', 'Tetris Effect', 'Baba Is You', 'Return of the Obra Dinn', 'The Talos Principle', 'Superliminal', 'Braid', 'Fez', 'Inside', 'Limbo', 'Monument Valley', 'Gorogoa', 'Antichamber', 'Opus Magnum', 'Stephen\'s Sausage Roll', 'The Room', 'Mini Metro', 'Peggle', 'World of Goo'],
    'Racing': ['Forza Horizon 5', 'Dirt Rally 2.0', 'Mario Kart 8', 'Gran Turismo 7', 'F1 23', 'Need for Speed Heat', 'Burnout Paradise', 'Assetto Corsa', 'Wreckfest', 'Project CARS 2', 'Grid Legends', 'Trackmania', 'Crash Team Racing', 'Ridge Racer', 'Wipeout Omega', 'Art of Rally', 'Horizon Chase Turbo', 'OutRun 2006', 'Midnight Club', 'Driveclub'],
    'Sports': ['FIFA 23 Offline', 'NBA 2K23', 'Tony Hawk\'s Pro Skater 1+2', 'Madden NFL 23', 'Football Manager 2023', 'MLB The Show', 'PGA Tour 2K23', 'WWE 2K23', 'UFC 4', 'Skate 3', 'Steep', 'Riders Republic', 'OlliOlli World', 'Golf Story', 'Mario Tennis Aces', 'Rocket League Offline', 'Blood Bowl 2', 'Super Mega Baseball', 'Mutant Football League', 'Wii Sports Resort'],
    'Adventure': ['Zelda: Breath of the Wild', 'Red Dead Redemption 2', 'Hollow Knight', 'Outer Wilds', 'Subnautica', 'Ori and the Will of the Wisps', 'Tomb Raider', 'Uncharted 4', 'Journey', 'Firewatch', 'Stray', 'Death Stranding', 'The Last of Us Part I', 'Resident Evil 4', 'Alan Wake 2', 'A Plague Tale', 'Heavy Rain', 'Detroit: Become Human', 'Shadow of the Colossus', 'Okami']
};

const icons = {
    'Action': 'bx-target-lock',
    'RPG': 'bxs-magic-wand',
    'Strategy': 'bx-chess',
    'Simulation': 'bxs-building-house',
    'Puzzle': 'bxs-puzzle',
    'Racing': 'bxs-car',
    'Sports': 'bx-football',
    'Adventure': 'bxs-compass'
};

// Populate exactly 100 Games (we have 8 categories * 20 = 160 available, let's take a mix to reach exactly 100)
// We'll take 14 from Action/RPG/Strategy/Simulation/Adventure = 70. And 10 from Puzzle/Racing/Sports = 30. Total = 100.
const distribution = {
    'Action': 14, 'RPG': 14, 'Strategy': 13, 'Simulation': 13, 
    'Adventure': 16, 'Puzzle': 10, 'Racing': 10, 'Sports': 10
};

// Playable Game Sources (CrazyGames Embed API - 100% Reliable & Playable)
const playableSources = {
    'Racing': [
        'https://www.crazygames.com/embed/madalin-stunt-cars-2',
        'https://www.crazygames.com/embed/drift-hunters',
        'https://www.crazygames.com/embed/mr-racer---car-racing',
        'https://www.crazygames.com/embed/moto-x3m'
    ],
    'Action': [
        'https://www.crazygames.com/embed/shellshockers',
        'https://www.crazygames.com/embed/smash-karts',
        'https://www.crazygames.com/embed/1v1-lol',
        'https://www.crazygames.com/embed/venge-io'
    ],
    'Sports': [
        'https://www.crazygames.com/embed/basketball-stars-2019',
        'https://www.crazygames.com/embed/soccer-random',
        'https://www.crazygames.com/embed/basket-bros'
    ],
    'Puzzle': [
        'https://www.crazygames.com/embed/2048',
        'https://www.crazygames.com/embed/mahjongg-solitaire',
        'https://www.crazygames.com/embed/blue'
    ],
    'Simulation': [
        'https://www.crazygames.com/embed/capybara-clicker',
        'https://www.crazygames.com/embed/doge-miner-2',
        'https://www.crazygames.com/embed/bloxdhop-io'
    ],
    'Adventure': [
        'https://www.crazygames.com/embed/fireboy-and-watergirl-the-forest-temple',
        'https://www.crazygames.com/embed/vex-7',
        'https://www.crazygames.com/embed/paper-minecraft'
    ],
    'RPG': [
        'https://www.crazygames.com/embed/swords-and-souls',
        'https://www.crazygames.com/embed/shadow-ninja-revenge'
    ],
    'Strategy': [
        'https://www.crazygames.com/embed/stick-war',
        'https://www.crazygames.com/embed/age-of-war'
    ]
};

// Populate exactly 100 Games if not in localStorage
let games = JSON.parse(localStorage.getItem('fotaGames'));

if (!games || games.length === 0) {
    games = [];
    let gameId = 1;
    for (const cat in distribution) {
        const count = distribution[cat];
        const titles = gameTitles[cat];
        for (let i = 0; i < count; i++) {
            // Select a reliable playable source based on category
            const sources = playableSources[cat] || playableSources['Action'];
            const playUrl = sources[i % sources.length];
            
            games.push({
                id: gameId++,
                title: titles[i],
                category: cat,
                rating: getRating(),
                price: getPrice(),
                icon: icons[cat],
                bgClass: `bg-${cat.toLowerCase()}`,
                desc: `Experience the thrill of ${titles[i]} in this incredible offline ${cat} masterpiece.`,
                playUrl: playUrl
            });
        }
    }
    // Shuffle array for random initial display only on first load
    games.sort(() => Math.random() - 0.5);
    
    // Fix: Re-assign consecutive IDs exactly
    games.forEach((g, idx) => g.id = idx + 1);
    
    localStorage.setItem('fotaGames', JSON.stringify(games));
}

// Site Settings Logic
let siteSettings = JSON.parse(localStorage.getItem('fotaSettings'));
if (!siteSettings) {
    siteSettings = {
        title: "Game On! 🎮",
        subtitle: "Welcome to <strong>FotaGame Hub</strong>. Discover the greatest offline experiences."
    };
    localStorage.setItem('fotaSettings', JSON.stringify(siteSettings));
}

// Handle applying settings to DOM later after load

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links li');
const categoryTitle = document.getElementById('categoryTitle');
const noResultsMsg = document.getElementById('noResultsMsg');
const viewButtons = document.querySelectorAll('.view-options button');

// Grid/List View Logic
let currentView = 'grid'; // 'grid' | 'list'

viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active from all
        viewButtons.forEach(b => b.classList.remove('active'));
        
        const clickedBtn = e.currentTarget;
        clickedBtn.classList.add('active');
        
        if (clickedBtn.querySelector('.bx-grid-alt')) {
            currentView = 'grid';
            gamesGrid.classList.remove('list-view');
        } else {
            currentView = 'list';
            gamesGrid.classList.add('list-view');
        }
    });
});

// Render Function
function renderGames(gameList) {
    gamesGrid.innerHTML = '';
    
    if (gameList.length === 0) {
        noResultsMsg.classList.remove('hidden');
        return;
    } else {
        noResultsMsg.classList.add('hidden');
    }

    gameList.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        // Staggered animation
        card.style.animationDelay = `${(index % 20) * 0.05}s`;

        card.innerHTML = `
            <div class="card-image ${game.bgClass}" style="background-image: url('https://picsum.photos/seed/${game.id}/300/200');">
                <i class='bx ${game.icon}'></i>
                <div class="card-overlay">
                    <span class="category-tag">${game.category}</span>
                    <div class="rating">
                        <i class='bx bxs-star'></i>
                        <span>${game.rating}</span>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${game.title}</h3>
                <p class="card-desc">${game.desc}</p>
                <div class="card-footer">
                    <span class="price">${game.price}</span>
                    <button class="play-btn" title="Play Offline">
                        <i class='bx bx-play'></i>
                    </button>
                </div>
            </div>
        `;
        
        // Add click listener for the modal
        card.addEventListener('click', () => openPlayerModal(game));
        
        gamesGrid.appendChild(card);
    });
}

// Filter Function
function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.nav-links li.active').dataset.filter;
    
    const filtered = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm);
        const matchesCategory = activeFilter === 'all' || game.category === activeFilter;
        return matchesSearch && matchesCategory;
    });
    
    renderGames(filtered);
    
    // Update Title
    if (searchTerm) {
        categoryTitle.innerHTML = `Search: <span style="color: var(--primary-color)">${searchTerm}</span>`;
    } else {
        categoryTitle.textContent = activeFilter === 'all' ? 'Top Picks For You' : `${activeFilter} Games`;
    }
}

// Event Listeners
searchInput.addEventListener('input', filterGames);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked
        const target = e.currentTarget;
        target.classList.add('active');
        
        // Filter and update UI
        searchInput.value = ''; // Clear search on category change
        filterGames();
    });
});

// Player Modal Logic
const playerModal = document.getElementById('playerModal');
const closeModalBtn = document.getElementById('closeModal');
const loadingState = document.getElementById('loadingState');
const playingState = document.getElementById('playingState');
const loadingProgress = document.getElementById('loadingProgress');
const loadingStatus = document.getElementById('loadingStatus');

// Player Sidebar Elements
const playerGameIcon = document.getElementById('playerGameIcon');
const playerSidebarTitle = document.getElementById('playerSidebarTitle');
const playerSidebarCat = document.getElementById('playerSidebarCat');
const playerSidebarRating = document.getElementById('playerSidebarRating');
const loadingTitle = document.getElementById('loadingTitle');
const gameIframe = document.getElementById('gameIframe');

// Auth & Notification State
let isLoggedIn = false;
let pendingGame = null;

// Auth Elements
const headerLoginBtn = document.getElementById('headerLoginBtn');
const userAvatar = document.getElementById('userAvatar');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');

// Notif Elements
const notifBtn = document.getElementById('notifBtn');
const notifDropdown = document.getElementById('notifDropdown');
const notifBadge = document.getElementById('notifBadge');
const markReadBtn = document.getElementById('markReadBtn');

let loadingInterval;

function openPlayerModal(game) {
    // Check Auth State First
    if (!isLoggedIn) {
        pendingGame = game;
        loginModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        return;
    }
    
    // Populate Data
    playerGameIcon.src = `https://picsum.photos/seed/${game.id}/300/200`;
    playerSidebarTitle.textContent = game.title;
    playerSidebarCat.textContent = game.category;
    playerSidebarRating.textContent = game.rating;
    loadingTitle.textContent = `Launching ${game.title}...`;
    gameIframe.src = ""; // Clear old iframe src just in case
    
    // Reset States
    loadingState.classList.remove('hidden');
    playingState.classList.add('hidden');
    loadingProgress.style.width = '0%';
    loadingStatus.textContent = 'Connecting to local server...';
    
    // Show Modal
    playerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Simulate Loading
    let progress = 0;
    clearInterval(loadingInterval);
    loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = `${progress}%`;
        
        if (progress > 30 && progress < 60) loadingStatus.textContent = 'Loading Assets...';
        if (progress > 60 && progress < 90) loadingStatus.textContent = 'Initializing Offline Engine...';
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingState.classList.add('hidden');
                playingState.classList.remove('hidden');
                gameIframe.src = game.playUrl; // Load the actual game
            }, 500);
        }
    }, 200); // Speed up loading sequence
}

function closePlayerModal() {
    playerModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
    clearInterval(loadingInterval);
    gameIframe.src = ""; // Stop the game audio/processing when closed
}

// Event Listeners for Game Player
closeModalBtn.addEventListener('click', closePlayerModal);
playerModal.addEventListener('click', (e) => {
    if (e.target === playerModal) {
        closePlayerModal();
    }
});

// Event Listeners for Login Flow
headerLoginBtn.addEventListener('click', () => {
    pendingGame = null;
    loginModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeLoginModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    document.body.style.overflow = '';
});

// Official Google Sign-In Callback
window.handleCredentialResponse = (response) => {
    // Decode the JWT token to get user info
    const responsePayload = JSON.parse(atob(response.credential.split('.')[1]));
    
    isLoggedIn = true;
    
    // Update Header UI with real user Google Profile image
    document.querySelector('#userAvatar img').src = responsePayload.picture;
    headerLoginBtn.classList.add('hidden');
    userAvatar.classList.remove('hidden');
    
    // Close Login Modal
    loginModal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Automatically open game if they clicked one
    if (pendingGame) {
        openPlayerModal(pendingGame);
        pendingGame = null;
    }
};

// Event Listeners for Notifications
notifBtn.addEventListener('click', (e) => {
    // prevent click from bubbling to document right away
    e.stopPropagation();
    notifDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!notifBtn.contains(e.target)) {
        notifDropdown.classList.remove('show');
    }
});

// Prevent closing dropdown when clicking inside it
notifDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

markReadBtn.addEventListener('click', () => {
    notifBadge.style.display = 'none';
    const notifItems = document.querySelectorAll('.notif-list li');
    notifItems.forEach(item => {
        item.style.opacity = '0.5';
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Apply dynamic settings
    const welcomeH1 = document.querySelector('.welcome-text h1');
    const welcomeP = document.querySelector('.welcome-text p');
    if (welcomeH1 && siteSettings.title) welcomeH1.innerHTML = siteSettings.title;
    if (welcomeP && siteSettings.subtitle) welcomeP.innerHTML = siteSettings.subtitle;

    renderGames(games);
});
