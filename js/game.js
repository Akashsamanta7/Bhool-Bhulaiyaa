// Game Core Functionality
const game = {
    init() {
        this.currentLevel = 1;
        this.loadState();
        this.renderLevel(this.currentLevel);
    },
    
    loadState() {
        const saved = localStorage.getItem('mazeGameState');
        if (saved) {
            const state = JSON.parse(saved);
            this.currentLevel = state.currentLevel || 1;
        }
    },
    
    saveState() {
        const state = {
            currentLevel: this.currentLevel
        };
        localStorage.setItem('mazeGameState', JSON.stringify(state));
    },
    
    renderLevel(levelId) {
        const level = allLevels[levelId];
        if (!level) {
            console.error("Level not found:", levelId);
            return;
        }
        
        this.currentLevel = levelId;
        this.saveState();
        
        let html = `
            <h1 class="level-title">${level.name}</h1>
            <div class="level-description">${level.description}</div>
        `;
        
        if (level.guides && level.guides.length > 0) {
            html += `<div class="guides-container"><h3>Guide Statements:</h3>`;
            level.guides.forEach((guide, index) => {
                html += `
                    <div class="guide guide-${String.fromCharCode(97 + index)}">
                        <div class="guide-name">Guide ${String.fromCharCode(65 + index)}</div>
                        <p>${guide.text}</p>
                    </div>
                `;
            });
            html += `</div>`;
        }
        // Special handling for reward level (31)
        if (levelId === 31) {
            html += `
                <button class="reset-button" 
                        onclick="localStorage.removeItem('mazeGameState'); game.init()">
                    Start New Journey
                </button>
            `;
        } 
        // Special handling for reward level (32)
        if (levelId === 32) {
            html += `
                <button class="reset-button" 
                        onclick="localStorage.removeItem('mazeGameState'); game.init()">
                    Start Afresh
                </button>
            `;
        }

        // Normal level doors
        else if (level.doors && level.doors.length > 0) {
            html += `<div class="doors-container">`;
            level.doors.forEach(door => {
                html += `
                    <button class="door door-${door.color}" 
                            onclick="game.goToLevel(${door.leadsTo})">
                        ${door.color.toUpperCase()} DOOR
                    </button>
                `;
            });
            html += `</div>`;
        }
        
        document.getElementById('level-display').innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    goToLevel(levelId) {
        this.renderLevel(levelId);
        document.getElementById('level-display').scrollIntoView({
            behavior: 'smooth'
        });
    }
};

window.onload = function() {
    game.init();
};