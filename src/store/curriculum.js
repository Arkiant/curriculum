import axios from "@/libs/axios-curriculum.js";
import { sortByDate } from "@/libs/time.js";
import { convertObjectToArray } from "@/libs/conversor.js";

const state = {
    works: [],
    profile: {}
}

const mutations = {
    'INIT_WORKS' (state) {
        axios.get('/experience.json')
        .then( response => {
            state.works = convertObjectToArray(response.data).sort(sortByDate);
        })
        .catch( error => {
            console.log(error);
        })
    },
    'INIT_PROFILE' (state) {
        axios.get('/profile.json?orderBy="$key"&startAt="-LZaUFYjlEgKkK1ywJHD"&endAt="-LZaUFYjlEgKkK1ywJHD"')
        .then( response => {
            state.profile = response.data["-LZaUFYjlEgKkK1ywJHD"];
        })
        .catch( error => {
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
    getWorks: state => {
        return state.works;
    },
    getProfile: state => {
        return state.profile;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}