import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// bagItems: ['test item', 'test item'],
		navVisible: false,
		bagVisible: false,

		cart: [],

		coffeeTypes: [
			{
				id: 1,
				type: "Bryggkaffe",
				price: 49,
				info: "Bryggt på månadens bönor"
			},

			{
				id: 2,
				type: "Caffé Doppio",
				price: 49,
				info: "Bryggt på månadens bönor"
			},

			{
				id: 3,
				type: "Cappuccino",
				price: 49,
				info: "Bryggt på månadens bönor"
			},

			{
				id: 4,
				type: "Latte Macchiatto",
				price: 49,
				info: "Bryggt på månadens bönor"
			},

			{
				id: 5,
				type: "Kaffe Latte",
				price: 49,
				info: "Bryggt på månadens bönor"
			},

			{
				id: 6,
				type: "Cortado",
				price: 39,
				info: "Bryggt på månadens bönor"
			}
		]
	},
	getters: {
		coffeeTypes: state => {
			return state.coffeeTypes;
		},
		
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
