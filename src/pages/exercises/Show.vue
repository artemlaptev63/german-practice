<template>
  <div>
    <site-header />
    <router-link to="/">&lt; List of German grammar topics</router-link>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="exercise-container" v-if="exercise">
      <h2>{{ exercise.name }}</h2>
      <h3>Exersise 1</h3>
      <div v-for="(q, index) in exercise.exercises">
        <p class="exercise-description">{{ q.descriptionFirstExercise }}</p>
      </div>
      <div v-for="(q, index) in exercise.exercises">
        <div v-for="(z, index) in q.exerсiseFirstType">
          <fitb-question :questionFirstType="z" ref="renderedQuestion1"/>
        </div>
      </div>
      <button v-on:click="checkAnswers1" v-if="!answersSubmitted1">Check</button>
      <div class="statistics" v-if="answersSubmitted1">
        <p><b v-model="correct1">{{ correct1 }}</b> of <b v-model="numberOfQuestions1">{{ numberOfQuestions1 }}</b> questions answered correctly. Your latest result: <b v-model="result1">{{ result1 }}</b><b>%</b>.</p>
      </div>
      <button v-on:click="tryAgain1" v-if="answersSubmitted1" class="neutral-button">
        Try Again
      </button>
      <button v-on:click="seeAnswers1" v-if="answersSubmitted1">
        Show Answers
      </button>
      <hr />
    </div>
    <div class="exercise-container" v-if="exercise">
      <h3>Exersise 2</h3>
      <div v-for="(q, index) in exercise.exercises">
        <p class="exercise-description">{{ q.descriptionSecondExercise }}</p>
      </div>
      <div v-for="(q, index) in exercise.exercises">
        <div v-for="(z, index) in q.exerciseSecondType">
          <question-second :questionSecondType="z" ref="renderedQuestion2"/>
        </div>
      </div>
      <button v-on:click="checkAnswers2" v-if="!answersSubmitted2">Check</button>
      <div class="statistics" v-if="answersSubmitted2">
        <p><b v-model="correct2">{{ correct2 }}</b> of <b v-model="numberOfQuestions2">{{ numberOfQuestions2 }}</b> questions answered correctly. Your latest result: <b v-model="result2">{{ result2 }}</b><b>%</b>.</p>
      </div>
      <button v-on:click="tryAgain2" v-if="answersSubmitted2" class="neutral-button">
        Try Again
      </button>
      <button v-on:click="seeAnswers2" v-if="answersSubmitted2">
        Show Answers
      </button>
      <hr />
    </div>
    <div class="exercise-container" v-if="exercise">
      <h3>Exersise 3</h3>
      <div v-for="(q, index) in exercise.exercises">
        <p class="exercise-description">{{ q.descriptionThirdExercise }}</p>
      </div>
      <div v-for="(q, index) in exercise.exercises">
        <div v-for="(z, index) in q.exerciseThirdType">
          <question-third :questionThirdType="z" ref="renderedQuestion3"/>
        </div>
      </div>
      <button v-on:click="checkAnswers3" v-if="!answersSubmitted3">Check</button>
      <div class="statistics" v-if="answersSubmitted3">
        <p><b v-model="correct3">{{ correct3 }}</b> of <b v-model="numberOfQuestions3">{{ numberOfQuestions3 }}</b> questions answered correctly. Your latest result: <b v-model="result3">{{ result3 }}</b><b>%</b>.</p>
      </div>
      <button v-on:click="tryAgain3" v-if="answersSubmitted3" class="neutral-button">
        Try Again
      </button>
      <button v-on:click="seeAnswers3" v-if="answersSubmitted3">
        Show Answers
      </button>
      <hr />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exercise',
    data () {
      return {
        loading: false,
        error: null,
        exercise: null,
        answersSubmitted1: false,
        answersSubmitted2: false,
        answersSubmitted3: false,
        correct1: 0,
        correct2: 0,
        correct3: 0,
        numberOfQuestions1: '',
        numberOfQuestions2: '',
        numberOfQuestions3: '',
        result1: '',
        result2: '',
        result3: ''
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData1()
      this.fetchData2()
      this.fetchData3()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData1 () {
        // fetch the correct exercise by ID
        // NOTE: for now, we will simulate fetching the data via JSON file, as
        // later we will fetch via web service
        // background: https://router.vuejs.org/en/advanced/data-fetching.html
        this.error = this.exercise = null
        this.loading = true
        this.answersSubmitted1 = false
        this.correct1 = 0
        this.result1 = 0
        var exerciseData = require('../../assets/exercises.json')
        // find the correct exercise from list of exercises we've fetched
        for (var i = 0; i < exerciseData.length; i++) {
          var e = exerciseData[i]
          if (e.id === parseInt(this.$route.params.id)) {
            this.exercise = e
            break
          }
        }
        // handle situation where we couldn't find the exercise
        if (!this.exercise) {
          this.loading = false
          this.error = "couldn't find exercise " + this.$route.params.id
          return
        }
        // success
        this.loading = false
        console.log('loaded exercise ' + this.exercise.id)
      },
      checkAnswers1 () {
        this.answersSubmitted1 = true
        for (var i = 0; i < this.$refs.renderedQuestion1.length; i++) {
          this.$refs.renderedQuestion1[i].setShowAnswer(true)
        }
        // get the number of questions
        this.numberOfQuestions1 = this.$refs.renderedQuestion1.length
        // counts the number of correct answers
        for (var j = 0; j < this.$refs.renderedQuestion1.length; j++) {
          if (this.$refs.renderedQuestion1[j].isCorrect()) {
            this.correct1++
          }
        }
        // considers the percentage of correct answers
        var calculationInterest1 = (100 / this.numberOfQuestions1 * this.correct1)
        this.result1 = Math.floor(calculationInterest1)
      },
      seeAnswers1 () {
        for (var i = 0; i < this.$refs.renderedQuestion1.length; i++) {
          this.$refs.renderedQuestion1[i].getShowAnswer()
        }
        this.fetchData1()
      },
      tryAgain1 () {
        // clears all fields input
        for (var i = 0; i < this.$refs.renderedQuestion1.length; i++) {
          this.$refs.renderedQuestion1[i].reset()
        }
        this.correct1 = ''
        // reload data, thus triggering reset of page state
        this.fetchData1()
      },
      fetchData2 () {
        // fetch the correct exercise by ID
        // NOTE: for now, we will simulate fetching the data via JSON file, as
        // later we will fetch via web service
        // background: https://router.vuejs.org/en/advanced/data-fetching.html
        this.error = this.exercise = null
        this.loading = true
        this.answersSubmitted2 = false
        this.correct2 = 0
        this.result2 = 0
        var exerciseData = require('../../assets/exercises.json')
        // find the correct exercise from list of exercises we've fetched
        for (var i = 0; i < exerciseData.length; i++) {
          var e = exerciseData[i]
          if (e.id === parseInt(this.$route.params.id)) {
            this.exercise = e
            break
          }
        }
        // handle situation where we couldn't find the exercise
        if (!this.exercise) {
          this.loading = false
          this.error = "couldn't find exercise " + this.$route.params.id
          return
        }
        // success
        this.loading = false
        console.log('loaded exercise ' + this.exercise.id)
      },
      checkAnswers2 () {
        this.answersSubmitted2 = true
        for (var i = 0; i < this.$refs.renderedQuestion2.length; i++) {
          this.$refs.renderedQuestion2[i].setShowAnswer(true)
        }
        // get the number of questions
        this.numberOfQuestions2 = this.$refs.renderedQuestion2.length
        // counts the number of correct answers
        for (var j = 0; j < this.$refs.renderedQuestion2.length; j++) {
          if (this.$refs.renderedQuestion2[j].isCorrect()) {
            this.correct2++
          }
        }
        // considers the percentage of correct answers
        var calculationInterest2 = (100 / this.numberOfQuestions2 * this.correct2)
        this.result2 = Math.floor(calculationInterest2)
      },
      seeAnswers2 () {
        for (var i = 0; i < this.$refs.renderedQuestion2.length; i++) {
          this.$refs.renderedQuestion2[i].getShowAnswer()
        }
        this.fetchData2()
      },
      tryAgain2 () {
        // clears all fields input
        for (var i = 0; i < this.$refs.renderedQuestion2.length; i++) {
          this.$refs.renderedQuestion2[i].reset()
        }
        this.correct2 = ''
        // reload data, thus triggering reset of page state
        this.fetchData2()
      },
      fetchData3 () {
        // fetch the correct exercise by ID
        // NOTE: for now, we will simulate fetching the data via JSON file, as
        // later we will fetch via web service
        // background: https://router.vuejs.org/en/advanced/data-fetching.html
        this.error = this.exercise = null
        this.loading = true
        this.answersSubmitted3 = false
        this.correct3 = 0
        this.result3 = 0
        var exerciseData = require('../../assets/exercises.json')
        // find the correct exercise from list of exercises we've fetched
        for (var i = 0; i < exerciseData.length; i++) {
          var e = exerciseData[i]
          if (e.id === parseInt(this.$route.params.id)) {
            this.exercise = e
            break
          }
        }
        // handle situation where we couldn't find the exercise
        if (!this.exercise) {
          this.loading = false
          this.error = "couldn't find exercise " + this.$route.params.id
          return
        }
        // success
        this.loading = false
        console.log('loaded exercise ' + this.exercise.id)
      },
      checkAnswers3 () {
        this.answersSubmitted3 = true
        for (var i = 0; i < this.$refs.renderedQuestion3.length; i++) {
          this.$refs.renderedQuestion3[i].setShowAnswer(true)
        }
        // get the number of questions
        this.numberOfQuestions3 = this.$refs.renderedQuestion3.length
        // counts the number of correct answers
        for (var j = 0; j < this.$refs.renderedQuestion3.length; j++) {
          if (this.$refs.renderedQuestion3[j].isCorrect()) {
            this.correct3++
          }
        }
        // considers the percentage of correct answers
        var calculationInterest3 = (100 / this.numberOfQuestions3 * this.correct3)
        this.result3 = Math.floor(calculationInterest3)
      },
      seeAnswers3 () {
        for (var i = 0; i < this.$refs.renderedQuestion3.length; i++) {
          this.$refs.renderedQuestion3[i].getShowAnswer()
        }
        this.fetchData3()
      },
      tryAgain3 () {
        // clears all fields input
        for (var i = 0; i < this.$refs.renderedQuestion3.length; i++) {
          this.$refs.renderedQuestion3[i].reset()
        }
        this.correct3 = ''
        // reload data, thus triggering reset of page state
        this.fetchData3()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    font-size: 20px;
    letter-spacing: 1.2px;
    color: #4cb2d4;
    text-decoration: none;
    cursor: pointer;
    padding-left: 100px;
  }
  a:hover {
    color: #56b949;
  }
  h2 {
    font-size: 35px;
    color: #56b949;
    letter-spacing: 2px;
    margin-top: 40px;
    font-weight: 500;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-align: left;
    color: #151f40;
    margin-top: 40px;
  }
  .exercise-container {
    padding-left: 100px;
    padding-right: 100px;
    font-family: 'Avenir';
  }
  .exercise-description {
    font-size: 16px;
    font-style: oblique;
    line-height: 1.67;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-bottom: 0px;
  }
  .exercise-container button {
    background-color: #4cb2d4;
    font-size: 15px;
    letter-spacing: 1.2px;
    color: #ffffff;
    border: none;
    padding: 10px 80px;
    outline: none;
    margin-top: 10px;
    margin-left: 22px;
    margin-bottom: 25px;
    cursor: pointer;
    text-transform: uppercase;
  }
  .statistics {
    background-color: #4cb2d4;
    margin-left: 22px;
  }
  .statistics p {
    padding: 30px 20px;
    letter-spacing: 2px;
    color: #fff;
  }
  .exercise-container button.neutral-button {
    background-color: #a6aaab;
  }
  .exercise-container button:active {
    background-color: #56b949;
  }
</style>
