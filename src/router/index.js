import Vue from "vue";
import VueRouter from "vue-router";
import MenuPage from "../views/MenuPage.vue";
import OurCoffee from "../views/OurCoffee.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Menu",
		component: MenuPage
	},
	{
		path: "/vart-kaffe",
		name: "OurCoffee",
		component: OurCoffee
	}
];

const router = new VueRouter({
	routes
});

export default router;
