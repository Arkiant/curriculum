const axios = require('axios');
import { sortByDate } from "@/libs/time.js";
import { convertObjectToArray } from "@/libs/conversor.js";

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