<template>
	<nav>
		<div class="close" @click="hideNav">
			<img src="../assets/close.svg" alt="close button">
		</div>
		
		<ul>
			<li v-for="(link, index) in links" :key="index" @click="hideNav">
				<router-link :to="{name: link.page}">
					<h2>{{ link.text }}</h2>
				</router-link>
			</li>

			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>

		</ul>

	</nav>
</template>

<script>
	import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				links: [
				{
					text: 'Menu',
					page: 'Menu'       
				},
				
				{
					text: 'Vårt kaffe',
					page: 'OurCoffee'
				},

				{
					text: 'Min profil',
					page: 'LoginPage'
				},

				{
					text: 'Orderstatus',
					page: 'OrderStatus'
				}
			]
			}
		},
	
		methods: {
			...mapMutations([
				'hideNav',
			]),
		},
	};
</script>

<style scoped lang="scss">
	nav {
		width: 375px;
		height: 667px;
		background-color: $airbean_brown;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		ul {
			list-style: none;
			padding: 0;
			position: relative;
			z-index: 1;
		}

		a {
			color: white;
			cursor: pointer;
			text-decoration: none;

			&.router-link-exact-active {
			color: $airbean_pink;
			}
		}
	}

	.close {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		margin-bottom: 20%;

		img {
			margin: 8% 5%;
		}
	}

	h2 {
		font-size: $h_normal;	
	}

	

	.line {
		margin: auto;
		width: 48px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		position: relative;

		&:nth-of-type(1){
			top: -71%;
		}

		&:nth-of-type(2){
			top: -48%;
		}

		&:nth-of-type(3){
			top: -26%;
		}
	}

	
</style>
