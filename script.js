/*
Book ideas:
twilight
To kill a mockingbird
the wheel of time
The Three Musketeers
the return of the king
moby dick

the war of the worlds
the time machine
the invisible man
*/


// { emoji: "2️⃣♜", answer: "the two towers" },
// { emoji: "(♫♪♫)🧊➕🔥", answer: "a song of ice and fire" },

const UNLOCK_THRESHOLD = 0.6;

const allPuzzles = {
  "i": [
    { emoji: "🤴🏻💍s", answer: "the lord of the rings" },
    { emoji: "1️⃣9️⃣8️⃣4️⃣", answer: "1984" },
    { emoji: "👼s➕😈s", answer: "angels and demons" },
    { emoji: "🤏🤴🏻", answer: "the little prince" },
    { emoji: "👴➕🌊", answer: "the old man and the sea" },
    { emoji: "(🐷🐮🐔)(🚜🌾👨‍🌾🏡)", answer: "animal farm" },
  ],
  "ii": [
    { emoji: "(🙅🍽️)(🎮🎲)", answer: "the hunger games" },
    { emoji: "🙋‍♂️🤖", answer: ["i robot", "i, robot"]},
    { emoji: "⚙️🍊", answer: "a clockwork orange" },
    { emoji: "5️⃣0️⃣🌫️(⚪↔️⚫)", answer: "50 shades of gray" },
    { emoji: "🏰", answer: "the castle" },
    { emoji: "⚔️➕☮︎", answer: "war and peace" },
  ],
  "iii": [
    { emoji: "🎣2️⃣2️⃣", answer: ["catch-22", "catch 22"] },
    { emoji: "(🐄🔪🥩)🏠5️⃣", answer: ["slaughterhouse 5", "slaughter-house 5", "slaughterhouse-5"]},
    { emoji: "🥇🧭", answer: "the golden compass" },
    { emoji: "(💎💰🎁)(🌊🏝️🌊)", answer: "treasure island" },
    { emoji: "🐁s(🧔🏻‍♂️)s", answer: "of mice and men" },
    { emoji: "🤴🏻🦟s", answer: "lord of the flies" },
  ],
  "iv": [
    { emoji: "🍇🤬", answer: "the grapes of wrath" },
    { emoji: "(🍈®️)🔀", answer: "oliver twist" },
    { emoji: "🪁🏃", answer: "the kite runner" },
    { emoji: "🤏(👩🏻♀️)s", answer: "little women" },
    { emoji: "(✒️⚫💧)❤️", answer: "inkheart" },
    { emoji: "🦁➕🧙🏻‍♀️➕(👕👗👔🗄️)", answer: "the lion the witch and the wardrobe" },
  ],
  "v": [
    { emoji: "🛣️", answer: "the road" },
    { emoji: "🤖s (🛌💭)⚡🐏❓", answer: "do androids dream of electric sheep?" },
    { emoji: "(💻👨🏻‍💻🌐)", answer: "it" },
    { emoji: "🐱(👶🛌🏻)", answer: "cat's cradle" },
    { emoji: "⛲🙂", answer: "the fountainhead" },
    { emoji: "🌃(📚🏠)", answer: "the midnight library" },
  ],
  "vi": [
    { emoji: "🩸🎵", answer: "bloodmusic" },
    { emoji: "🤐🤕", answer: "the silent patient" },
    { emoji: "👧🏻🦪(👂🏻💍)", answer: "girl with a pearl earring" },
    { emoji: "👧🏻🔛🚅", answer: "the girl on the train" },
    { emoji: "✨", answer: "the shining" },
    { emoji: "📜🏙️s", answer: "paper towns" },
  ],
  "vii": [
    { emoji: "⏳(🧑🏻🧳)👰🏻", answer: "the time traveler's wife" },
    { emoji: "🌍🤷‍♀️", answer: "atlas shrugged" },
    { emoji: "🚶2️⃣🌙s", answer: "walk two moons" },
    { emoji: "🤏🏠(❌🤏)(🌲🌳)", answer: "little house in the big woods" },
    { emoji: "🍫⚔️", answer: "the chocolate war" },
    { emoji: "🥈🪑", answer: "the silver chair" },
  ],
  "viii": [
    { emoji: "💦🐘s", answer: "water for elephants" },
    { emoji: "🟥✉️", answer: "the scarlet letter" },
    { emoji: "🏏⏳⬛", answer: "the cricket in times square" },
    { emoji: "❄️(🚗💥🚗)", answer: "snow crash" },
  ]
};

let currentGroup = "i"; // default group
let puzzles = allPuzzles[currentGroup];
let solved = JSON.parse(localStorage.getItem("solvedPuzzles")) || {};
let currentPuzzle = 0;

// Initialize solved list for current group if missing
for (let i = 0; i < Object.keys(allPuzzles).length; i++) {
  if (!solved[Object.keys(allPuzzles)[i]]) {
    solved[Object.keys(allPuzzles)[i]] = Array(puzzles.length).fill(false);
  }
}

// Find first unsolved puzzle
const solvedList = solved[currentGroup] || [];
const firstUnsolvedIndex = solvedList.findIndex(s => !s);

// If current group is fully solved, try to go to next unlocked group
if (firstUnsolvedIndex === -1) {
  const groupKeys = Object.keys(allPuzzles);
  const currentIndex = groupKeys.indexOf(currentGroup);

  for (let i = currentIndex + 1; i < groupKeys.length; i++) {
    const nextGroup = groupKeys[i];
    const nextSolvedList = solved[nextGroup] || [];
    const nextUnsolvedIndex = nextSolvedList.findIndex(s => !s);
    if (nextUnsolvedIndex !== -1) {
      currentGroup = nextGroup;
      currentPuzzle = nextUnsolvedIndex;
      break;
    }
  }
} else {
  currentPuzzle = firstUnsolvedIndex;
}

function startGame() {
  puzzles = allPuzzles[currentGroup];

  if (!solved[currentGroup]) {
    solved[currentGroup] = Array(puzzles.length).fill(false);
  }

  const solvedList = solved[currentGroup];
  const firstUnsolvedIndex = solvedList.findIndex(s => !s);
  currentPuzzle = firstUnsolvedIndex === -1 ? 0 : firstUnsolvedIndex;

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
  
    const key = currentGroup;
  
    const isSolved = solved[key] && solved[key][currentPuzzle];
  
    if (animated) {
      area.classList.add('hide');
      setTimeout(() => {
        updatePuzzleHTML();
        area.classList.remove('hide');
  
        if (isSolved) {
          area.classList.add('solved');
        }
      }, 100);
    } else {
      updatePuzzleHTML();
  
      if (isSolved) {
        area.classList.add('solved');
      }
    }
    
    updateButtons();
  }  
  
  function updatePuzzleHTML() {
    const puzzle = puzzles[currentPuzzle];
    const area = document.getElementById('puzzleArea');
    const key = currentGroup;
    const isSolved = solved[key] && solved[key][currentPuzzle];
  
    let content = `<div class="emoji">${puzzle.emoji}</div>`;
  
    if (isSolved) {
      let answerText = Array.isArray(puzzle.answer) ? puzzle.answer[0] : puzzle.answer;
      content += `<div class="solved-answer">${answerText}</div>`;
    } else {
      content += `<input type="text" id="userInput" placeholder="Your guess" oninput="checkAnswer()">`;
    }
  
    area.innerHTML = content;
  }
  

  
  function checkAnswer() {
    const inputEl = document.getElementById('userInput');
    const puzzleBox = document.getElementById('puzzleArea');
    const userInput = inputEl.value.toLowerCase().trim().replace(/\s+/g, " ");
    
    let answers = puzzles[currentPuzzle].answer;
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
  
      const key = currentGroup;
      if (!solved[key][currentPuzzle]) {
        solved[key][currentPuzzle] = true;
        localStorage.setItem("solvedPuzzles", JSON.stringify(solved));
        updateProgress();
        renderGroupButtons(); // check if new group should unlock
      }

  
      puzzleBox.classList.add('solved');
  
      setTimeout(() => {
        if (currentPuzzle < puzzles.length - 1) {
          currentPuzzle++;
          loadPuzzle(true);
          setTimeout(() => {
            const nextInput = document.getElementById('userInput');
            if (nextInput && !nextInput.disabled) {
              nextInput.focus();
            }
          }, 100);
        }
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
    const key = currentGroup;
    const total = puzzles.length;
    const solvedCount = solved[key] ? solved[key].filter(x => x).length : 0;
    const percentage = (solvedCount / total) * 100;
    document.getElementById('progressBar').style.width = percentage + '%';

    const groupNames = Object.keys(allPuzzles);
    const currentIndex = groupNames.indexOf(currentGroup);
    const nextGroup = groupNames[currentIndex + 1];
    const unlockMessage = document.getElementById('unlockMessage');

    if (nextGroup) {
      const currentKey = currentGroup;
      const currentSolvedList = solved[currentKey] || [];
      const currentTotal = allPuzzles[currentGroup].length;
      const currentSolvedCount = currentSolvedList.filter(x => x).length;
      const progressRatio = currentSolvedCount / currentTotal;

      if (progressRatio < UNLOCK_THRESHOLD) {
        const needed = Math.ceil(UNLOCK_THRESHOLD * currentTotal) - currentSolvedCount;
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
    document.getElementById('nextBtn').disabled = (currentPuzzle === puzzles.length - 1);
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
    solved = {};
  
    currentGroup = "i"; // Reset to first group
    currentPuzzle = 0;
  
    // Reset group button UI
    const allGroupButtons = document.querySelectorAll('.group-button');
    allGroupButtons.forEach(btn => btn.classList.remove('active'));
  
    const firstGroupButton = document.querySelector('.group-button[data-group="i"]');
    if (firstGroupButton) firstGroupButton.classList.add('active');
  
    startGame();
    updateProgress();
    renderGroupButtons();
  }  

  function revealAnswer() {
    const puzzle = puzzles[currentPuzzle];
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
    groupKeys.forEach((group, index) => {
      const btn = document.createElement("button");
      btn.textContent = `Group ${group.toUpperCase()}`;
      btn.dataset.group = group;
      btn.classList.add("group-button");
  
      const isUnlocked = isGroupUnlocked(groupKeys, group);
      const isSolved = isGroupSolved(group);
  
      if (!isUnlocked) {
        btn.disabled = true;
        btn.textContent += " 🔒";
      } else if (isSolved) {
        btn.textContent += " ✅";
      }
  
      // Highlight currently selected group
      if (group === currentGroup) {
        btn.classList.add("active");
      }
  
      btn.onclick = () => {
        currentGroup = group;
  
        // Remove active class from all buttons
        document.querySelectorAll(".group-button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        setTimeout(() => {
          const input = document.getElementById("userInput");
          if (input && !input.disabled) input.focus();
        }, 100);
        
        loadGroup(group);
      };
  
      container.appendChild(btn);
    });
  }

  function isGroupUnlocked(groupOrder, groupName) {
    const idx = groupOrder.indexOf(groupName);
    if (idx === 0) return true;
  
    const prevGroup = groupOrder[idx - 1];
    const solvedList = solved[prevGroup] || [];
    const total = allPuzzles[prevGroup].length;
    const correct = solvedList.filter(x => x).length;
  
    return total > 0 && correct / total >= UNLOCK_THRESHOLD;
  }
  
  function isGroupSolved(group) {
    const solvedList = solved[group] || [];
    return (
      solvedList.length === allPuzzles[group].length &&
      solvedList.every(x => x)
    );
  }
  
  function loadGroup(group) {
    currentGroup = group;
    puzzles = allPuzzles[group];
    const solvedList = solved[group] || Array(puzzles.length).fill(false);
    solved[group] = solvedList;
  
    const firstUnsolved = solvedList.findIndex(x => !x);
    currentPuzzle = firstUnsolved === -1 ? 0 : firstUnsolved;
  
    loadPuzzle();
    updateProgress();
    renderGroupButtons(); // refresh unlocks
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
  
startGame();
renderGroupButtons();
loadGroup(currentGroup);
