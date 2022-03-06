import Vue from "vue";
import Vuex from "vuex";
import MentorModule from "./modules/mentors/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    mentors: MentorModule,
  },
});
