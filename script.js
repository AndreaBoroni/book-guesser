/*
Book ideas:
twilight
To kill a mockingbird
The Three Musketeers
the return of the king
moby dick
clockwork angel
big little lies
the zombie room

the war of the worlds
the time machine
the invisible man

the wheel of time
the eye of the world
the great hunt
the dragon reborn
the shadow rising
the fires of heaven
lord of chaos
a crown of swords
the path of daggers
winter's heart
crossreads of twilight
new spring
knife of dreams
the gathering storm
towers of midnight
a memory of light

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
// { emoji: "🦁➕🧙🏻‍♀️➕(👕👗👔🗄️)", answer: "the lion the witch and the wardrobe" },

const UNLOCK_THRESHOLD = 0.6;

// { emoji: "[🍈®️]🔀", answer: "oliver twist" },
// { emoji: "2️⃣♜", answer: "the two towers" },
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


const allPuzzles = {
  "i": [
    { emoji: "1️⃣9️⃣8️⃣4️⃣", answer: "1984", hint1: "1️⃣9️⃣8️⃣4️⃣", hint2: "_ _ _ _", author: "George Orwell" },
    { emoji: "🤴💍s", answer: "the lord of the rings", hint1: "the 🤴 of the 💍s", hint2: "the _ _ _ _ of the _ _ _ _ _", author: "J. R. R. Tolkien" },
    { emoji: "🛣️", answer: "the road", hint1: "the 🛣️", hint2: "the _ _ _ _", author: "Cormac McCarthy" },
    { emoji: "🤏🤴", answer: "the little prince", hint1: "the 🤏 🤴", hint2: "the _ _ _ _ _ _    _ _ _ _ _ _", author: "Antoine de Saint-Exupéry" },
    { emoji: "⚔️➕☮️", answer: "war and peace", hint1: "⚔️ and ☮️", hint2: "_ _ _ and _ _ _ _ _", author: "Leo Tolstoy" },
    { emoji: "👴➕🌊", answer: "the old man and the sea", hint1: "the 👴 and the 🌊", hint2: "the _ _ _   _ _ _ and the _ _ _", author: "Ernest Hemingway" },
    { emoji: "(🤏⛰️🏜️)", answer: "dune", hint1: "(🤏⛰️🏜️)", hint2: "_ _ _ _", author: "Frank Herbert" },
    { emoji: "(🙅🍽️)(🎲🎮)s", answer: "the hunger games", hint1: "the (🙅🍽️) (🎲🎮)s", hint2: "the _ _ _ _ _ _   _ _ _ _ _", author: "Suzanne Collins" },
    { emoji: "🟩🥚s➕🍖", answer: "green eggs and ham", hint1: "🟩 🥚s and 🍖", hint2: "_ _ _ _ _   _ _ _ _ and _ _ _", author: "Dr. Seuss" },
    { emoji: "[💧🚢]👇", answer: "watership down", hint1: "[💧🚢] 👇", hint2: "_ _ _ _ _ _ _ _ _   _ _ _ _", author: "Richard Adams" },
  ],
  "ii": [
    { emoji: "🐁s➕👨s", answer: "of mice and men", hint1: "of 🐁s and 👨s", hint2: "of _ _ _ _ and _ _ _", author: "John Steinbeck" },
    { emoji: "👼s➕😈s", answer: "angels and demons", hint1: "👼s and 😈s", hint2: "_ _ _ _ _ _ and _ _ _ _ _ _", author: "Dan Brown" },
    { emoji: "♾️(🤡💬😂)", answer: "infinite jest", hint1: "♾️ (🤡💬😂)", hint2: "_ _ _ _ _ _ _ _   _ _ _ _", author: "David Foster Wallace" },
    { emoji: "(🐷🐮🐔)(🚜🌾👨‍🌾🏡)", answer: "animal farm", hint1: "(🐷🐮🐔) (🚜🌾👨‍🌾🏡)", hint2: "_ _ _ _ _ _   _ _ _ _", author: "George Orwell" },
    { emoji: "🙋‍♂️🤖", answer: ["i robot", "i, robot"], hint1: "🙋‍♂️, 🤖", hint2: "_,  _ _ _ _ _", author: "Isaac Asimov" },
    { emoji: "🤖s(🛌💭)⚡🐏❓", answer: "do androids dream of electric sheep?", hint1: "do 🤖s (🛌💭) of ⚡ 🐏?", hint2: "do _ _ _ _ _ _ _ _   _ _ _ _ _ of _ _ _ _ _ _ _ _   _ _ _ _ _?", author: "Philip K. Dick" },
    { emoji: "👧🐉(⬛💧✒️💪)", answer: "the girl with with the dragon tattoo", hint1: "the 👧 with the 🐉 (⬛💧✒️💪)", hint2: "the _ _ _ _ with the _ _ _ _ _ _   _ _ _ _ _ _", author: "Stieg Larsson" },
    { emoji: "🏙️", answer: "city", hint1: "🏙️", hint2: "_ _ _ _", author: "Clifford D. Simak" },
    { emoji: "📜(🤏🏙️)s", answer: "paper towns", hint1: "📜 (🤏🏙️)s", hint2: "_ _ _ _ _  _ _ _ _ _", author: "John Green" },
    { emoji: "🤏👩s", answer: "little women", hint1: "🤏 👩s", hint2: "_ _ _ _ _ _  _ _ _ _ _", author: "Louisa May Alcott" }
  ],
  "iii": [
    { emoji: "(👋😢)💪s", answer: "a farewell to arms", hint1: "a (👋😢) to 💪s", hint2: "a _ _ _ _ _ _ _ to _ _ _ _", author: "Ernest Hemingway"},
    { emoji: "🏰", answer: "the castle", hint1: "the 🏰", hint2: "the _ _ _ _ _ _", author: "Franz Kafka" },
    { emoji: "🎣2️⃣2️⃣", answer: ["catch-22", "catch 22"], hint1: "🎣-2️⃣2️⃣", hint2: "_ _ _ _ _ - _ _", author: "Joseph Heller" },
    { emoji: "🥇🧭", answer: "the golden compass", hint1: "the 🥇 🧭", hint2: "the _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Philip Pullman" },
    { emoji: "👧🔛🚅", answer: "the girl on the train", hint1: "the 👧 on the 🚅", hint2: "the   _ _ _ _ on the _ _ _ _ _", author: "Paula Hawkins" },
    { emoji: "(💎💰🎁)(🌊🏝️🌊)", answer: "treasure island", hint1: "(💎💰🎁) (🌊🏝️🌊)", hint2: "_ _ _ _ _ _ _ _   _ _ _ _ _ _", author: "Robert Louis Stevenson" },
    { emoji: "🤴🦟s", answer: "lord of the flies", hint1: "🤴 of the 🦟s", hint2: "_ _ _ _ of the _ _ _ _ _", author: "William Golding" },
    { emoji: "🪁🏃", answer: "the kite runner", hint1: "the 🪁 🏃", hint2: "the _ _ _ _   _ _ _ _ _ _", author: "Khaled Hosseini" },
    { emoji: "5️⃣0️⃣🕶️(⬜↔️⬛)", answer: ["fifty shades of gray", "50 shades of gray"], hint1: "5️⃣0️⃣ 🕶️ of (⬜↔️⬛)", hint2: "_ _ _ _ _   _ _ _ _ _ _ of _ _ _ _", author: "E. L. James" },
    { emoji: "(👨👍🚘)📋🌌", answer: "the hitchhiker's guide to the galaxy", hint1: "the (👨👍🚘)'s 📋 to the 🌌", hint2: "the _ _ _ _ _ _ _ _ _ _'s _ _ _ _ _ to the _ _ _ _ _ _", author: "Douglas Adams"  }
  ],
  "iv": [
    { emoji: "🍇🤬", answer: "the grapes of wrath", hint1: "the 🍇 of 🤬", hint2: "the _ _ _ _ _ _ of _ _ _ _ _", author: "John Steinbeck" },
    { emoji: "🌃(📚🏠)", answer: "the midnight library", hint1: "the 🌃 (📚🏠)", hint2: "the _ _ _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Matt Haig" },
    { emoji: "[🕓(💼🛠️👨‍💻)]🍊", answer: "a clockwork orange", hint1: "a [🕓(💼🛠️👨‍💻)] 🍊", hint2: "a _ _ _ _ _ _ _ _ _   _ _ _ _ _ _", author: "Anthony Burgess" },
    { emoji: "[(🐄🔪🥩)🏠]5️⃣", answer: ["slaughterhouse-five", "slaughter-house 5", "slaughterhouse-5"], hint1: "[(🐄🔪🥩)🏠]-5️⃣", hint2: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ - _ _ _ _", author: "Kurt Vonnegut" },
    { emoji: "[(✒️⚫💧)❤️]", answer: "inkheart", hint1: "[(✒️⚫💧)❤️]", hint2: "_ _ _ _ _ _ _ _", author: "Cornelia Funke" },
    { emoji: "(💻👨‍💻🌐)", answer: "it", hint1: "(💻👨‍💻🌐)", hint2: "_ _", author: "Stephen King" },
    { emoji: "[⛲🙂]", answer: "the fountainhead", hint1: "the [⛲🙂]", hint2: "the _ _ _ _ _ _ _ _ _ _ _ _", author: "Ayn Rand" },
    { emoji: "👧(🦪⚪)[👂💍]", answer: "girl with a pearl earring", hint1: "👧 with a (🦪⚪) [👂💍]", hint2: "_ _ _ _ with a _ _ _ _ _   _ _ _ _ _ _ _", author: "Tracy Chevalier" },
    { emoji: "[🟨🙂]", answer: "yellowface", hint1: "[🟨🙂]", hint2: " _ _ _ _ _ _ _ _ _ _", author: "R. F. Kuang" },
    { emoji: "👸👰", answer: "the princess bride", hint1: "the 👸 👰", hint2: "the _ _ _ _ _ _ _ _   _ _ _ _ _", author: "William Goldman"  }
  ],
  "v": [
    { emoji: "🐱➡️🎩", answer: "the cat in the hat", hint1: "the 🐱 in the 🎩", hint2: "the _ _ _ in the _ _ _", author: "Dr. Seuss" },
    { emoji: "(👨🎲🎮)(🎲🎮)s", answer: "the player of games", hint1: "the (👨🎲🎮) of (🎲🎮)s", hint2: "the _ _ _ _ _ _ of _ _ _ _ _", author: "Iain M. Banks" },
    { emoji: "1️⃣0️⃣0️⃣0️⃣✨☀️s", answer: ["a thousand splendid suns", "1000 splendid suns"]  , hint1: "a 1️⃣0️⃣0️⃣0️⃣ ✨ ☀️s", hint2: "a _ _ _ _ _ _ _ _   _ _ _ _ _ _ _ _   _ _ _ _", author: "Khaled Hosseini" },
    { emoji: "1️⃣(✈️🦅🪂)⬆️🐦(🐦🏡)", answer: "one flew over the cuckoo's nest", hint1: "1️⃣ (✈️🦅🪂) over the 🐦's (🐦🏡)", hint2: "_ _ _   _ _ _ _ over the _ _ _ _ _ _'s _ _ _ _", author: "Ken Kesey" },
    { emoji: "➡️🥶🩸", answer: "in cold blood", hint1: "in 🥶 🩸", hint2: "in _ _ _ _   _ _ _ _ _", author: "Truman Capote" },
    { emoji: "🐱(👶🛌🏻)", answer: "cat's cradle", hint1: "🐱's (👶🛌🏻)", hint2: "_ _ _'s _ _ _ _ _ _", author: "Kurt Vonnegut" },
    { emoji: "[🩸🎵]", answer: "bloodmusic", hint1: "[🩸🎵]", hint2: "_ _ _ _ _ _ _ _ _ _", author: "Greg Bear" },
    { emoji: "🤫(🤕🏥)", answer: "the silent patient", hint1: "the 🤫 (🤕🏥)", hint2: "the _ _ _ _ _ _   _ _ _ _ _ _ _", author: "Alex Michaelides" },
    { emoji: "(🌍🧲🍎)🌈", answer: "gravity's rainbow", hint1: "(🌍🧲🍎)'s 🌈", hint2: "_ _ _ _ _ _ _'s _ _ _ _ _ _ _", author: "Thomas Pynchon" },
    { emoji: "🏙️🦴", answer: "city of bones", hint1: "🏙️ of 🦴s", hint2: "_ _ _ _ of _ _ _ _ _", author: "Cassandra Clare"  }
  ],
  "vi": [
    { emoji: "✨", answer: "the shining", hint1: "the ✨", hint2: "the _ _ _ _ _ _ _", author: "Stephen King" },
    { emoji: "⏳(👨🧳)👰", answer: "the time traveler's wife", hint1: "the ⏳ (👨🧳)'s 👰", hint2: "the _ _ _ _   _ _ _ _ _ _ _ _'s _ _ _ _", author: "Audrey Niffenegger" },
    { emoji: "(👨🔩➡️🥇)", answer: "the alchemist", hint1: "the (👨🔩➡️🥇)", hint2: "the _ _ _ _ _ _ _ _ _", author: "Paulo Coelho" },
    { emoji: "🦊➡️🧦", answer: "fox in socks", hint1: "🦊 in 🧦", hint2: "_ _ _ in _ _ _ _ _", author: "Dr. Seuss" },
    { emoji: "❄️(🚗💥🚗)", answer: "snow crash", hint1: "❄️ (🚗💥🚗)", hint2: "_ _ _ _   _ _ _ _ _", author: "Neal Stephenson" },
    { emoji: "🌍🤷‍♀️", answer: "atlas shrugged", hint1: "🌍 🤷‍♀️", hint2: "_ _ _ _ _   _ _ _ _ _ _ _ _", author: "Ayn Rand" },
    { emoji: "1️⃣🐟2️⃣🐟🟥🐟🟦🐟", answer: "one fish two fish red fish blue fish", hint1: "1️⃣ 🐟 2️⃣ 🐟 🟥 🐟 🟦 🐟", hint2: "_ _ _   _ _ _ _   _ _ _   _ _ _ _   _ _ _   _ _ _ _   _ _ _ _   _ _ _ _", author: "Dr. Seuss" },
    { emoji: "🎨🟪", answer: "the color purple", hint1: "the 🎨 🟪", hint2: "the _ _ _ _ _   _ _ _ _ _ _", author: "Alice Walker" },
    { emoji: "🚶2️⃣🌙s", answer: "walk two moons", hint1: "🚶 2️⃣ 🌙s", hint2: "_ _ _ _   _ _ _   _ _ _ _ _", author: "Sharon Creech"  }
  ],
  // "vii": [
    // { emoji: "(1️⃣⏳)➕(🔜⏳)🤴", answer: "the once and future king", hint1: "", hint2: "", author: "" },
  // ],
  // "viii": [
  // ],
  // "ix": [
  // ],
  // "x": [
  // ],
  "acotar": [
    { emoji: "(👩🏻‍⚖️⚖️🏛️)(🌵🥀)s➕🌹s", answer: "a court of thorns and roses", hint1: "", hint2: "", author: "" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🌫️➕😡", answer: "a court of mist and fury", hint1: "", hint2: "", author: "" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)(🕊️💪)s➕🏚️", answer: "a court of wings and ruin", hint1: "", hint2: "", author: "" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🥶➕(⭐💡)", answer: "a court of frost and starlight", hint1: "", hint2: "", author: "" },
    { emoji: "(👩🏻‍⚖️⚖️🏛️)🥈🔥s", answer: "a court of silver flames", hint1: "", hint2: "", author: "" },
  ],
  "asoiaf": [
    { emoji: "(♫♪♫)🧊➕🔥", answer: "a song of ice and fire", hint1: "", hint2: "", author: "" },
    { emoji: "(🎲🎮)(👑🪑)s", answer: "a game of thrones", hint1: "", hint2: "", author: "" },
    { emoji: "(🗡️💥🗡️)🤴s", answer: "a clash of kings", hint1: "", hint2: "", author: "" },
    { emoji: "🌪️⚔️", answer: "a storm of swords", hint1: "", hint2: "", author: "" },
    { emoji: "(🍽️🎉🥂)(🐦‍⬛)", answer: "a feast for crows", hint1: "", hint2: "", author: "" },
    { emoji: "(💃🏻🕺🏽)🐉s", answer: "a dance with dragons", hint1: "", hint2: "", author: "" },
  ]
};

const unlockThresholds = {
  "acotar": 20,
  "asoiaf": 30,
};

let currentGroup = "i"; // default group
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
  puzzles = allPuzzles[currentGroup];

  // Find first unsolved puzzle by normalized answer
  let firstUnsolvedIndex = 0;
  for (let i = 0; i < puzzles.length; i++) {
    const normalized = normalizeAnswer(puzzles[i].answer);
    if (!solved[normalized]) {
      firstUnsolvedIndex = i;
      break;
    }
    // If all are solved, default to first
    if (i === puzzles.length - 1) {
      firstUnsolvedIndex = 0;
    }
  }

  
  currentPuzzle = firstUnsolvedIndex;
  loadPuzzle(false);
  updateProgress();
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
    
    updateButtons();
  }  
  
  function updatePuzzleHTML() {
    const puzzle = allPuzzles[currentGroup][currentPuzzle];
    const area = document.getElementById('puzzleArea');
    let content = `<div class="emoji">${puzzle.emoji}</div>`;
  
    if (isSolved(puzzle.answer)) {
      const answerText = Array.isArray(puzzle.answer) ? puzzle.answer[0] : puzzle.answer;
      content += `<div class="solved-answer">${answerText}</div>`;
    } else {
      
      content += `<br>`;
      const hintLevel = getHintLevel(puzzle.answer);
      if (hintLevel >= 1 && puzzle.hint1)  content += `<div class="emoji-hints">${puzzle.hint1}</div>`;
      if (hintLevel >= 2 && puzzle.hint2)  content += `<div class="text-hints">${puzzle.hint2}</div>`;
      if (hintLevel >= 3 && puzzle.author) content += `<div class="text-hints">Author: ${puzzle.author}</div>`;
  
      content += `<input type="text" id="userInput" placeholder="Your guess" oninput="checkAnswer()">`;
    }
  
    area.innerHTML = content;
    
    const hintLevel = getHintLevel(puzzle.answer);
    const hintBtn     = document.getElementById("hintBtn");
    const resetHintBtn = document.getElementById("resetHintBtn");
    hintBtn.disabled      = !shouldEnableHintButton(puzzle, hintLevel);
    resetHintBtn.disabled = !shouldEnableResetHintButton(puzzle, hintLevel);
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
        if (currentPuzzle < allPuzzles[currentGroup].length - 1) {
          currentPuzzle++;
        }
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
  
  
  function prevPuzzle() {
    if (currentPuzzle > 0) {
      currentPuzzle--;
      loadPuzzle(true);
    }
  }
  
  function nextPuzzle() {
    if (currentPuzzle < puzzles.length - 1) {
      currentPuzzle++;
      loadPuzzle(true);
    }
  }

  function updateProgress() {
    const total = allPuzzles[currentGroup].length;
    const solvedCount = allPuzzles[currentGroup].filter(p => isSolved(p.answer)).length;
    const percentage = (solvedCount / total) * 100;

    document.getElementById('progressBar').style.width = percentage + '%';


    const groupNames = Object.keys(allPuzzles);
    const currentIndex = groupNames.indexOf(currentGroup);
    const nextGroup = groupNames[currentIndex + 1];
    const unlockMessage = document.getElementById('unlockMessage');
  
    if (nextGroup) {
      const puzzlesInGroup = allPuzzles[currentGroup];
      let solvedCount = 0;
  
      for (let puzzle of puzzlesInGroup) {
        const key = normalizeAnswer(puzzle.answer);
        if (solved[key]) {
          solvedCount++;
        }
      }
  
      const total = puzzlesInGroup.length;
      const progressRatio = solvedCount / total;
  
      if (progressRatio < UNLOCK_THRESHOLD) {
        const needed = Math.ceil(UNLOCK_THRESHOLD * total) - solvedCount;
        unlockMessage.textContent = `Solve ${needed} more to unlock Group ${nextGroup.toUpperCase()}`;
      } else {
        unlockMessage.textContent = `✅ Group ${nextGroup.toUpperCase()} unlocked!`;
      }
    } else {
      unlockMessage.textContent = "";
    }
  }
  
  function updateButtons() {
    document.getElementById('prevBtn').disabled = (currentPuzzle === 0);
    document.getElementById('nextBtn').disabled = (currentPuzzle === allPuzzles[currentGroup].length - 1);
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
      let label = `Group ${groupName.toUpperCase()}`;
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
  
    currentGroup = "i"; // Reset to first group
    currentPuzzle = 0;
  
    // Reset group button UI
    const allGroupButtons = document.querySelectorAll('.group-button');
    allGroupButtons.forEach(btn => btn.classList.remove('active'));
  
    const firstGroupButton = document.querySelector('.group-button[data-group="i"]');
    if (firstGroupButton) firstGroupButton.classList.add('active');
  
    // Recalculate puzzles and go to first unsolved
    const unsolvedIndex = allPuzzles[currentGroup].findIndex(p => !solved[normalizeAnswer(p.answer)]);
    currentPuzzle = unsolvedIndex === -1 ? 0 : unsolvedIndex;
  
    renderGroupButtons();
    startGame();
    updateProgress();
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
    separator.textContent = "📅 Progression";
    container.appendChild(separator);

    regularGroups.forEach((group, index) => {
      container.appendChild(createGroupButton(group, groupKeys, unlockThresholds, index));
    });
  
    // Add separator and label
    if (specialGroups.length > 0) {
      const separator = document.createElement("div");
      separator.className = "group-separator";
      separator.textContent = "💎 Special Groups";
      container.appendChild(separator);
  
      specialGroups.forEach(group => {
        container.appendChild(createGroupButton(group, groupKeys, unlockThresholds));
      });
    }
  }
  
  function createGroupButton(group, groupKeys, unlockThresholds, index = 0) {
    const wrapper = document.createElement("div");
    wrapper.className = "group-button-wrapper";
  
    const btn = document.createElement("button");
    btn.textContent = `Group ${group.toUpperCase()}`;
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
        tooltip.textContent = `Unlocks after finishing ${Math.round(UNLOCK_THRESHOLD * 100)}% of Group ${groupKeys[index - 1].toUpperCase()}`;
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
  
    // Find first unsolved puzzle by normalized answer
    let firstUnsolvedIndex = 0;
    for (let i = 0; i < allPuzzles[currentGroup].length; i++) {
      const normalized = normalizeAnswer(allPuzzles[currentGroup][i].answer);
      if (!solved[normalized]) {
        firstUnsolvedIndex = i;
        break;
      }
      if (i === allPuzzles[currentGroup].length - 1) {
        firstUnsolvedIndex = 0; // All solved, start from beginning
      }
    }
  
    currentPuzzle = firstUnsolvedIndex;
  
    loadPuzzle();
    updateProgress();
    renderGroupButtons(); // refresh unlocks
  }  
    
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
  
      output += `Group ${group.toUpperCase()}   ${line}\n`;
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

  
startGame();
renderGroupButtons();
loadGroup(currentGroup);
