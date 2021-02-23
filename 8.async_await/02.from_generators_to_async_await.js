const fetch = require("node-fetch");
const getRandomUsers = async n => {
    try{
        const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`)
        const data = await fetchRandomUsers.json();
        data.results.forEach(user => {
            const {gender, email} = user;
            console.log(`${gender} - ${email}`);
        })
        return data;
    } catch(err) {
        console.log(err);
    }

  };
  
  getRandomUsers(10);