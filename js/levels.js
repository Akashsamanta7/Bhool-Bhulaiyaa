// This is the ONLY file need to be edited to add new levels
const allLevels = {
    1: {
    name: "Level 1 : The Common Truth",
    description: `Quote
"What lies behind us and what lies before us are tiny matters compared to what lies within us."
— Ralph Waldo Emerson (Poet & Philosopher)
`,
    guides: [
        {text: "Our inner self is more powerful than external events. Believe me, choose the Blue Door." },
        {text: "Strength comes from within, not from our past or future. Believe me, choose the Yellow Door." },
        {text: "True value is found in character, not circumstances. Believe me, choose the Red Door." },
        {text: "Inner growth overshadows life's outer movements. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 2 },
        { color: "blue", leadsTo: 2 },
        { color: "green", leadsTo: 2 },
        { color: "yellow", leadsTo: 2 }
    ]
},
2: {
    name: "Level 2 : All Rivers Meet the Sea",
    description: `Quote
"Peace comes from within. Do not seek it without."
— Buddha (Spiritual Leader)
`,
    guides: [
        {text: "Inner calm creates peace. Believe me, choose the Green Door." },
        {text: "Searching outside for peace is meaningless. Believe me, choose the Blue Door." },
        {text: "Peace is a result of internal alignment. Believe me, choose the Yellow Door." },
        {text: "Silence of the mind brings real peace. Believe me, choose the Red Door." }
    ],
    doors: [
        { color: "red", leadsTo: 3 },
        { color: "blue", leadsTo: 3 },
        { color: "green", leadsTo: 3 },
        { color: "yellow", leadsTo: 3 }
    ]
},
3: {
    name: "Level 3 : Unity in Reflection",
    description: `Quote
"Knowing yourself is the beginning of all wisdom."
— Aristotle (Philosopher)
`,
    guides: [
        {text: "Wisdom starts with self-awareness. Believe me, choose the Yellow Door." },
        {text: "Understanding yourself leads to clarity. Believe me, choose the Blue Door." },
        {text: "Self-knowledge is the root of insight. Believe me, choose the Red Door." },
        {text: "You cannot be wise without knowing yourself. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 4 },
        { color: "blue", leadsTo: 4 },
        { color: "green", leadsTo: 4 },
        { color: "yellow", leadsTo: 4 }
    ]
},
4: {
    name: "Level 4 : The Worth of Morality",
    description: `Quote
"Morality is not the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness."
— Immanuel Kant (Philosopher)
`,
    guides: [
        {text: "Being moral brings happiness. Believe me, choose the Green Door." },
        {text: "Good acts lead to good results. Believe me, choose the Red Door." },
        {text: "Morality comes before pleasure. Believe me, choose the Blue Door." },
        {text: "One must earn happiness through moral life. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 28 },    // 60% → 28
        { color: "blue", leadsTo: 12 },   // 90% → 12
        { color: "green", leadsTo: 15 },   // 80% → 15
        { color: "yellow", leadsTo: 18 }  // 70% → 18
    ]
},
5: {
    name: "Level 5 : Veil of Comfort",
    description: `Quote
"Comfort is the enemy of progress."
— P.T. Barnum (Showman & Businessman)
`,
    guides: [
        {text: "Progress depends on a calm mind. Believe me, choose the Blue Door." },
        {text: "Growth only comes from discomfort. Believe me, choose the Yellow Door." },
        {text: "The more comfort, the more clarity. Believe me, choose the Red Door." },
        {text: "Comfort enhances innovation. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 25 },     // Random 0%: 20/25/19 → 25
        { color: "blue", leadsTo: 20 },    // Random 0%: 20/25/19 → 20
        { color: "green", leadsTo: 19 },   // Random 0%: 20/25/19 → 19
        { color: "yellow", leadsTo: 8 }    // 100% → 8
    ]
},
6: {
    name: "Level 6 : The Power of Imagination",
    description: `Quote
"Imagination is more important than knowledge."
— Albert Einstein (Scientist)
`,
    guides: [
        {text: "Knowledge becomes useless without creativity. Believe me, choose the Red Door." },
        {text: "Imagination makes facts exciting. Believe me, choose the Green Door." },
        {text: "Imagination opens doors knowledge can't. Believe me, choose the Blue Door." },
        {text: "Ideas move us forward more than facts do. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 22 },     // 70% → 20
        { color: "blue", leadsTo: 24 },    // 60% → 24
        { color: "green", leadsTo: 23 },   // 90% → 23
        { color: "yellow", leadsTo: 4 }    // 80% → 4
    ]
},
7: {
    name: "Level 7 : Be The Change",
    description: `Quote
"You must be the change you wish to see in the world."
— Mahatma Gandhi (Activist/Leader)
`,
    guides: [
        {text: "Change yourself to make life easier. Believe me, choose the Yellow Door." },
        {text: "Inspire others by being better. Believe me, choose the Green Door." },
        {text: "Set an example for society. Believe me, choose the Red Door." },
        {text: "Personal actions must reflect the world you dream of. Believe me, choose the Blue Door." }
    ],
    doors: [
        { color: "red", leadsTo: 25 },     // 80% → 25
        { color: "blue", leadsTo: 5 },     // 90% → 5
        { color: "green", leadsTo: 22 },   // 70% → 22
        { color: "yellow", leadsTo: 15 }   // 60% → 15
    ]
},
8: {
    name: "Level 8 : Echoes of Pretending",
    description: `Quote
"We are what we pretend to be, so we must be careful about what we pretend to be."
— Kurt Vonnegut (writer)
`,
    guides: [
        {text: "Pretending is harmless fun. Believe me, choose the Blue Door." },
        {text: "Identity is shaped by behaviour. Believe me, choose the Red Door." },
        {text: "What we fake becomes truth eventually. Believe me, choose the Green Door." },
        {text: "Only reality defines us, not actions. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 13 },    // 100% → 13
        { color: "blue", leadsTo: 4 },     // Random 0%: 4/7/23 → 4
        { color: "green", leadsTo: 7 },    // Random 0%: 4/7/23 → 7
        { color: "yellow", leadsTo: 23 }   // Random 0%: 4/7/23 → 23
    ]
},
9: {
    name: "Level 9 : The Thinking Self",
    description: `Quote
"I think, therefore I am."
— René Descartes (Philosopher)
`,
    guides: [
        {text: "Thoughts prove we are smart. Believe me, choose the Green Door." },
        {text: "If you think, you exist. Believe me, choose the Red Door." },
        {text: "Self-awareness proves our presence. Believe me, choose the Blue Door." },
        {text: "The act of thinking confirms our existence. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 12 },    // 70% → 12
        { color: "blue", leadsTo: 4 },     // 60% → 4
        { color: "green", leadsTo: 7 },    // 90% → 7
        { color: "yellow", leadsTo: 25 }   // 80% → 25
    ]
},
10: {
    name: "Level 10 : The Lion's Tale",
    description: `Quote
"Until the lions have their own historians, the history of the hunt will always glorify the hunter."
— Chinua Achebe (Writer/Anti-colonial Voice)
`,
    guides: [
        {text: "Winners always write history. Believe me, choose the Blue Door." },
        {text: "Stories favor the strong. Believe me, choose the Yellow Door." },
        {text: "The oppressed need to tell their side. Believe me, choose the Red Door." },
        {text: "Power controls the narrative unless challenged. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 20 },    // 80% → 20
        { color: "blue", leadsTo: 14 },   // 60% → 14
        { color: "green", leadsTo: 5 },   // 90% → 5
        { color: "yellow", leadsTo: 25 }  // 70% → 25
    ]
},
11: {
    name: "Level 11 : Justice's Web",
    description: `Quote
"Injustice anywhere is a threat to justice everywhere."
— Martin Luther King Jr. (Civil Rights Leader)
`,
    guides: [
        {text: "Local problems don't stay local. Believe me, choose the Red Door." },
        {text: "Ignoring wrong in one place weakens all justice. Believe me, choose the Green Door." },
        {text: "Every injustice affects society's balance. Believe me, choose the Blue Door." },
        {text: "All justice is connected, and one crack weakens the whole. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 23 },    // 60% → 23
        { color: "blue", leadsTo: 10 },   // 80% → 10
        { color: "green", leadsTo: 4 },   // 90% → 4
        { color: "yellow", leadsTo: 24 }  // 70% → 24
    ]
},
12: {
    name: "Level 12 : Art's Dual Nature",
    description: `Quote
"Art enables us to find ourselves and lose ourselves at the same time."
— Thomas Merton (Trappist Monk & Writer)
`,
    guides: [
        {text: "Art distracts us from reality. Believe me, choose the Red Door." },
        {text: "Art gives us peace and escape. Believe me, choose the Blue Door." },
        {text: "Through art, we reflect and transform. Believe me, choose the Green Door." },
        {text: "Art is both discovery and surrender of the self. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 25 },    // 60% → 25
        { color: "blue", leadsTo: 14 },   // 70% → 14
        { color: "green", leadsTo: 18 },  // 80% → 18
        { color: "yellow", leadsTo: 22 }  // 90% → 22
    ]
},
13: {
    name: "Level 13 : The Hollow Crown",
    description: `Quote
"He who opens a school door, closes a prison."
— Victor Hugo (writer)
`,
    guides: [
        {text: "Schools replace jails physically. Believe me, choose the Green Door." },
        {text: "Education reduces crime and ignorance. Believe me, choose the Red Door." },
        {text: "Learning has no impact on society. Believe me, choose the Blue Door." },
        {text: "Prisons teach better discipline than schools. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 17 },    // 100% → 17
        { color: "blue", leadsTo: 2 },    // Random 0%: 2/24/27 → 2
        { color: "green", leadsTo: 24 }, // Random 0%: 2/24/27 → 24
        { color: "yellow", leadsTo: 27 } // Random 0%: 2/24/27 → 27
    ]
},
14: {
    name: "Level 14 : Authenticity's Triumph",
    description: `Quote
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
— Ralph Waldo Emerson (Poet & Thinker)
`,
    guides: [
        {text: "Be confident in your choices. Believe me, choose the Blue Door." },
        {text: "Staying unique is hard but good. Believe me, choose the Yellow Door." },
        {text: "Individuality is success in a conformist world. Believe me, choose the Red Door." },
        {text: "True strength lies in resisting social pressure to change. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 16 },    // 80% → 16
        { color: "blue", leadsTo: 15 },   // 60% → 15
        { color: "green", leadsTo: 32 },  // 90% → 32
        { color: "yellow", leadsTo: 15 }  // 70% → 15
    ]
},
15: {
    name: "Level 15 : The Source of Joy",
    description: `Quote
"Happiness depends upon ourselves."
— Aristotle (Philosopher)
`,
    guides: [
        {text: "We control our own emotions. Believe me, choose the Green Door." },
        {text: "Joy is a result of our choices. Believe me, choose the Red Door." },
        {text: "Our actions create our happiness. Believe me, choose the Blue Door." },
        {text: "Inner fulfilment is built through personal virtue. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 16 },    // 70% → 16
        { color: "blue", leadsTo: 32 },   // 60% → 32
        { color: "green", leadsTo: 16 },  // 90% → 16
        { color: "yellow", leadsTo: 14 }  // 80% → 14
    ]
},
16: {
    name: "Level 16 : The Mirror of Judgment",
    description: `Quote
"The only thing necessary for the triumph of evil is for good men to do nothing."
— Edmund Burke (Political Philosopher)
`,
    guides: [
        {text: "Good people need to act sometimes. Believe me, choose the Yellow Door." },
        {text: "When we ignore wrong, it spreads. Believe me, choose the Green Door." },
        {text: "Inaction allows evil to grow. Believe me, choose the Red Door." },
        {text: "Evil flourishes when the good remain silent. Believe me, choose the Blue Door." }
    ],
    doors: [
        { color: "red", leadsTo: 32 },    // 80% → 32
        { color: "blue", leadsTo: 14 },   // 90% → 14
        { color: "green", leadsTo: 14 },  // 70% → 14
        { color: "yellow", leadsTo: 15 }  // 60% → 15
    ]
},
17: {
    name: "Level 17 : Flame of Rebellion",
    description: `Quote
"If you are neutral in situations of injustice, you have chosen the side of the oppressor."
— Desmond Tutu (Archbishop & Human Rights Activist)
`,
    guides: [
        {text: "Neutrality is moral safety. Believe me, choose the Blue Door." },
        {text: "Inaction supports injustice. Believe me, choose the Red Door." },
        {text: "Silence avoids making mistakes. Believe me, choose the Green Door." },
        {text: "Staying out is a sign of wisdom. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 26 },    // 100% → 26
        { color: "blue", leadsTo: 6 },    // Random 0%: 6/9/24 → 6
        { color: "green", leadsTo: 9 },   // Random 0%: 6/9/24 → 9
        { color: "yellow", leadsTo: 24 }  // Random 0%: 6/9/24 → 24
    ]
},
18: {
    name: "Level 18 : The Illusion of Freedom",
    description: `Quote
"Man is born free, and everywhere he is in chains."
— Jean-Jacques Rousseau (Philosopher)
`,
    guides: [
        {text: "Society restricts people. Believe me, choose the Red Door." },
        {text: "We lose freedom as we grow. Believe me, choose the Green Door." },
        {text: "Systems bind us despite our nature. Believe me, choose the Blue Door." },
        {text: "Though born free, man is trapped by social constructs. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 16 },    // 60% → 16
        { color: "blue", leadsTo: 10 },   // 80% → 10
        { color: "green", leadsTo: 21 },  // 70% → 21
        { color: "yellow", leadsTo: 12 }  // 90% → 12
    ]
},
19: {
    name: "Level 19 : The Echo of the Self",
    description: `Quote
"Your vision will become clear only when you look into your heart. Who looks outside, dreams; who looks inside, awakes."
— Carl Jung (Psychologist/Philosopher)
`,
    guides: [
        {text: "Introspection gives better ideas. Believe me, choose the Yellow Door." },
        {text: "Self-understanding brings purpose. Believe me, choose the Red Door." },
        {text: "Dreams are from the outside, truth from within. Believe me, choose the Blue Door." },
        {text: "Real clarity comes through inner awareness, not external pursuit. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 24 },    // 70% → 24
        { color: "blue", leadsTo: 11 },   // 60% → 11
        { color: "green", leadsTo: 7 },   // 90% → 7
        { color: "yellow", leadsTo: 27 }  // 80% → 27
    ]
},
20: {
    name: "Level 20 : The Dust of Desire",
    description: `Quote
"You only lose what you cling to."
— Buddha (Spiritual Leader)
`,
    guides: [
        {text: "Letting go saves pain. Believe me, choose the Blue Door." },
        {text: "Attachment causes suffering. Believe me, choose the Green Door." },
        {text: "Loss is tied to our grasp. Believe me, choose the Red Door." },
        {text: "Desire creates the illusion of loss. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 19 },    // 80% → 19
        { color: "blue", leadsTo: 16 },   // 60% → 16
        { color: "green", leadsTo: 20 },  // 90% → 20
        { color: "yellow", leadsTo: 10 }  // 70% → 10
    ]
},
21: {
    name: "Level 21 : The Pillar of Purpose",
    description: `Quote
"He who has a why to live can bear almost any how."
— Friedrich Nietzsche (Philosopher)
`,
    guides: [
        {text: "Hope helps people survive suffering. Believe me, choose the Red Door." },
        {text: "Strength comes from emotions in hard times. Believe me, choose the Green Door." },
        {text: "Purpose gives people the power to endure. Believe me, choose the Blue Door." },
        {text: "Meaning helps people survive any condition. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 19 },    // 60% → 19
        { color: "blue", leadsTo: 16 },    // 80% → 16
        { color: "green", leadsTo: 22 },  // 70% → 22
        { color: "yellow", leadsTo: 1 }  // 90% → 1
    ]
},
22: {
    name: "Level 22 : The Forge of Identity",
    description: `Quote
"Man is nothing else but what he makes of himself."
— Jean-Paul Sartre (Philosopher)
`,
    guides: [
        {text: "People become what society makes them. Believe me, choose the Yellow Door." },
        {text: "People should shape their own career. Believe me, choose the Blue Door." },
        {text: "Actions decide our identity. Believe me, choose the Red Door." },
        {text: "We define ourselves through choices. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 28 },    // 60% → 28
        { color: "blue", leadsTo: 14 },   // 80% → 14
        { color: "green", leadsTo: 27 },   // 90% → 27
        { color: "yellow", leadsTo: 12 }  // 70% → 12
    ]
},
23: {
    name: "Level 23 : The Rebel's Path",
    description: `Quote
"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
— Albert Camus (Philosopher & Author)
`,
    guides: [
        {text: "Total freedom means doing anything you want. Believe me, choose the Green Door." },
        {text: "Live freely, even when it's tough. Believe me, choose the Red Door." },
        {text: "Choosing freedom challenges oppression. Believe me, choose the Blue Door." },
        {text: "True freedom resists control by simply existing. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 24 },    // 70% → 24
        { color: "blue", leadsTo: 6 },    // 80% → 6
        { color: "green", leadsTo: 7 },   // 90% → 7
        { color: "yellow", leadsTo: 14 }  // 60% → 14
    ]
},
24: {
    name: "Level 24 : The Mask We Wear",
    description: `Quote
"We are what we pretend to be, so we must be careful about what we pretend to be."
— Kurt Vonnegut (Author)
`,
    guides: [
        {text: "Pretending leads to lies. Believe me, choose the Blue Door." },
        {text: "Acting too much forms habits. Believe me, choose the Yellow Door." },
        {text: "Roles we play shape who we become. Believe me, choose the Red Door." },
        {text: "Pretending can slowly become our truth. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 28 },     // 80% → 28
        { color: "blue", leadsTo: 15 },   // 60% → 15
        { color: "green", leadsTo: 9 },   // 90% → 9
        { color: "yellow", leadsTo: 25 }  // 70% → 25
    ]
},
25: {
    name: "Level 25 : The Wound and The Light",
    description: `Quote
"The wound is the place where the light enters you."
— Rumi (Poet & Mystic)
`,
    guides: [
        {text: "Pain helps us grow stronger. Believe me, choose the Red Door." },
        {text: "Hurt shows us what to fix. Believe me, choose the Green Door." },
        {text: "Suffering brings inner wisdom. Believe me, choose the Blue Door." },
        {text: "Pain opens us up to transformation and healing. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 16 },    // 60% → 16
        { color: "blue", leadsTo: 21 },   // 80% → 21
        { color: "green", leadsTo: 10 },  // 90% → 10
        { color: "yellow", leadsTo: 27 }  // 70% → 27
    ]
},
26: {
    name: "Level 26 : Chain of Belief",
    description: `Quote
"The mind is everything. What you think, you become."
— Buddha (spiritual leader)
`,
    guides: [
        {text: "Thoughts control how others see you. Believe me, choose the Blue Door." },
        {text: "Reality is only imagination. Believe me, choose the Green Door." },
        {text: "Your thoughts shape your being. Believe me, choose the Red Door." },
        {text: "Thinking is not as important as action. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 29 },    // 100% → 29
        { color: "blue", leadsTo: 6 },    // Random 0%: 6/9/14 → 6
        { color: "green", leadsTo: 9 },   // Random 0%: 6/9/14 → 9
        { color: "yellow", leadsTo: 14 }  // Random 0%: 6/9/14 → 14
    ]
},
27: {
    name: "Level 27 : The Endless March",
    description: `Quote
"Success is not final, failure is not fatal: It is the courage to continue that counts."
— Winston Churchill (Political Leader)
`,
    guides: [
        {text: "You win or lose depending on attitude. Believe me, choose the Green Door." },
        {text: "Failures and wins are just parts of life. Believe me, choose the Red Door." },
        {text: "What matters is to keep going. Believe me, choose the Blue Door." },
        {text: "The journey matters more than outcomes. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 3 },     // 70% → 3
        { color: "blue", leadsTo: 24 },   // 80% → 24
        { color: "green", leadsTo: 1 },   // 60% → 1
        { color: "yellow", leadsTo: 19 }  // 90% → 19
    ]
},
28: {
    name: "Level 28 : The Cage of Comfort",
    description: `Quote
"A ship is safe in harbor, but that's not what ships are for."
— John A. Shedd (Author/Thinker)
`,
    guides: [
        {text: "Life begins at sea. Believe me, choose the Blue Door." },
        {text: "Safety keeps us stuck. Believe me, choose the Yellow Door." },
        {text: "Purpose demands taking risks. Believe me, choose the Red Door." },
        {text: "True meaning lies in embracing the unknown. Believe me, choose the Green Door." }
    ],
    doors: [
        { color: "red", leadsTo: 6 },    // 80% → 6
        { color: "blue", leadsTo: 2 },   // 60% → 2
        { color: "green", leadsTo: 7 },  // 90% → 7
        { color: "yellow", leadsTo: 4 }  // 70% → 4
    ]
},
29: {
    name: "Level 29 : Dance of Destiny",
    description: `Quote
"Life is not about finding yourself. Life is about creating yourself."
— George Bernard Shaw (playwright and critic)
`,
    guides: [
        {text: "Discover who you are inside. Believe me, choose the Blue Door." },
        {text: "Growth is about self-invention. Believe me, choose the Red Door." },
        {text: "Life is a puzzle to unlock. Believe me, choose the Green Door." },
        {text: "The self is prewritten and must be found. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 30 },    // 100% → 30
        { color: "blue", leadsTo: 14 },   // Random 0%: 14/15/32 → 14
        { color: "green", leadsTo: 15 },  // Random 0%: 14/15/32 → 15
        { color: "yellow", leadsTo: 32 }  // Random 0%: 14/15/32 → 32
    ]
},
30: {
    name: "Level 30 : The Fragile Mask",
    description: `Quote
"People don't resist change. They resist being changed."
— Peter Senge (Scientist & Author)
`,
    guides: [
        {text: "People hate change in any form. Believe me, choose the Green Door." },
        {text: "People only want personal change. Believe me, choose the Blue Door." },
        {text: "Resistance comes from imposed transformation. Believe me, choose the Red Door." },
        {text: "Everyone wants things to stay the same. Believe me, choose the Yellow Door." }
    ],
    doors: [
        { color: "red", leadsTo: 31 },    // 100% → 31
        { color: "blue", leadsTo: 1 },    // Random 0%: 1/5/32 → 1
        { color: "green", leadsTo: 5 },   // Random 0%: 1/5/32 → 5
        { color: "yellow", leadsTo: 32 }  // Random 0%: 1/5/32 → 32
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
    32: {
    name: "THE DEAD END CHAMBER",
    description: `
        <div class="reward-screen">
            <h2>COMPLETELY TRAPPED!</h2>
            <div class="skull">💀</div>
            <p>You are trapped in the Bhool Bhulaiyaa!</p>
        </div>
    `,
    doors: [] // No doors needed
},
    0: {
        // Your next level data here
    }
    
};