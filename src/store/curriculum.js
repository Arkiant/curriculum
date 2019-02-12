const axios = require('axios');
const moment = require('moment');

function sortByDate(a, b) {
    let a_final_date = moment(a.final_date, ["DD-MM-YYY"]);
    let b_final_date = moment(b.final_date, ["DD-MM-YYY"]);
  
    if(a_final_date.isAfter(b_final_date)) {
      return -1;
    } 
    
    if ( a_final_date.isBefore(b_final_date)) {
      return 1;
    }
  
    return 0;
  }

function convertObjectToArray(object) {
    return Object.entries(object).map(e => Object.assign(e[1], {key: e[0]}));
}

const state = {
    works: []    
}

const mutations = {
    'INIT_WORKS' (state) {
        axios.get('https://curriculum-6563e.firebaseio.com/experience.json').then( response => {
            state.works = convertObjectToArray(response.data).sort(sortByDate);
        }).catch( error => {
            console.log(error);
        })
    }
}

const actions = {
    initWorks: ({commit}) => {
        commit('INIT_WORKS')
    }
}

const getters = {
    works: state => {
        return state.works;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}