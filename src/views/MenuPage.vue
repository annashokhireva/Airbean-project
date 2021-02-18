<template>

<div id="MenuPage">

	<div class="product-menu">
		<main-header />
			<h1>Meny </h1>
			<h1>Count - {{count}}</h1>
		<button @click="increment">Increment</button>
	
		<main-footer />	
	</div>
</div>
	
</template>

<script>

import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

export default {
	components: { 
		MainHeader,
		MainFooter,
	},
}
</script>


<style lang="scss" scoped>
	.product-menu {
		height: 100%;
		width: 100%;
		overflow: scroll;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $airbean_pink;
	}

	main {
		height: fit-content;
		padding: 0 10%;
		text-align: left;
	}

	h1 {
		font-size: $h_big;
		width: 100%;
		margin: 5% 0;
	}

	h2 {
	font-size: $h_big;
		width: 100%;
		margin: 5% 0;

	}
	
	p {
		font-size: $para;
	}


</style>

