<template>
    <div>
      <h2>テスト共有</h2>
      <div>
        <textarea v-model="testData" placeholder="テストデータを入力" rows="10" cols="50"></textarea>
        <button @click="shareTest">テストを共有</button>
      </div>
      <div>
        <textarea v-model="importTestData" placeholder="共有されたテストデータを貼り付け" rows="10" cols="50"></textarea>
        <button @click="importTest">テストをインポート</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // axiosを使ってHTTPリクエストを送信
  
  export default {
    data() {
      return {
        testData: '',
        importTestData: ''
      };
    },
    methods: {
      async shareTest() {
        try {
          await axios.post('https://lorinta.xsrv.jp/wp-content/uploads/html_study/ittou/server/quiz', {
            data: this.testData
          });
          alert('テストデータが共有されました。');
        } catch (error) {
          console.error('テストデータの共有に失敗しました:', error);
          alert('テストデータの共有に失敗しました。');
        }
      },
      async importTest() {
        try {
          const response = await axios.post('https://lorinta.xsrv.jp/wp-content/uploads/html_study/ittou/server/quiz', {
            data: this.importTestData
          });
          this.testData = response.data;
          alert('テストデータがインポートされました。');
        } catch (error) {
          console.error('テストデータのインポートに失敗しました:', error);
          alert('テストデータのインポートに失敗しました。');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  textarea {
    margin: 5px;
  }
  button {
    margin-left: 5px;
  }
  </style>
  