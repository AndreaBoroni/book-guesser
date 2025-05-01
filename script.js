/*
Book ideas:
twilight
The Lord of the Rings
To kill a mockingbird
snow crash
the wheel of time
The Three Musketeers
the return of the king
moby dick

the war of the worlds
the time machine
the invisible man
*/


const allPuzzles = {
    "sci-fi-fantasy": {
        easy: [
          { emoji: "⚙️🍊", answer: "a clockwork orange" },
          { emoji: "1️⃣9️⃣8️⃣4️⃣", answer: "1984" },
          { emoji: "🐱(👶🛌🏻)", answer: "cat's cradle" },
          { emoji: "(🙅🍽️)(🎮🎲)", answer: "the hunger games" },
          { emoji: "🤴🏻💍s", answer: "the lord of the rings" },
          { emoji: "2️⃣♜", answer: "the two towers" },
          { emoji: "🦁➕🧙🏻‍♀️➕(👕👗👔🗄️)", answer: "the lion the witch and the wardrobe" },
        ],
        medium: [
          { emoji: "🙋‍♂️🤖", answer: "i robot" },
          { emoji: "(🐄🔪🥩)🏠5️⃣", answer: "slaughterhouse 5" },
          { emoji: "(✒️⚫💧)❤️", answer: "inkheart" },
          { emoji: "🥇🧭", answer: "the golden compass" },
          { emoji: "🥈🪑", answer: "the silver chair" },
          { emoji: "👼s➕😈s", answer: "angels and demons" },
        ],
        hard: [
          { emoji: "🤖s (🛌💭)⚡🐏❓", answer: "do androids dream of electric sheep?" },
          { emoji: "🩸🎵", answer: "bloodmusic" },
          { emoji: "🚶2️⃣☾", answer: "walk two moons" },
          { emoji: "⏳(🧑🏻🧳)👰🏻", answer: "the time traveler's wife" },
          { emoji: "🤏🏠(❌🤏)(🌲🌳)", answer: "little house in the big woods" },
          { emoji: "(♫♪♫)🧊➕🔥", answer: "a song of ice and fire" },
          { emoji: "(💎💰🎁)(🌊🏝️🌊)", answer: "treasure island" },
        ]
    },
    "classics": {
        easy: [
          { emoji: "(🍈®️)🔀", answer: "oliver twist" },
          { emoji: "👴➕🌊", answer: "the old man and the sea" },
          { emoji: "⚔️➕☮︎", answer: "war and peace" },
          { emoji: "🍫⚔️", answer: "the chocolate war" },
          { emoji: "🏰", answer: "the castle" },
          { emoji: "🐁s(🧔🏻‍♂️)s", answer: "of mice and men" },
          { emoji: "🤴🏻🦟s", answer: "lord of the flies" },
        ],
        medium: [
          { emoji: "🍇🤬", answer: "the grapes of wrath" },
          { emoji: "🤏🤴🏻", answer: "the little prince" },
          { emoji: "🪁🏃", answer: "the kite runner" },
          { emoji: "(🐷🐮🐔)(🚜🌾👨‍🌾🏡)", answer: "animal farm" },
          { emoji: "🤏(👩🏻♀️)s", answer: "little women" },
        ],
        hard: [
          { emoji: "🎣2️⃣2️⃣", answer: "catch-22" },
          { emoji: "🛣️", answer: "the road" },
          { emoji: "🏏⏳⬛", answer: "the cricket in times square" },
          { emoji: "⛲🙂", answer: "the fountainhead" },
          { emoji: "🌍🤷‍♀️", answer: "atlas shrugged" },
          { emoji: "🟥✉️", answer: "the scarlet letter" },
          { emoji: "🌃(📚🏠)", answer: "the midnight library" },
        ]
    },
    "thriller": {
        easy: [
            { emoji: "🤐🤕", answer: "the silent patient" },
            { emoji: "👧🏻🦪(👂🏻💍)", answer: "girl with a pearl earring" },
            { emoji: "", answer: "50 shades of gray" },
        ],
        medium: [
            { emoji: "👧🏻🚅", answer: "the girl on the train" },
            { emoji: "✨", answer: "the shining" },
        ],
        hard: [
            { emoji: "📜🏙️s", answer: "paper towns" },
            { emoji: "💦🐘s", answer: "water for elephants" },
        ]
    }
};


let selectedCategory = "sci-fi-fantasy"; // default pre-selected
let selectedDifficulty = "easy"; // default pre-selected
let puzzles = [];
let currentPuzzle = 0;
let solved = {};

function getCategoryLabel(categoryKey) {
    const labels = {
        "sci-fi-fantasy": "🚀 Sci-Fi & Fantasy 🧙",
        "classics": "📚 Classics",
        "thriller": "🕵 Thriller"
    };
    return labels[categoryKey] || categoryKey;
}

function generateCategoryButtons() {
    const container = document.getElementById('categoryButtons');
    container.innerHTML = ''; // clear existing content
  
    Object.keys(allPuzzles).forEach(categoryKey => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');
      categoryDiv.dataset.category = categoryKey;
      categoryDiv.onclick = () => handleCategoryClick(categoryKey);
  
      const labelMap = {
          "sci-fi": "🚀 Sci-Fi",
          "fantasy": "🧙 Fantasy",
          "classics": "📚 Classics",
      };
      categoryDiv.textContent = getCategoryLabel(categoryKey);
      
      const difficultyContainer = document.createElement('div');
      difficultyContainer.classList.add('difficulty-buttons', 'hidden');
      
      const difficulties = Object.keys(allPuzzles[categoryKey]);
      difficulties.forEach(difficulty => {
        const btn = document.createElement('button');
        btn.dataset.difficulty = difficulty;
        btn.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        btn.onclick = (e) => {
            e.stopPropagation(); // prevent parent category click
            selectDifficulty(difficulty);
        };
        difficultyContainer.appendChild(btn);
    });
    
      categoryDiv.appendChild(difficultyContainer);
      container.appendChild(categoryDiv);
    });
  }
  

function handleCategoryClick(categoryName) {
    const categories = document.querySelectorAll('.category');
  
    categories.forEach(c => {
      c.classList.remove('active');
      c.querySelector('.difficulty-buttons').classList.add('hidden');
    });
  
    const selectedElement = document.querySelector(`.category[data-category="${categoryName}"]`);
  
    if (selectedElement) {
      selectedElement.classList.add('active');
      selectedElement.querySelector('.difficulty-buttons').classList.remove('hidden');
      selectedCategory = categoryName;
    }
  }

  function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    const readableCategory = getCategoryLabel(selectedCategory);
    const readableDifficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    document.getElementById("gameTitle").textContent = `${readableCategory}: ${readableDifficulty}`;

    // Remove "active" from all difficulty buttons
    const allDifficultyButtons = document.querySelectorAll('.difficulty-buttons button');
    allDifficultyButtons.forEach(btn => btn.classList.remove('active'));

    // Find the active category
    const activeCategory = document.querySelector('.category.active');
    if (activeCategory) {
        const activeButton = activeCategory.querySelector(`.difficulty-buttons button[data-difficulty="${difficulty}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
    setTimeout(() => {
      const input = document.getElementById('userInput');
      if (input && !input.disabled) input.focus();
    }, 100);
    

    startGame();
}

function startGame() {
    puzzles = allPuzzles[selectedCategory][selectedDifficulty];
    currentPuzzle = 0;
  
    const key = `${selectedCategory}_${selectedDifficulty}`;
    if (!solved[key]) {
      solved[key] = Array(puzzles.length).fill(false);
    }
  
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
  
    if (animated) {
      area.classList.add('hide');
      setTimeout(() => {
        updatePuzzleHTML();
        area.classList.remove('hide');
      }, 100);
    } else {
      updatePuzzleHTML();
    }
  
    updateButtons();
  }
  
  function updatePuzzleHTML() {
    const puzzle = puzzles[currentPuzzle];
    const area = document.getElementById('puzzleArea');
  
    const key = `${selectedCategory}_${selectedDifficulty}`;
    const isSolved = solved[key] && solved[key][currentPuzzle];
  
    // Reset the state
    area.classList.remove('solved');
  
    // Add solved class if this puzzle is already solved
    if (isSolved) {
      area.classList.add('solved');
    }
  
    area.innerHTML = `
      <div class="emoji">${puzzle.emoji}</div>
      <input type="text" id="userInput" placeholder="Your guess" oninput="checkAnswer()" ${isSolved ? "disabled" : ""}>
    `;
  }

  
  function checkAnswer() {
    const inputEl = document.getElementById('userInput');
    const puzzleBox = document.getElementById('puzzleArea');
    const userInput = inputEl.value.toLowerCase().trim().replace(/\s+/g, " ");
    const correctAnswer = puzzles[currentPuzzle].answer.toLowerCase().trim();
  
    if (levenshteinDistance(userInput, correctAnswer) === 0) {
      inputEl.disabled = true;
  
      const key = `${selectedCategory}_${selectedDifficulty}`;
      if (!solved[key][currentPuzzle]) {
        solved[key][currentPuzzle] = true;
        updateProgress();
        checkSectionCompletion();
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
    const key = `${selectedCategory}_${selectedDifficulty}`;
    const total = puzzles.length;
    const solvedCount = solved[key] ? solved[key].filter(x => x).length : 0;
    const percentage = (solvedCount / total) * 100;
    document.getElementById('progressBar').style.width = percentage + '%';
  }
  
  function updateButtons() {
    document.getElementById('prevBtn').disabled = (currentPuzzle === 0);
    document.getElementById('nextBtn').disabled = (currentPuzzle === puzzles.length - 1);
  }
  
  function checkSectionCompletion() {
    const categories = document.querySelectorAll('.category');
  
    categories.forEach(category => {
      const categoryName = category.getAttribute('data-category');
      const difficultyButtons = category.querySelectorAll('.difficulty-buttons button');
  
      let unlocked = true;
  
      difficultyButtons.forEach(btn => {
        const difficulty = btn.getAttribute('data-difficulty');
        const key = `${categoryName}_${difficulty}`;
        const puzzlesForDifficulty = allPuzzles[categoryName][difficulty];
        if (!puzzlesForDifficulty) return;
  
        const solvedList = solved[key] || [];
        const allSolved = solvedList.length === puzzlesForDifficulty.length && solvedList.every(x => x === true);
  
        // Reset button text and unlock state
        btn.innerText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        btn.disabled = !unlocked;
        if (btn.disabled) {
          btn.classList.add('locked');
        } else {
          btn.classList.remove('locked');
        }
  
        if (allSolved) {
          btn.innerText += ' ✅';
          unlocked = true;
        } else {
          unlocked = false;
        }
        
        if (categoryName === selectedCategory && difficulty === selectedDifficulty && allSolved) {
          const order = ['easy', 'medium', 'hard'];
          const currentIndex = order.indexOf(difficulty);
          const nextDifficulty = order[currentIndex + 1];
        
          if (nextDifficulty && allPuzzles[categoryName][nextDifficulty]) {
            const nextKey = `${categoryName}_${nextDifficulty}`;
            if (!solved[nextKey]) {
              solved[nextKey] = Array(allPuzzles[categoryName][nextDifficulty].length).fill(false);
            }
        
            setTimeout(() => {
              selectDifficulty(nextDifficulty);
        
              setTimeout(() => {
                const input = document.getElementById('userInput');
                if (input) input.focus();
              }, 100);
            }, 400);
          }
        }
        

      });
  
      // Optional: update category label if all 3 are done
      const categoryLabel = category.querySelector('span') || category.firstChild;
      const originalLabel = getCategoryLabel(categoryName);
      categoryLabel.textContent = originalLabel;
  
      const allUnlocked = Array.from(difficultyButtons).every(btn => !btn.disabled && btn.innerText.includes('✅'));
      if (allUnlocked) {
        categoryLabel.textContent += ' ✅';
      }
    });
  }
  function unlockAll() {
    const categoryElements = document.querySelectorAll('.category');
  
    categoryElements.forEach(category => {
      const difficultyButtons = category.querySelectorAll('.difficulty-buttons button');
      difficultyButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('locked');
      });
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
  
generateCategoryButtons();
handleCategoryClick(selectedCategory);
selectDifficulty(selectedDifficulty);
startGame();
checkSectionCompletion();