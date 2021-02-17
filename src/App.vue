<template>
	<div id="app">
		<main-nav />
		<router-view />
	</div>
</template>

<script>
	import MainNav from './components/MainNav.vue';

	export default {
		name: "App",
		components: {
			MainNav
		}
	};
</script>

<style lang="scss">
	body {
		display: flex;
		justify-content: center;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		width: 375px;
		height: 667px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
		}

	nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
			color: #42b983;
			}
		}
	}
</style>
