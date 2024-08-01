new Vue({
    el: '#app',
    data: {
        word: '',
        meaning: '',
        words: [],
        quizStarted: false,
        quizEnded: false,
        currentWordIndex: 0,
        userAnswer: '',
        correctAnswers: 0,
        totalQuestions: 0,
    },
    computed: {
        currentWord() {
            return this.words[this.currentWordIndex];
        },
    },
    methods: {
        addWord() {
            if (this.word && this.meaning) {
                this.words.push({ word: this.word, meaning: this.meaning });
                this.word = '';
                this.meaning = '';
            }
        },
        startQuiz() {
            if (this.words.length > 0) {
                this.quizStarted = true;
                this.currentWordIndex = 0;
                this.totalQuestions = this.words.length;
            }
        },
        checkAnswer() {
            if (this.userAnswer.toLowerCase() === this.currentWord.word.toLowerCase()) {
                alert('正解！');
                this.correctAnswers++;
                this.currentWordIndex++;
                this.userAnswer = '';
                if (this.currentWordIndex >= this.totalQuestions) {
                    this.quizEnded = true;
                }
            } else {
                alert('不正解。もう一度試してみてください。');
            }
        },
        reloadPage() {
            location.reload();
        },
    },
});

