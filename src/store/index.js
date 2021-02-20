import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showNav: false,

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
				id: 2,
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

		cartItems: state => {
			return state.cart;
		}
	},
	mutations: {},
	actions: {},
	modules: {}
});
