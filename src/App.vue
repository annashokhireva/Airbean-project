<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans&display=swap');

	h1, h2, h3, h4 {
		font-family: 'PT Serif', serif;
	}

	p {
		font-family: 'Work Sans', sans-serif;
	}
	
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
		position: relative;
	}

	.nav {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
