<template>
    <div id="app">
      <header>
        <h1>単語学習アプリ</h1>
        <nav>
          <button @click="showPage('wordList')">単語リスト</button>
          <button @click="showPage('quiz')">クイズ</button>
          <button @click="showPage('share')">テスト共有</button>
        </nav>
      </header>
      <main>
        <component :is="currentPage"></component>
      </main>
    </div>
  </template>
  
  <script>
  import WordList from './components/WordList.vue';
  import Quiz from './components/Quiz.vue';
  import ShareTest from './components/ShareTest.vue';
  
  export default {
    data() {
      return {
        currentPage: 'WordList'
      };
    },
    components: {
      WordList,
      Quiz,
      ShareTest
    },
    methods: {
      showPage(page) {
        this.currentPage = page;
      }
    }
  };
  </script>
  
  <style>
  header {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    text-align: center;
  }
  
  nav button {
    margin: 0 10px;
  }
  </style>
  
