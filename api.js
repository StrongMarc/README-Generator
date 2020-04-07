const axios = require("axios");

const api = {
  // getUser(userrname) {
  getUser:  function(username) {
    const baseUrl = "https://api.github.com/users/"
    const queryUrl = baseUrl + username;
    
    return axios.get(queryUrl);
    
  }
};

module.exports = api;