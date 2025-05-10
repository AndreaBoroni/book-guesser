/*
Book ideas:
To kill a mockingbird
The Three Musketeers
moby dick
big little lies
the zombie room

the war of the worlds
the time machine
the invisible man

The Lion, the Witch and the Wardrobe (1950)
Prince Caspian (1951)
The Voyage of the Dawn Treader (1952)
The Silver Chair (1953)
The Horse and His Boy (1954)
The Magician's Nephew (1955)
The Last Battle (1956)
*/

// { emoji: "🤴(🇷🇺🇰🇿🇹🇲🇮🇷🇦🇿⛰️🌊⛰️)", answer: "prince caspian" },
// { emoji: "🥈🪑", answer: "the silver chair" },


const UNLOCK_THRESHOLD = 0.6;

// { emoji: "[🍈®️]🔀", answer: "oliver twist" },
// { emoji: "🔔jar", answer: "bell jar" },
// { emoji: "(❌🤏)😴", answer: "the big sleep" },
// { emoji: "⬇️🌋", answer: "under the volcano" },
// { emoji: "⬇️👹☀️", answer: "under satan's sun" },
// { emoji: "🔴🎪", answer: "the red tent" },
// { emoji: "🐘🌳", answer: "elephant tree" },
// { emoji: "(🧑🏻🧳)", answer: "the traveler" },
// { emoji: "🟥🐉", answer: "red dragon" },
// { emoji: "🤏🏠(❌🤏)(🌲🌳)", answer: "little house in the big woods" },
// { emoji: "🍫⚔️", answer: "the chocolate war" },
// { emoji: "💦🐘s", answer: "water for elephants" },
// { emoji: "🟥✉️", answer: "the scarlet letter" },
// { emoji: "🏏⏳⬛", answer: "the cricket in times square" },
// { emoji: "💕🦴s", answer: "lovely bones" },
// { emoji: "🧈⚔️📖", answer: "butter battle book" },
// { emoji: "🔊➕😡", answer: "the sound and the fury" },
// { emoji: "(💨💨💨)👋🏻", answer: "wuthering heights" },
// { emoji: "♜s🌍", answer: "The Pillars of the Earth" },

const allPuzzles = {
  "Group I": [
    { emoji: "1️⃣9️⃣8️⃣4️⃣", answer: "1984", hint1: "1️⃣9️⃣8️⃣4️⃣", hint2: "_ _ _ _", author: "George Orwell" },
    { emoji: "🛣️", answer: "The Road", hint1: "The 🛣️", hint2: "The _ _ _ _", author: "Cormac McCarthy" },
    { emoji: "🤏🤴", answer: "The Little Prince", hint1: "The 🤏 🤴", hint2: "The _ _ _ _ _ _    _ _ _ _ _ _", author: "Antoine de Saint-Exupéry" },
    { emoji: "⚔️➕☮️", answer: "War and Peace", hint1: "⚔️ and ☮️", hint2: "_ _ _ and _ _ _ _ _", author: "Leo Tolstoy" },
    { emoji: "👴➕🌊", answer: "The Old Man and the Sea", hint1: "The 👴 and the 🌊", hint2: "The _ _ _   _ _ _ and the _ _ _", author: "Ernest Hemingway" },
    { emoji: "(🤏⛰️🏜️)", answer: "Dune", hint1: "(🤏⛰️🏜️)", hint2: "_ _ _ _", author: "Frank Herbert" },
    { emoji: "(🙅🍽️)(🎲🎮)s", answer: "The Hunger Games", hint1: "The (🙅🍽️) (🎲🎮)s", hint2: "The _ _ _ _ _ _   _ _ _ _ _", author: "Suzanne Collins" },
    { emoji: "🟩🥚s➕🍖", answer: "Green Eggs and Ham", hint1: "🟩 🥚s and 🍖", hint2: "_ _ _ _ _   _ _ _ _ and _ _ _", author: "Dr. Seuss" },
    { emoji: "[💧🚢]👇", answer: "Watership Down", hint1: "[💧🚢] 👇", hint2: "_ _ _ _ _ _ _ _ _   _ _ _ _", author: "Richard Adams" },
    { emoji: "🦁➕🧙🏻‍♀️➕(👕👗🗄️)", answer: ["The Lion, the Witch and the Wardrobe", "The Lion the Witch and the Wardrobe"], hint1: "The 🦁, the 🧙🏻‍♀️ and the (👕👗🗄️)", hint2: "The _ _ _ _, the _ _ _ _ _ and the _ _ _ _ _ _ _ _", author: "C. S. Lewis"},
  ],
  "Group II": [
    { emoji: "🐁s➕👨s", answer: "Of Mice and Men", hint1: "Of 🐁s and 👨s", hint2: "Of _ _ _ _ and _ _ _", author: "John Steinbeck" },
    { emoji: "👼s➕😈s", answer: "Angels and Demons", hint1: "👼s and 😈s", hint2: "_ _ _ _ _ _ and _ _ _ _ _ _", author: "Dan Brown" },
    { emoji: "♾️(🤡💬😂)", answer: "Infinite Jest", hint1: "♾️ (🤡💬😂)", hint2: "_ _ _ _ _ _ _ _   _ _ _ _", author: "David Foster Wallace" },
    { emoji: "(🐷🐮🐔)(🚜🌾👨‍🌾🏡)", answer: "Animal Farm", hint1: "(🐷🐮🐔) (🚜🌾👨‍🌾🏡)", hint2: "_ _ _ _ _ _   _ _ _ _", author: "George Orwell" },
    { emoji: "🙋‍♂️🤖", answer: ["I, Robot", "I Robot"], hint1: "🙋‍♂️, 🤖", hint2: "_,  _ _ _ _ _", author: "Isaac Asimov" },
    { emoji: "🤖s(🛌💭)⚡🐏❓", answer: "Do Androids Dream of Electric Sheep?", hint1: "Do 🤖s (🛌💭) of ⚡ 🐏?", hint2: "Do _ _ _ _ _ _ _ _   _ _ _ _ _ of _ _ _ _ _ _ _ _   _ _ _ _ _?", author: "Philip K. Dick" },
    { emoji: "👧🐉(⬛💧✒️💪)", answer: "The Girl with the Dragon Tattoo", hint1: "The 👧 with the 🐉 (⬛💧✒️💪)", hint2: "The _ _ _ _ with the _ _ _ _ _ _   _ _ _ _ _ _", author: "Stieg Larsson" },
    { emoji: "🏙️", answer: "City", hint1: "🏙️", hint2: "_ _ _ _", author: "Clifford D. Simak" },
    { emoji: "📜(🤏🏙️)s", answer: "Paper Towns", hint1: "📜 (🤏🏙️)s", hint2: "_ _ _ _ _  _ _ _ _ _", author: "John Green" },
    { emoji: "🤏👩s", answer: "Little Women", hint1: "🤏 👩s", hint2: "_ _ _ _ _ _  _ _ _ _ _", author: "Louisa May Alcott" }
  ],
  "Group III": [
    { emoji: "(👋😢)💪s", answer: "A Farewell to Arms", hint1: "A (👋😢) to 💪s", hint2: "A _ _ _ _ _ _ _ _ to _ _ _ _", author: "Ernest Hemingway"},
    { emoji: "🏰", answer: "The Castle", hint1: "The 🏰", hint2: "The _ _ _ _ _ _", author: "Franz Kafka" },
    { emoji: "🎣2️⃣2️⃣", answer: ["Catch-22", "Catch 22"], hint1: "🎣-2️⃣2️⃣", hint2: "_ _ _ _ _ - _ _", author: "Joseph Heller" },
    { emoji: "🥇🧭", answer: "The Golden Compass", hint1: "The 🥇 🧭", hint2: "The _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Philip Pullman" },
    { emoji: "👧🔛🚅", answer: "The Girl on the Train", hint1: "The 👧 on the 🚅", hint2: "The   _ _ _ _ on the _ _ _ _ _", author: "Paula Hawkins" },
    { emoji: "(💎💰🎁)(🌊🏝️🌊)", answer: "Treasure Island", hint1: "(💎💰🎁) (🌊🏝️🌊)", hint2: "_ _ _ _ _ _ _ _   _ _ _ _ _ _", author: "Robert Louis Stevenson" },
    { emoji: "🤴🦟s", answer: "Lord of the Flies", hint1: "🤴 of the 🦟s", hint2: "_ _ _ _ of the _ _ _ _ _", author: "William Golding" },
    { emoji: "🪁🏃", answer: "The Kite Runner", hint1: "The 🪁 🏃", hint2: "The _ _ _ _   _ _ _ _ _ _", author: "Khaled Hosseini" },
    { emoji: "5️⃣0️⃣🕶️(⬜↔️⬛)", answer: ["Fifty Shades of Gray", "50 Shades of Gray"], hint1: "5️⃣0️⃣ 🕶️ of (⬜↔️⬛)", hint2: "_ _ _ _ _   _ _ _ _ _ _ of _ _ _ _", author: "E. L. James" },
    { emoji: "(👨👍🚘🧗‍♂️)📋🌌", answer: "The Hitchhiker's Guide to the Galaxy", hint1: "The (👨👍🚘🧗‍♂️)'s 📋 to the 🌌", hint2: "The _ _ _ _ _ _ _ _ _ _'s _ _ _ _ _ to the _ _ _ _ _ _", author: "Douglas Adams"  }
  ],
  "Group IV": [
    { emoji: "🍇🤬", answer: "The Grapes of Wrath", hint1: "The 🍇 of 🤬", hint2: "The _ _ _ _ _ _ of _ _ _ _ _", author: "John Steinbeck" },
    { emoji: "🌃(📚🏠)", answer: "The Midnight Library", hint1: "The 🌃 (📚🏠)", hint2: "The _ _ _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Matt Haig" },
    { emoji: "[🕓(💼🛠️👨‍💻)]🍊", answer: "A Clockwork Orange", hint1: "A [🕓(💼🛠️👨‍💻)] 🍊", hint2: "A _ _ _ _ _ _ _ _ _   _ _ _ _ _ _", author: "Anthony Burgess" },
    { emoji: "[(🐄🔪🥩)🏠]5️⃣", answer: ["Slaughterhouse-five", "Slaughter-house 5", "Slaughterhouse-5"], hint1: "[(🐄🔪🥩)🏠]-5️⃣", hint2: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ - _ _ _ _", author: "Kurt Vonnegut" },
    { emoji: "[(✒️⚫💧)❤️]", answer: "Inkheart", hint1: "[(✒️⚫💧)❤️]", hint2: "_ _ _ _ _ _ _ _", author: "Cornelia Funke" },
    { emoji: "(💻👨‍💻🌐)", answer: "It", hint1: "(💻👨‍💻🌐)", hint2: "_ _", author: "Stephen King" },
    { emoji: "[⛲🙂]", answer: "The Fountainhead", hint1: "The [⛲🙂]", hint2: "The _ _ _ _ _ _ _ _ _ _ _ _", author: "Ayn Rand" },
    { emoji: "👧(🦪⚪)[👂💍]", answer: "Girl with a Pearl Earring", hint1: "👧 with a (🦪⚪) [👂💍]", hint2: "_ _ _ _ with a _ _ _ _ _   _ _ _ _ _ _ _", author: "Tracy Chevalier" },
    { emoji: "[🟨🙂]", answer: "Yellowface", hint1: "[🟨🙂]", hint2: " _ _ _ _ _ _ _ _ _ _", author: "R. F. Kuang" },
    { emoji: "👸👰", answer: "The Princess Bride", hint1: "The 👸 👰", hint2: "The _ _ _ _ _ _ _ _   _ _ _ _ _", author: "William Goldman"  }
  ],
  "Group V": [
    { emoji: "🐱➡️🎩", answer: "The Cat in the Hat", hint1: "The 🐱 in the 🎩", hint2: "The _ _ _ in the _ _ _", author: "Dr. Seuss" },
    { emoji: "(👨🎲🎮)(🎲🎮)s", answer: "The Player of Games", hint1: "The (👨🎲🎮) of (🎲🎮)s", hint2: "The _ _ _ _ _ _ of _ _ _ _ _", author: "Iain M. Banks" },
    { emoji: "1️⃣0️⃣0️⃣0️⃣✨☀️s", answer: ["A Thousand Splendid Suns", "1000 Splendid Suns"]  , hint1: "A 1️⃣0️⃣0️⃣0️⃣ ✨ ☀️s", hint2: "A _ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _   _ _ _ _", author: "Khaled Hosseini" },
    { emoji: "1️⃣(✈️🦅🪂)⬆️🐦(🐦🏡)", answer: "One Flew over the Cuckoo's Nest", hint1: "1️⃣ (✈️🦅🪂) over the 🐦's (🐦🏡)", hint2: "_ _ _   _ _ _ _ over the _ _ _ _ _ _'s _ _ _ _", author: "Ken Kesey" },
    { emoji: "➡️🥶🩸", answer: "In Cold Blood", hint1: "In 🥶 🩸", hint2: "In _ _ _ _   _ _ _ _ _", author: "Truman Capote" },
    { emoji: "🐱(👶🛌🏻)", answer: "Cat's Cradle", hint1: "🐱's (👶🛌🏻)", hint2: "_ _ _'s _ _ _ _ _ _", author: "Kurt Vonnegut" },
    { emoji: "[🩸🎵]", answer: "Bloodmusic", hint1: "[🩸🎵]", hint2: "_ _ _ _ _ _ _ _ _ _", author: "Greg Bear" },
    { emoji: "🤫(🤕🏥)", answer: "The Silent Patient", hint1: "The 🤫 (🤕🏥)", hint2: "The _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Alex Michaelides" },
    { emoji: "(🌍🧲🍎)🌈", answer: "Gravity's Rainbow", hint1: "(🌍🧲🍎)'s 🌈", hint2: "_ _ _ _ _ _ _'s _ _ _ _ _ _ _", author: "Thomas Pynchon" },
    { emoji: "🏙️🦴", answer: "City of Bones", hint1: "🏙️ of 🦴s", hint2: "_ _ _ _ of _ _ _ _ _", author: "Cassandra Clare"  }
  ],
  "Group VI": [
    { emoji: "✨", answer: "The Shining", hint1: "The ✨", hint2: "The _ _ _ _ _ _ _", author: "Stephen King" },
    { emoji: "⏳(👨🧳)👰", answer: "The Time Traveler's Wife", hint1: "The ⏳ (👨🧳)'s 👰", hint2: "The _ _ _ _   _ _ _ _ _ _ _ _'s _ _ _ _", author: "Audrey Niffenegger" },
    { emoji: "(👨🔩➡️🥇)", answer: "The Alchemist", hint1: "The (👨🔩➡️🥇)", hint2: "The _ _ _ _ _ _ _ _ _", author: "Paulo Coelho" },
    { emoji: "🦊➡️🧦", answer: "Fox in Socks", hint1: "🦊 in 🧦", hint2: "_ _ _ in _ _ _ _ _", author: "Dr. Seuss" },
    { emoji: "❄️(🚗💥🚗)", answer: "Snow Crash", hint1: "❄️ (🚗💥🚗)", hint2: "_ _ _ _   _ _ _ _ _", author: "Neal Stephenson" },
    { emoji: "🌍🤷‍♀️", answer: "Atlas Shrugged", hint1: "🌍 🤷‍♀️", hint2: "_ _ _ _ _   _ _ _ _ _ _ _ _", author: "Ayn Rand" },
    { emoji: "🌆", answer: "Twilight", hint1: "🌆", hint2: "_ _ _ _ _ _ _ _", author: "Stephenie Meyer" },
    { emoji: "🎨🟪", answer: "The Color Purple", hint1: "The 🎨 🟪", hint2: "The _ _ _ _ _   _ _ _ _ _ _", author: "Alice Walker" },
    { emoji: "🚶2️⃣🌙s", answer: "Walk Two Moons", hint1: "🚶 2️⃣ 🌙s", hint2: "_ _ _ _   _ _ _   _ _ _ _ _", author: "Sharon Creech"  }
  ],
  "Group VII": [
    { emoji: "(1️⃣⏳)➕(🔜⏳)🤴", answer: "The Once and Future King", hint1: "The (1️⃣⏳) and (🔜⏳) 🤴", hint2: "The _ _ _ _ and _ _ _ _ _ _   _ _ _ _", author: "T. H. White" },
    { emoji: "1️⃣🐟2️⃣🐟🟥🐟🟦🐟", answer: "One Fish Two Fish Red Fish Blue Fish", hint1: "1️⃣ 🐟 2️⃣ 🐟 🟥 🐟 🟦 🐟", hint2: "_ _ _   _ _ _ _   _ _ _   _ _ _ _   _ _ _   _ _ _ _   _ _ _ _   _ _ _ _", author: "Dr. Seuss" },
    { emoji: "👨(⬆️🗻)🏰", answer: "The Man in the High Castle", hint1: "The 👨 in the (⬆️🗻) 🏰", hint2: "The _ _ _ in the _ _ _ _   _ _ _ _ _ _", author: "Philip K. Dick" },
  ],
  "Series I": [
    { emoji: "🤴💍s", answer: "The Lord of the Rings", hint1: "The 🤴 of the 💍s", hint2: "The _ _ _ _ of the _ _ _ _ _", author: "J. R. R. Tolkien" },
    { emoji: "(🤝🧑‍🤝‍🧑🚢)💍", answer: "The Fellowship of the Ring", hint1: "The (🤝🧑‍🤝‍🧑🚢) of the 💍", hint2: "The _ _ _ _ _ _ _ _ _ _ of the _ _ _ _", author: "J. R. R. Tolkien" },
    { emoji: "2️⃣♜s", answer: "The Two Towers", hint1: "The 2️⃣ ♜s", hint2: "The _ _ _   _ _ _ _ _ _", author: "J. R. R. Tolkien" },
    { emoji: "↩️🤴", answer: "The Return of the King", hint1: "The ↩️ of the 🤴", hint2: "The _ _ _ _ _ _ of the _ _ _ _", author: "J. R. R. Tolkien" },
  ],
  "Series II": [
    { emoji: "🎡⏳", answer: "The Wheel of Time", hint1: "The 🎡 of ⏳", hint2: "The _ _ _ _ _ of _ _ _ _", author: "Robert Jordan & Brandon Sanderson" },
    { emoji: "👁️🌍", answer: "The Eye of the World", hint1: "The 👁️ of the 🌍", hint2: "The _ _ _ of the _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "(🏹🦌🥩)", answer: "The Great Hunt", hint1: "The Great Hunt", hint2: "The Great Hunt", author: "Robert Jordan" },
    { emoji: "🐉[🔁(🐣🤰👶)]", answer: "The Dragon Reborn", hint1: "The 🐉 [🔁(🐣🤰👶)]", hint2: "The _ _ _ _ _ _   _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "👥📈", answer: "The Shadow Rising", hint1: "The 👥 📈", hint2: "The _ _ _ _ _ _   _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "🔥s(👼⛰️👼)", answer: "The Fires of Heaven", hint1: "The 🔥s of (👼⛰️👼)", hint2: "The _ _ _ _ _ of _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "🤴(🌀💥😵‍💫)", answer: "Lord of Chaos", hint1: "🤴 of (🌀💥😵‍💫)", hint2: "_ _ _ _ of _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "👑🗡️s", answer: "A Crown of Swords", hint1: "A 👑 of 🗡️s", hint2: "A _ _ _ _ _ of _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "(🤏🛣️)(🤏🗡️)s", answer: "The Path of Daggers", hint1: "The (🤏🛣️) of (🤏🗡️)s", hint2: "The _ _ _ _ of _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "(❄️📅)❤️", answer: "Winter's Heart", hint1: "(❄️📅)'s ❤️", hint2: "_ _ _ _ _ _'s _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "[✝️🛣️]s🌆", answer: "Crossroads of Twilight", hint1: "[✝️🛣️]s of 🌆", hint2: "_ _ _ _ _ _ _ _ _ of _ _ _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "🆕(🌷📅)", answer: "New Spring", hint1: "New (🌷📅)", hint2: "New _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "🔪(🛌💭)s", answer: "Knife of Dreams", hint1: "🔪 of (🛌💭)s", hint2: "_ _ _ _ _ of _ _ _ _ _ _", author: "Robert Jordan" },
    { emoji: "(👨‍👨‍👧‍👧👩‍👩‍👦‍👦🥂🗓️)🌪️", answer: "The Gathering Storm", hint1: "The (👨‍👨‍👧‍👧👩‍👩‍👦‍👦🥂🗓️) 🌪️", hint2: "The _ _ _ _ _ _ _ _ _   _ _ _ _ _", author: "Robert Jordan & Brandon Sanderson" },
    { emoji: "♜s🌃", answer: "Towers of Midnight", hint1: "♜s of 🌃", hint2: "_ _ _ _ _ _ of _ _ _ _ _ _ _", author: "Robert Jordan & Brandon Sanderson" },
    { emoji: "💾💡", answer: "A Memory of Light", hint1: "A 💾 of 💡", hint2: "A _ _ _ _ _ _ of _ _ _ _ _", author: "Robert Jordan & Brandon Sanderson" },
  ],
  "Series III": [
    { emoji: "(♫♪♫)🧊➕🔥", answer: "A Song of Ice and Fire", hint1: "A 🎵 of 🧊 and 🔥", hint2: "A _ _ _ _ of _ _ _ and _ _ _ _", author: "George R. R. Martin" },
    { emoji: "(🎲🎮)(👑🪑)s", answer: "A Game of Thrones", hint1: "A (🎲🎮) of (👑🪑)s", hint2: "A _ _ _ _ of _ _ _ _ _ _ _", author: "George R. R. Martin" },
    { emoji: "(🗡️💥🗡️)🤴s", answer: "A Clash of Kings", hint1: "A 🗡️ of 🤴s", hint2: "A _ _ _ _ _ of _ _ _ _ _", author: "George R. R. Martin" },
    { emoji: "🌪️🗡️s", answer: "A Storm of Swords", hint1: "A 🌪️ of 🗡️s", hint2: "A _ _ _ _ _ of _ _ _ _ _ _", author: "George R. R. Martin" },
    { emoji: "(🍽️🎉🥂)(🐦‍⬛)s", answer: "A Feast for Crows", hint1: "A (🍽️🎉🥂) for (🐦‍⬛)s", hint2: "A _ _ _ _ _ for _ _ _ _ _", author: "George R. R. Martin" },
    { emoji: "(💃🏻🕺🏽)🐉s", answer: "A Dance with Dragons", hint1: "A (💃🏻🕺🏽) with 🐉s", hint2: "A _ _ _ _ _ with _ _ _ _ _ _ _", author: "George R. R. Martin" }
  ],
  "Series IV": [
    { emoji: "(👩🏻‍⚖️⚖️🏛️)(🌵🥀)s➕🌹s", answer: "A Court of Thorns and Roses", hint1: "A (👩🏻‍⚖️⚖️🏛️) of (🌵🥀)s and 🌹s", hint2: "A _ _ _ _ _ of _ _ _ _ _ _ and _ _ _ _ _", author: "Sarah J. Maas" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🌫️➕😡", answer: "A Court of Mist and Fury", hint1: "A (👩🏻‍⚖️⚖️🏛️) of 🌫️ and 😡", hint2: "A _ _ _ _ _ of _ _ _ _ and _ _ _ _", author: "Sarah J. Maas" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)(🕊️💪)s➕🏚️", answer: "A Court of Wings and Ruin", hint1: "A (👩🏻‍⚖️⚖️🏛️) of (🕊️💪)s and 🏚️", hint2: "A _ _ _ _ _ of _ _ _ _ _ and _ _ _ _", author: "Sarah J. Maas" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🥶➕[⭐💡]", answer: "A Court of Frost and Starlight", hint1: "A (👩🏻‍⚖️⚖️🏛️) of 🥶 and [⭐💡]", hint2: "A _ _ _ _ _ of _ _ _ _ _ and _ _ _ _ _ _ _ _ _", author: "Sarah J. Maas" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🥈🔥s", answer: "A Court of Silver Flames", hint1: "A (👩🏻‍⚖️⚖️🏛️) of 🥈 🔥s", hint2: "A _ _ _ _ _ of _ _ _ _ _ _   _ _ _ _ _ _", author: "Sarah J. Maas" }
  ],
  
};

const unlockThresholds = {
  "Series I": 10,
  "Series II": 10,
  "Series III": 10,
  "Series IV": 10,
};

let currentGroup = "Group I"; // default group
let solved = JSON.parse(localStorage.getItem("solvedPuzzles")) || {};
let hintLevels = JSON.parse(localStorage.getItem("hintLevels")) || {};
let currentPuzzle = 0;

function normalizeAnswer(answer) {
  if (Array.isArray(answer)) answer = answer[0];
  return answer.toLowerCase().trim().replace(/\s+/g, " ");
}

function isSolved(answer) {
  return solved[normalizeAnswer(answer)];
}

function solve(answer) {
  solved[normalizeAnswer(answer)] = true;
}

function isGroupSolved(groupKey) {
  const puzzles = allPuzzles[groupKey];
  if (!puzzles || !Array.isArray(puzzles)) return false;

  for (let puzzle of puzzles) {
    const answerKey = normalizeAnswer(puzzle.answer);
    if (!solved[answerKey]) {
      return false;
    }
  }
  return true;
}

function startGame() {
  const groupKeys = Object.keys(allPuzzles);
  let groupIndex = groupKeys.indexOf(currentGroup);

  // Loop until we find a group with an unsolved puzzle or exhaust all groups
  while (groupIndex < groupKeys.length) {
    const group = groupKeys[groupIndex];
    const puzzles = allPuzzles[group];

    let firstUnsolvedIndex = -1;
    for (let i = 0; i < puzzles.length; i++) {
      const normalized = normalizeAnswer(puzzles[i].answer);
      if (!solved[normalized]) {
        firstUnsolvedIndex = i;
        break;
      }
    }

    if (firstUnsolvedIndex !== -1) {
      currentGroup = group;
      currentPuzzle = firstUnsolvedIndex;
      break;
    }

    groupIndex++;
  }

  loadPuzzle(false);
  renderGroupButtons();
}
  
  function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i-1) === a.charAt(j-1)) {
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1);
        }
      }
    }
    return matrix[b.length][a.length];
  }

  function loadPuzzle(animated = false) {
    const area = document.getElementById('puzzleArea');
  
    // Always remove 'solved' class before rendering a new puzzle
    area.classList.remove('solved');
    const puzzle_solved = isSolved(allPuzzles[currentGroup][currentPuzzle].answer);
  
    if (animated) {
      area.classList.add('hide');
      setTimeout(() => {
        updatePuzzleHTML();
        area.classList.remove('hide');
  
        if (puzzle_solved) {
          area.classList.add('solved');
        }
      }, 100);
    } else {
      updatePuzzleHTML();
  
      if (puzzle_solved) {
        area.classList.add('solved');
      }
    }

    updateProgress();
  }
  
  function updatePuzzleHTML() {
    const puzzle = allPuzzles[currentGroup][currentPuzzle];
    const isSpecialGroup = !!unlockThresholds[currentGroup];
    const isFirst = currentPuzzle === 0;
    const isFirstSolved = isSolved(allPuzzles[currentGroup][0].answer);

    // ⛔ Block access to locked special puzzles
    if (isSpecialGroup && !isFirst && !isFirstSolved) {
      const area = document.getElementById('puzzleArea');
      area.innerHTML = `<div class="locked-message">🔒 Solve the first puzzle to unlock this one.</div>`;
      return;
    }

    const area = document.getElementById('puzzleArea');
    let content = `<div class="emoji">${puzzle.emoji}</div>`;
    
    if (isSolved(puzzle.answer)) {
      const answerText = Array.isArray(puzzle.answer) ? puzzle.answer[0] : puzzle.answer;
      content += `<div class="solved-answer">${answerText}</div>`;
      content += `<div class="solved-answer">${puzzle.author}</div>`;
    } else {
      content += `<br>`;
      const hintLevel = getHintLevel(puzzle.answer);
      if (hintLevel >= 1 && puzzle.hint1)  content += `<div class="emoji-hints">${puzzle.hint1}</div>`;
      if (hintLevel >= 2 && puzzle.hint2)  content += `<div class="text-hints">${puzzle.hint2}</div>`;
      if (hintLevel >= 3 && puzzle.author) content += `<div class="text-hints">${puzzle.author}</div>`;
  
      content += `<input type="text" id="userInput" placeholder="" oninput="checkAnswer()">`;
    }

    area.innerHTML = content;
    
    const hintLevel = getHintLevel(puzzle.answer);
    
    const hintBtn         = document.getElementById("hintBtn");
    const resetHintBtn    = document.getElementById("resetHintBtn");
    const revealAnswerBtn = document.getElementById("revealAnswerBtn");
    const unsolveBtn      = document.getElementById("unsolveBtn");

    hintBtn.disabled         = !shouldEnableHintButton(puzzle, hintLevel);
    resetHintBtn.disabled    = !shouldEnableResetHintButton(puzzle, hintLevel);
    revealAnswerBtn.disabled = isSolved(puzzle.answer);
    unsolveBtn.disabled      = !isSolved(puzzle.answer);
    
    updateHintTooltip();
  }

  function shouldEnableHintButton(puzzle, currentHintLevel) {
    const hasAnyHint = puzzle.hint1 || puzzle.hint2 || puzzle.author;
    const maxHintLevel = 3;
    return hasAnyHint && currentHintLevel < maxHintLevel && !isSolved(puzzle.answer);
  }

  function shouldEnableResetHintButton(puzzle, currentHintLevel) {
    const hasAnyHint = puzzle.hint1 || puzzle.hint2 || puzzle.author;
    return hasAnyHint && currentHintLevel > 0 && !isSolved(puzzle.answer);
  }
  
  
  function checkAnswer() {
    const inputEl = document.getElementById('userInput');
    const puzzleBox = document.getElementById('puzzleArea');
    const userInput = inputEl.value.toLowerCase().trim().replace(/\s+/g, " ");
    
    let answers = allPuzzles[currentGroup][currentPuzzle].answer;
    if (typeof answers === "string") answers = [answers];

    let isCorrect = false;
    for (let i = 0; i < answers.length; i++) {
      const correct = answers[i].toLowerCase().trim().replace(/\s+/g, " ");
      if (levenshteinDistance(userInput, correct) === 0) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      inputEl.disabled = true;
  
      if (!isSolved(allPuzzles[currentGroup][currentPuzzle].answer)) {
        solve(allPuzzles[currentGroup][currentPuzzle].answer);
        localStorage.setItem("solvedPuzzles", JSON.stringify(solved));
        updateProgress();
        renderGroupButtons(); // check if new group should unlock
      }

      puzzleBox.classList.add('solved');
  
      setTimeout(() => {
        const puzzles = allPuzzles[currentGroup];
        const length = puzzles.length;

        let nextUnsolved = -1;
        for (let i = currentPuzzle + 1; i < length; i++) {
          const normalized = normalizeAnswer(puzzles[i].answer);
          if (!solved[normalized]) {
            nextUnsolved = i;
            break;
          }
        }

        // If no unsolved puzzle is found after current, search from beginning
        if (nextUnsolved === -1) {
          for (let i = 0; i <= currentPuzzle; i++) {
            const normalized = normalizeAnswer(puzzles[i].answer);
            if (!solved[normalized]) {
              nextUnsolved = i;
              break;
            }
          }
        }

        // Fallback to current if all are solved
        currentPuzzle = nextUnsolved !== -1 ? nextUnsolved : currentPuzzle;

        loadPuzzle(true);

        setTimeout(() => {
          const nextInput = document.getElementById('userInput');
          if (nextInput && !nextInput.disabled) {
            nextInput.focus();
          }
        }, 100);
      }, 300);

    }
  }
  function nextPuzzle() {
    const puzzles = allPuzzles[currentGroup];

    const isSpecialGroup = !!unlockThresholds[currentGroup];
    const firstPuzzleSolved = isSolved(puzzles[0].answer);
    if (isSpecialGroup && !firstPuzzleSolved) return;
  
    currentPuzzle = (currentPuzzle + puzzles.length + 1) % puzzles.length;
    loadPuzzle(true);
  }
  
  function prevPuzzle() {
    const puzzles = allPuzzles[currentGroup];

    const isSpecialGroup = !!unlockThresholds[currentGroup];
    const firstPuzzleSolved = isSolved(puzzles[0].answer);
    if (isSpecialGroup && !firstPuzzleSolved) return;

    currentPuzzle = (currentPuzzle + puzzles.length - 1) % puzzles.length;
    loadPuzzle(true);
  }
  

  function updateProgress() {
    const container = document.getElementById('progressBoxes');
    container.innerHTML = '';
  
    const puzzles = allPuzzles[currentGroup];
    const isSpecialGroup = !!unlockThresholds[currentGroup];
    const isFirstSolved = isSolved(puzzles[0].answer);

    // ✅ If in a special group and solving the first puzzle, show lock icon only
    if (isSpecialGroup && !isFirstSolved) {
      const lockBox = document.createElement('div');
      lockBox.textContent = '🔒';
      lockBox.style.fontSize = '1.5em';
      lockBox.style.textAlign = 'center';
      container.appendChild(lockBox);
      return;
    }

    for (let i = 0; i < puzzles.length; i++) {
      const box = document.createElement('div');
      box.classList.add('progress-box');
      if (solved[normalizeAnswer(puzzles[i].answer)]) box.classList.add('solved');
      if (i === currentPuzzle) box.classList.add('current');
    
      container.appendChild(box);
    }    
  }  

  function unlockAll() {
    const groupButtons = document.querySelectorAll('.group-button');
  
    groupButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('locked');
  
      const groupName = btn.dataset.group;
      const puzzlesForGroup = allPuzzles[groupName];
      const key = groupName;
      const solvedList = solved[key] || [];
  
      const allSolved = solvedList.length === puzzlesForGroup.length &&
                        solvedList.every(x => x === true);
  
      // Update label
      let label = `${groupName}`;
      if (allSolved) {
        label += ' ✅';
      }
      btn.innerText = label;
    });
  }

  function resetProgress() {
    localStorage.removeItem('solvedPuzzles');
    localStorage.removeItem('hintLevels');
    solved = {};
    hintLevels = {};
  
    currentGroup = "Group I"; // Reset to first group
    currentPuzzle = 0;
  
    // Reset group button UI
    const allGroupButtons = document.querySelectorAll('.group-button');
    allGroupButtons.forEach(btn => btn.classList.remove('active'));
  
    const firstGroupButton = document.querySelector('.group-button[data-group="Group I"]');
    if (firstGroupButton) firstGroupButton.classList.add('active');
  
    renderGroupButtons();
    startGame();
  }
   

  function revealAnswer() {
    const puzzle = allPuzzles[currentGroup][currentPuzzle];
    const input = document.getElementById("userInput");
    if (!input || input.disabled) return;
  
    const answer = Array.isArray(puzzle.answer) ? puzzle.answer[0] : puzzle.answer;
    input.value = answer;
    checkAnswer();
  }

  function renderGroupButtons() {
    const container = document.getElementById("groupSelector");
    container.innerHTML = "";
  
    const groupKeys = Object.keys(allPuzzles);
  
    const regularGroups = groupKeys.filter(g => !unlockThresholds[g]);
    const specialGroups = groupKeys.filter(g => unlockThresholds[g]);
  
    // Regular Groups
    const separator = document.createElement("div");
    separator.className = "group-separator";
    separator.textContent = "📈 Progression";
    container.appendChild(separator);

    regularGroups.forEach((group, index) => {
      container.appendChild(createGroupButton(group, groupKeys, index));
    });
  
    // Add separator and label
    if (specialGroups.length > 0) {
      const separator = document.createElement("div");
      separator.className = "group-separator";
      separator.textContent = "📚 Series";
      container.appendChild(separator);
  
      specialGroups.forEach(group => {
        container.appendChild(createGroupButton(group, groupKeys));
      });
    }
  }
  
  function createGroupButton(group, groupKeys, index = 0) {
    const wrapper = document.createElement("div");
    wrapper.className = "group-button-wrapper";
  
    const btn = document.createElement("button");
    btn.textContent = group;
    btn.dataset.group = group;
    btn.classList.add("group-button");
  
    const isUnlocked = isGroupUnlocked(groupKeys, group);
    const isSolved = isGroupSolved(group);
  
    if (!isUnlocked) {
      btn.disabled = true;
      btn.textContent += " 🔒";
  
      const tooltip = document.createElement("div");
      tooltip.className = "group-tooltip";
  
      if (unlockThresholds[group]) {
        tooltip.textContent = `Unlocks after solving ${unlockThresholds[group]} total puzzles`;
      } else if (index > 0) {
        tooltip.textContent = `Unlocks after finishing ${Math.round(UNLOCK_THRESHOLD * 100)}% of ${groupKeys[index - 1]}`;
      }
  
      wrapper.appendChild(tooltip);
    } else if (isSolved) {
      btn.textContent += " ✅";
    }
  
    if (group === currentGroup) {
      btn.classList.add("active");
    }
  
    btn.onclick = () => {
      currentGroup = group;
      document.querySelectorAll(".group-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
  
      setTimeout(() => {
        const input = document.getElementById("userInput");
        if (input && !input.disabled) input.focus();
      }, 100);
  
      loadGroup(group);
    };
  
    wrapper.appendChild(btn);
    return wrapper;
  }
  
  
  function isGroupUnlocked(groupOrder, groupName) {
    // Always unlocked if it's the first group
    const idx = groupOrder.indexOf(groupName);
    if (idx === 0) return true;
  
    // Special groups unlocked by total progress
    if (unlockThresholds[groupName]) {
      const totalSolved = Object.keys(solved).filter(k => solved[k]).length;
      return totalSolved >= unlockThresholds[groupName];
    }
    
    const prevGroup = groupOrder[idx - 1];
    const total = allPuzzles[prevGroup].length;
    const correct = allPuzzles[prevGroup].filter(p => isSolved(p.answer)).length;
    
    return total > 0 && correct / total >= UNLOCK_THRESHOLD;
  }
  
  function loadGroup(group) {
    currentGroup = group;
  
    const puzzles = allPuzzles[currentGroup];
    let firstUnsolvedIndex = 0;
  
    // ✅ New logic for special groups
    const isSpecialGroup = !!unlockThresholds[group];
  
    if (isSpecialGroup) {
      const firstPuzzleKey = normalizeAnswer(puzzles[0].answer);
      const isFirstPuzzleSolved = solved[firstPuzzleKey];
  
      if (!isFirstPuzzleSolved) {
        currentPuzzle = 0;
      } else {
        // Look for the next unsolved puzzle after the first
        for (let i = 1; i < puzzles.length; i++) {
          const normalized = normalizeAnswer(puzzles[i].answer);
          if (!solved[normalized]) {
            firstUnsolvedIndex = i;
            break;
          }
        }
        currentPuzzle = firstUnsolvedIndex;
      }
  
    } else {
      // Original logic for regular groups
      for (let i = 0; i < puzzles.length; i++) {
        const normalized = normalizeAnswer(puzzles[i].answer);
        if (!solved[normalized]) {
          firstUnsolvedIndex = i;
          break;
        }
      }
      currentPuzzle = firstUnsolvedIndex;
    }
  
    loadPuzzle();
    renderGroupButtons(); // refresh unlocks
  }

  // function loadGroup(group) {
  //   currentGroup = group;
  
  //   // Find first unsolved puzzle by normalized answer
  //   let firstUnsolvedIndex = 0;
  //   for (let i = 0; i < allPuzzles[currentGroup].length; i++) {
  //     const normalized = normalizeAnswer(allPuzzles[currentGroup][i].answer);
  //     if (!solved[normalized]) {
  //       firstUnsolvedIndex = i;
  //       break;
  //     }
  //     if (i === allPuzzles[currentGroup].length - 1) {
  //       firstUnsolvedIndex = 0; // All solved, start from beginning
  //     }
  //   }
  
  //   currentPuzzle = firstUnsolvedIndex;
  
  //   loadPuzzle();
  //   renderGroupButtons(); // refresh unlocks
  // }  
    
  function generateShareableProgress() {
    let totalSolved = 0;
    let totalCount = 0;
    let output = "📚 BookGuesser Progress\n\n";
  
    const groups = Object.keys(allPuzzles);
    for (let group of groups) {
      const puzzles = allPuzzles[group];
      const line = puzzles.map(p =>
        isSolved(p.answer) ? "✅" : "❌"
      ).join("");
      const solvedCount = puzzles.filter(p => isSolved(p.answer)).length;
  
      output += `${group}   ${line}\n`;
      totalSolved += solvedCount;
      totalCount += puzzles.length;
    }
  
    output += `\nSolved ${totalSolved} of ${totalCount} puzzles 🔍\n`;
    // output += "bookguesser.com"; // <- you can update this URL
  
    return output;
  }
  
  function shareProgress() {
    const text = generateShareableProgress();
    navigator.clipboard.writeText(text).then(() => {
      alert("Progress copied to clipboard! 📋");
    });
  }
  
  document.addEventListener('keydown', function (event) {
    // Ignore if focus is on input
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'INPUT') return;
  
    if (event.key === 'ArrowLeft') {
      prevPuzzle();
    } else if (event.key === 'ArrowRight') {
      nextPuzzle();
    }
  });

function setHintLevel(title, level) {
    hintLevels[normalizeAnswer(title)] = level;
    localStorage.setItem("hintLevels", JSON.stringify(hintLevels));
}
function getHintLevel(title) {
    return hintLevels[normalizeAnswer(title)] || 0;
}

function addHint() {
  let hintLevel = getHintLevel(allPuzzles[currentGroup][currentPuzzle].answer)
  if (hintLevel < 3) {
      setHintLevel(allPuzzles[currentGroup][currentPuzzle].answer, hintLevel+1);
      updatePuzzleHTML();
    }
  }
  
function resetHints() {
    setHintLevel(allPuzzles[currentGroup][currentPuzzle].answer, 0);
    updatePuzzleHTML();
}
function updateHintTooltip() {
  const tooltip = document.getElementById("hintTooltip");
  const puzzle = allPuzzles[currentGroup][currentPuzzle];
  const hintLevel = getHintLevel(puzzle.answer);

  if (isSolved(puzzle.answer)) {
    tooltip.textContent = "Puzzle solved";
  } else if (hintLevel === 0 && puzzle.hint1) {
    tooltip.textContent = "Reveal in-between words";
  } else if (hintLevel === 1 && puzzle.hint2) {
    tooltip.textContent = "Reveal word lengths";
  } else if (hintLevel === 2 && puzzle.author) {
    tooltip.textContent = "Reveal the author";
  } else if (puzzle.hint1) {
    tooltip.textContent = "No more hints available";
  } else {
    tooltip.textContent = "No hints available";
  }
}

function unsolveCurrentPuzzle() {
  const puzzle = allPuzzles[currentGroup][currentPuzzle];
  const key = normalizeAnswer(puzzle.answer);
  if (solved[key]) {
    delete solved[key];
    localStorage.setItem("solvedPuzzles", JSON.stringify(solved));
    loadPuzzle();
    renderGroupButtons();
  }
}
  
startGame();
loadGroup(currentGroup);
