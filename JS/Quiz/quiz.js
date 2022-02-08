const axios = require('axios').default
const readline = require('readline')
const auth = require('./auth')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function getQuiz () {
  // https://quizapi.io/docs/1.0/parameters

  let respondeExternal

  await axios.get('https://quizapi.io/api/v1/questions', { params: { apiKey: auth.apiKey, limit: 1 } })
    .then((res) => {
      respondeExternal = res.data
    })
    .catch((err) => {
      throw err
    })
  return respondeExternal
}

async function printQuestions () {
  const result = await getQuiz()
  const letter = ['a', 'b', 'c', 'd', 'e', 'f']
  let counter = 0

  console.log('======================================================================================================')
  console.log(result[0].question)
  console.log('======================================================================================================\n')

  for (answer in result[0].answers) {
    const isPrintQuestion = result[0].answers[answer]

    isPrintQuestion ? console.log(`${letter[counter]} - ${isPrintQuestion}`) : ''
    counter++
  }
  console.log('\n======================================================================================================\n\n')

  const correctAnswer = result[0].correct_answer
  const correctAnswerObject = Object.entries(result[0].correct_answers)

  rl.question('Answer: ', function (answer) {
    if (correctAnswer) {
      if (result[0].correct_answer.substring(7, 8) === answer) {
        console.log('Correct!')
        result[0].explanation ? console.log(`\n${result[0].explanation}`) : console.log('')
      } else {
        console.log('Wrong!')
      }
    } else {
      // If api return a null value, this will fix.
      for (let key = 0; key < 6; key++) {
        for (let value = 1; value < 2; value++) {
          const objectKey = correctAnswerObject[key].toString().substring(7, 8)
          const objectValue = correctAnswerObject[key][value]
          if (objectKey === answer && objectValue) {
            console.log('Correct!')
          }
        }
      }
    }

    rl.close()
  })
}

printQuestions()
