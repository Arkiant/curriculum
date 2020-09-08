import axios from "@/libs/axios-curriculum.js";
import { convertObjectToArray } from "@/libs/conversor.js";
import { sortByDate } from "@/libs/time.js";

const state = {
  works: [],
  profile: {},
};

const mutations = {
  INIT_WORKS(state) {
    axios
      .get("/data/experiences.json")
      .then((response) => {
        state.works = convertObjectToArray(response.data).sort(sortByDate);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  INIT_PROFILE(state) {
    axios
      .get("/data/profile.json")
      .then((response) => {
        state.profile = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const actions = {
  initWorks: ({ commit }) => {
    commit("INIT_WORKS");
  },
  initProfile: ({ commit }) => {
    commit("INIT_PROFILE");
  },
};

const getters = {
  getWorks: (state) => {
    return state.works;
  },
  getProfile: (state) => {
    return state.profile;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
