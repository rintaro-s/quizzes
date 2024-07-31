type WordDictionary = { [key: string]: string };

const words: WordDictionary = {};
let currentWord: string | null = null;
let currentMeaning: string | null = null;

function addWord() {
  const wordInput = document.getElementById('word-input') as HTMLInputElement;
  const meaningInput = document.getElementById('meaning-input') as HTMLInputElement;
  const wordListUl = document.getElementById('word-list-ul') as HTMLUListElement;

  const word = wordInput.value.trim();
  const meaning = meaningInput.value.trim();

  if (word && meaning) {
    words[word] = meaning;
    wordInput.value = '';
    meaningInput.value = '';
    updateWordList();
  }
}

function updateWordList() {
  const wordListUl = document.getElementById('word-list-ul') as HTMLUListElement;
  wordListUl.innerHTML = '';
  for (const [word, meaning] of Object.entries(words)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${word}: ${meaning}`;
    wordListUl.appendChild(listItem);
  }
}

function startQuiz() {
  const keys = Object.keys(words);
  if (keys.length === 0) return;

  const randomIndex = Math.floor(Math.random() * keys.length);
  currentWord = keys[randomIndex];
  currentMeaning = words[currentWord];
  
  const meaningText = document.getElementById('meaning-text') as HTMLParagraphElement;
  meaningText.textContent = `意味: ${currentMeaning}`;
  document.getElementById('answer-input')!.value = '';
  document.getElementById('feedback')!.textContent = '';
}

function checkAnswer() {
  const answerInput = document.getElementById('answer-input') as HTMLInputElement;
  const feedback = document.getElementById('feedback') as HTMLParagraphElement;

  if (currentWord && answerInput.value.trim() === currentWord) {
    feedback.textContent = '正解!';
  } else {
    feedback.textContent = `不正解。正しい答えは: ${currentWord}`;
  }
}
