import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navVissible: false
	},
	mutations: {
		showNav(state){
			state.navVissible = true;
		},
		hideNav(state){
			state.navVissible = false;
		}
	},
	actions: {},
	modules: {}
});
