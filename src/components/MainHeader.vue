<template>
	<header>
		<div class="menu-btns">
			<img src="../assets/navicon.svg" alt="menu button" @click="showMenu">
			<shopping-bag v-if="showBag"/>
			<main-nav v-if="showNav" class="nav"/>
		</div>
	</header>
</template>

<script>
import ShoppingBag from './ShoppingBag.vue';
import MainNav from './MainNav.vue';

export default {
	components: { 
		ShoppingBag,
		MainNav 
	},

	data() {
		return {
			showNav: false
		}
	},

	props: {
		showBag: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		showMenu: function() {
			this.showNav = true;
		}
	}
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