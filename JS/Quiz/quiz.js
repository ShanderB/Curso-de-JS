const axios = require('axios').default
const readline = require('readline')
const auth = require('./auth')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getQuiz() {
    //https://quizapi.io/docs/1.0/parameters

    let respondeExternal

    await axios.get('https://quizapi.io/api/v1/questions', { params: { apiKey: auth.apiKey, limit: 1 } })
        .then((res) => {
            respondeExternal = res.data
        })
        .catch((err) => {
            throw err;
        })
    return respondeExternal
}

async function printQuestions() {

    let result = await getQuiz()
    let letter = ['a', 'b', 'c', 'd', 'e', 'f']
    let counter = 0;

    console.log('======================================================================================================')
    console.log(result[0].question)
    console.log('======================================================================================================\n')

    for (answer in result[0].answers) {
        let isPrintQuestion = result[0].answers[answer]

        isPrintQuestion ? console.log(`${letter[counter]} - ${isPrintQuestion}`) : ''
        counter++
    }
    console.log('\n======================================================================================================\n\n')

    console.log(result[0].correct_answer)

    rl.question('', function (answer) {
        if (result[0].correct_answer.substring(7, 8) === answer) {
            console.log('Correct!')
            result[0].explanation ? console.log(`\n${result[0].explanation}`) : console.log('')
        } else {
            console.log('Wrong!')
        }

        rl.close();
    })


}


printQuestions()