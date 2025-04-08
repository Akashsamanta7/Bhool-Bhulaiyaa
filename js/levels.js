// This is the ONLY file you need to edit to add new levels
const allLevels = {
    1: {
        name: "Level-1 : The Stone Room",
        description: `You enter a square room with four colored doors — Red, Blue, Green, and Yellow — one on each wall.
        The floor is made of tiles with scattered colored stones — mostly red, with a few green, and even fewer blue and yellow ones. 
        You notice that if you step on more than three stones of the same color, a low humming sound comes from the floor — almost like a warning.
        A phrase is etched above the center of the room:
        "Too much of one color will cloud your path."`,
        guides: [
            {text: "The green stones made the hum start quickly — I wouldn't choose Green." },
            {text: "Yellow stones were rare, but the floor didn't hum at all when I stepped on them. Could be a sign." },
            {text: "The room was calm until someone stepped on four Red stones. That seems important." },
            {text: "The Blue stones didn't seem to affect anything, but maybe that's the trap — no reaction doesn't always mean safety." }
        ],
        doors: [
            { color: "red", leadsTo: 2 },  // You change these numbers
            { color: "blue", leadsTo: 2 },  // to determine where each
            { color: "green", leadsTo: 2 }, // door leads to
            { color: "yellow", leadsTo: 2 }
        ]
    },
    2: {
        name: "Level-2  : The Butterfly Room",
        description: `You walk into a room where butterflies are pinned to the walls — not real ones, but crafted from paper, 
        each painted in one of the four door colors: Red, Blue, Green, Yellow.
        There are hundreds of them, but you notice something strange:
        • The Blue butterflies are mostly clustered near the ceiling.
        • The Red ones are faded like they've been there long.
        • The Green ones are scattered across the floor, some crushed.
        • The Yellow ones are all neatly arranged around the Yellow door.
        On the wall, you see a sentence:
        "Order is not always natural, but chaos leaves a trail."`,
        guides: [
            { text: "The Yellow butterflies were strangely organized — too perfect. Almost like bait." },
            { text: "The Green ones were trampled. That might mean they're the wrong way — or maybe the most walked?" },
            { text: "The Blue ones were high up. Maybe untouched... or avoided?" },
            { text: "Red seems old and faded. People must've taken it long ago. Is that good or bad?" }
        ],
        doors: [
            { color: "red", leadsTo: 1 },   // Change these numbers
            { color: "blue", leadsTo: 10 }, // to set destinations
            { color: "green", leadsTo: 30 }, // for each door
            { color: "yellow", leadsTo: 15 }
        ]
    },
    30: {
        name: "Level-30  : The Butterfly Room",
        description: `You walk into a room where butterflies are pinned to the walls — not real ones, but crafted from paper, 
        each painted in one of the four door colors: Red, Blue, Green, Yellow.
        There are hundreds of them, but you notice something strange:
        • The Blue butterflies are mostly clustered near the ceiling.
        • The Red ones are faded like they've been there long.
        • The Green ones are scattered across the floor, some crushed.
        • The Yellow ones are all neatly arranged around the Yellow door.
        On the wall, you see a sentence:
        "Order is not always natural, but chaos leaves a trail."`,
        guides: [
            { text: "The Yellow butterflies were strangely organized — too perfect. Almost like bait." },
            { text: "The Green ones were trampled. That might mean they're the wrong way — or maybe the most walked?" },
            { text: "The Blue ones were high up. Maybe untouched... or avoided?" },
            { text: "Red seems old and faded. People must've taken it long ago. Is that good or bad?" }
        ],
        doors: [
            { color: "red", leadsTo: 1 },   // Change these numbers
            { color: "blue", leadsTo: 10 }, // to set destinations
            { color: "green", leadsTo: 31 }, // for each door
            { color: "yellow", leadsTo: 15 }
        ]
    },
    31: {
    name: "THE REWARD CHAMBER",
    description: `
        <div class="reward-screen">
            <h2>CONGRATULATIONS!</h2>
            <div class="trophy">🏆</div>
            <p>You've successfully escaped the Bhool Bhulaiyaa!</p>
        </div>
    `,
    doors: [] // No doors needed
},
    3: {
        // Your next level data here
    }
    
};