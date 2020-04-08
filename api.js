//  add npm package axios
const axios = require("axios");

const api = {
  //  change getUser key defined with a value function similar to 09- acitivity 9
  getUser:  function(username) {  //

    const baseUrl = "https://api.github.com/users/"
    
    // define queryUrl argument for axios.get function
    const queryUrl = baseUrl + username;
    
    return axios.get(queryUrl);  // return axios function similar to 09-activity 9
    
  }
};

// module.export format similar to 9 activity 8 & 9
module.exports = api;