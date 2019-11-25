const { initialQuestions } = require('./utils/questions');
// const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const API = require('./utils/API')

// inquirer.prompt(initialQuestions)
//     .then(function (answers) {
//         axios.get(`https://api.github.com/users/${answers.username}/repos?per_page=100`)
//             .then(function (response) {
//                 console.log(response)
//             })
//             .catch(function (error) {
//                 console.log(error)
//             })
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


const loadQuestions = async () => {
    try {
        const { favColor, userName } = await prompt(initialQuestions);
        const response = await API.getReposByUser(userName);
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}
loadQuestions();