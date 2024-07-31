<template>
    <div>
      <h2>クイズ</h2>
      <div v-if="currentWord">
        <p>意味: {{ currentMeaning }}</p>
        <input v-model="userAnswer" placeholder="単語を入力" />
        <button @click="checkAnswer">答えを確認</button>
        <p v-if="feedback">{{ feedback }}</p>
      </div>
      <button @click="startQuiz">クイズを開始</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: {},
        currentWord: '',
        currentMeaning: '',
        userAnswer: '',
        feedback: ''
      };
    },
    methods: {
      startQuiz() {
        const wordsArray = Object.entries(this.words);
        if (wordsArray.length === 0) return;
  
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        [this.currentWord, this.currentMeaning] = wordsArray[randomIndex];
        this.feedback = '';
      },
      checkAnswer() {
        if (this.userAnswer === this.currentWord) {
          this.feedback = '正解!';
        } else {
          this.feedback = '不正解。正しい答えは: ' + this.currentWord;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    margin: 5px;
  }
  button {
    margin-left: 5px;
  }
  </style>
  
