const axios = require('axios');
import { sortByDate } from "@/libs/time.js";
import { convertObjectToArray } from "@/libs/conversor.js";

const state = {
    works: [],
    profile: {}
}

const mutations = {
    'INIT_WORKS' (state) {
        axios.get('https://curriculum-6563e.firebaseio.com/experience.json').then( response => {
            state.works = convertObjectToArray(response.data).sort(sortByDate);
        }).catch( error => {
            console.log(error);
        })
    },
    'INIT_PROFILE' (state) {
        axios.get('https://curriculum-6563e.firebaseio.com/profile.json?orderBy="$key"&startAt="-LYhYMWy8wov4IijJGtm"&endAt="-LYhYMWy8wov4IijJGtm"').then( response => {
            state.profile = response.data["-LYhYMWy8wov4IijJGtm"];
        }).catch( error => {
            console.log(error);
        })
    }
}

const actions = {
    initWorks: ({commit}) => {
        commit('INIT_WORKS')
    },
    initProfile: ({commit}) => {
        commit('INIT_PROFILE')
    }
}

const getters = {
    works: state => {
        return state.works;
    },
    profile: state => {
        return state.profile;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}