<template>
	<header>
		<div class="menu-btns">
			<img src="../assets/navicon.svg" alt="menu button" @click="showNav">
			<shopping-bag v-if="showBag"/>
			<main-nav v-if="visible" class="nav"/>
		</div>
	</header>
</template>

<script>
import ShoppingBag from './ShoppingBag.vue';
import MainNav from './MainNav.vue';
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';


export default {
	components: { 
		ShoppingBag,
		MainNav 
	},

	props: {
		showBag: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		...mapState({
			visible: 'navVisible',
		}),
	},

	methods: {
		...mapMutations([
			'showNav',
		]),
	},
}
</script>

<style lang="scss" scoped>
	header {
		background-image: url("../assets/header.svg");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 100%;
		min-height: 113px;
	}

	.menu-btns {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:first-child {
			margin-left: 5%;
			cursor: pointer;
		}
	}
</style>