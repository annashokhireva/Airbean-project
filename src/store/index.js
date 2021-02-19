import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bagItems: ['test item', 'test item'],
		navVisible: false,
		bagVisible: false
	},
	mutations: {
		showNav(state){
			state.navVisible = true;
		},
		hideNav(state){
			state.navVisible = false;
		},
		toggleBag(state) {
			state.bagVisible = !state.bagVisible;
		}
	},
	actions: {},
	modules: {}
});
