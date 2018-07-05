<template>
  <div class="question">
    <p>{{ questionThirdType.number }}&nbsp;&nbsp;{{ questionThirdType.text1 }}
      <input type="text" value="" v-model="userAnswer" :class="answerClass">
    {{ questionThirdType.text2 }}</p>
 </div>
</template>

<script>
  export default {
    name: 'question-third',
    props: ['questionThirdType'],
    data () {
      return {
        showAnswer: false,
        userAnswer: ''
      }
    },
    computed: {
      answerClass () {
        if (this.showAnswer === false) {
          return ''
        } else {
          return (this.isCorrect() === true ? 'correct' : 'incorrect')
        }
      }
    },
    methods: {
      isCorrect () {
        return (this.userAnswer.toLowerCase() === this.questionThirdType.answer.toLowerCase())
      },
      setShowAnswer (show) {
        this.showAnswer = show
      },
      getShowAnswer () {
        this.userAnswer = this.questionThirdType.answer
      },
      reset () {
        this.showAnswer = false
        this.userAnswer = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question {
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 100;
  }
  .question input {
    width: 90px;
    padding: 5px;
    color: #979797;
    text-align: left;
    margin-left: 0px;
    padding-left: 15px;
    outline-color: #4cb2d4;
    font-size: 16px;
    border: solid 0.5px #979797;
    margin-bottom: 15px;
  }
  .question input.correct {
    color: #56b949 !important;
    background-image: url('../../assets/check-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 80px;
  }
  .question input.incorrect {
    color: #f2341c !important;
    background-image: url('../../assets/x-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 80px;
  }
</style>
