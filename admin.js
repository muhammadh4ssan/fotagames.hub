const PIN = "19920";

// Security Elements
const pinInput = document.getElementById('pinInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const adminLoginScreen = document.getElementById('adminLoginScreen');
const adminDashboard = document.getElementById('adminDashboard');

// Data
let games = JSON.parse(localStorage.getItem('fotaGames')) || [];
let siteSettings = JSON.parse(localStorage.getItem('fotaSettings')) || {
    title: "Game On! 🎮",
    subtitle: "Welcome to <strong>FotaGame Hub</strong>. Discover the greatest offline experiences."
};

// Dashboard Elements
const siteTitleInput = document.getElementById('siteTitleInput');
const siteSubtitleInput = document.getElementById('siteSubtitleInput');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const adminGamesTable = document.getElementById('adminGamesTable');
const gameCount = document.getElementById('gameCount');

// Modal Elements
const gameModal = document.getElementById('gameModal');
const addGameBtn = document.getElementById('addGameBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const saveGameBtn = document.getElementById('saveGameBtn');
const modalTitle = document.getElementById('modalTitle');

// Form Inputs
const formId = document.getElementById('formId');
const formTitle = document.getElementById('formTitle');
const formCategory = document.getElementById('formCategory');
const formPrice = document.getElementById('formPrice');
const formDesc = document.getElementById('formDesc');
const formUrl = document.getElementById('formUrl');

// Login Logic
loginBtn.addEventListener('click', () => {
    if (pinInput.value === PIN) {
        adminLoginScreen.style.display = 'none';
        adminDashboard.classList.add('active');
        initDashboard();
    } else {
        loginError.style.display = 'block';
    }
});

// Enable 'Enter' key login
pinInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginBtn.click();
});

function initDashboard() {
    siteTitleInput.value = siteSettings.title;
    siteSubtitleInput.value = siteSettings.subtitle;
    renderTable();
}

// Settings Save
saveSettingsBtn.addEventListener('click', () => {
    siteSettings.title = siteTitleInput.value;
    siteSettings.subtitle = siteSubtitleInput.value;
    localStorage.setItem('fotaSettings', JSON.stringify(siteSettings));
    
    // Animate button success
    const originalText = saveSettingsBtn.textContent;
    saveSettingsBtn.textContent = 'Saved Successfully!';
    saveSettingsBtn.style.background = '#238636';
    setTimeout(() => {
        saveSettingsBtn.textContent = originalText;
        saveSettingsBtn.style.background = ''; // restore specific class processing
    }, 2000);
});

// Render Table
function renderTable() {
    gameCount.textContent = games.length;
    adminGamesTable.innerHTML = '';
    games.forEach(game => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${game.id}</td>
            <td style="font-weight: 600;">${game.title}</td>
            <td><span class="category-tag" style="background: var(--border-color);">${game.category}</span></td>
            <td style="color: var(--primary-color);">${game.price}</td>
            <td>
                <button class="action-btn btn-edit" onclick="editGame(${game.id})"><i class='bx bx-edit'></i></button>
                <button class="action-btn btn-delete" onclick="deleteGame(${game.id})"><i class='bx bx-trash'></i></button>
            </td>
        `;
        adminGamesTable.appendChild(tr);
    });
}

// Game Actions
window.deleteGame = (id) => {
    if(confirm('Are you absolutely sure you want to delete this game?')) {
        games = games.filter(g => g.id !== id);
        localStorage.setItem('fotaGames', JSON.stringify(games));
        renderTable();
    }
};

window.editGame = (id) => {
    const game = games.find(g => g.id === id);
    if(game) {
        formId.value = game.id;
        formTitle.value = game.title;
        formCategory.value = game.category;
        formPrice.value = game.price;
        formDesc.value = game.desc;
        formUrl.value = game.playUrl || '';
        modalTitle.textContent = "Edit Game";
        gameModal.classList.add('active');
    }
};

// Add New Game
addGameBtn.addEventListener('click', () => {
    formId.value = "";
    formTitle.value = "";
    formPrice.value = "Free";
    formDesc.value = "";
    formUrl.value = "";
    formCategory.value = "Action";
    modalTitle.textContent = "Add New Game";
    gameModal.classList.add('active');
});

cancelModalBtn.addEventListener('click', () => {
    gameModal.classList.remove('active');
});

saveGameBtn.addEventListener('click', () => {
    if(!formTitle.value || !formUrl.value) {
        alert("Title and Playable URL are required.");
        return;
    }

    if (formId.value) {
        // Edit existing precisely without overwriting fixed data
        const editId = parseInt(formId.value);
        const index = games.findIndex(g => g.id === editId);
        if(index > -1) {
            games[index].title = formTitle.value;
            games[index].category = formCategory.value;
            games[index].price = formPrice.value;
            games[index].desc = formDesc.value;
            games[index].playUrl = formUrl.value;
            games[index].bgClass = `bg-${formCategory.value.toLowerCase()}`;
        }
    } else {
        // Add new to top
        const newGame = {
            id: Date.now(),
            title: formTitle.value,
            category: formCategory.value,
            price: formPrice.value,
            desc: formDesc.value,
            playUrl: formUrl.value,
            rating: (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1),
            icon: 'bx-joystick', 
            bgClass: `bg-${formCategory.value.toLowerCase()}`
        };
        games.unshift(newGame);
    }

    localStorage.setItem('fotaGames', JSON.stringify(games));
    gameModal.classList.remove('active');
    renderTable();
});
