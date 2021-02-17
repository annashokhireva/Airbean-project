<template>
	<nav>
		<div class="close" @click="$listeners">
			<img src="../assets/close.svg" alt="close button">
		</div>
		
		<h2><router-link to="/">landning</router-link></h2>
		<span></span>
		<h2><router-link to="/menu">Menu</router-link></h2>
		<span></span>
		<h2><router-link to="/vart-kaffe">Vårt kaffe</router-link></h2>
	</nav>
</template>

<script>
	export default {
		
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

		a {
			color: white;
			cursor: pointer;
			text-decoration: none;

			&.router-link-exact-active {
			color: $airbean_pink;
			}
		}

		span {
			width: 48px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}
	}

	.close {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		margin-bottom: 30%;

		img {
			margin: 8% 5%;
		}
	}

	h2 {
		font-size: $h_normal;	
	}
</style>
