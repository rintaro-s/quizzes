<template>
    <div>
      <h2>単語リスト</h2>
      <div>
        <input v-model="newWord" placeholder="単語を入力" />
        <input v-model="newMeaning" placeholder="意味を入力" />
        <button @click="addWord">追加</button>
      </div>
      <ul>
        <li v-for="(meaning, word) in words" :key="word">
          {{ word }}: {{ meaning }}
          <button @click="removeWord(word)">削除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newWord: '',
        newMeaning: '',
        words: {} // 単語と意味を保存するオブジェクト
      };
    },
    methods: {
      addWord() {
        if (this.newWord && this.newMeaning) {
          this.$set(this.words, this.newWord, this.newMeaning);
          this.newWord = '';
          this.newMeaning = '';
        }
      },
      removeWord(word) {
        this.$delete(this.words, word);
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
  
