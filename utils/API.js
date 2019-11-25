const axios = require('axios');

module.exports = {
    getReposByUser: username => axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}