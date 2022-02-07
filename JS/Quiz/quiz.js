const axios = require('axios').default

async function getQuiz() {
    await axios.get('https://quizapi.io/api/v1/questions', { params: { apiKey: 'jyrxGoHnlaOis0yMqUD6qsE9Cj2cOl4V5oHzVHe4', limit: 1 } })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

}

async function chec() {
    console.log('\n\n\n\n\n\n\n')
    await getQuiz()
    console.log('\n\n\n\n\n\n\n\n')

}
chec()