<template>
	<router-link to="/menu" tag="main">
		<img src="../assets/logo.svg" alt="logo">
		<img src="../assets/nameLogo.svg" alt="Air Bean">
	</router-link>
	
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	main {
		width: 100%;
		height: 100%;
		background-image: url("../assets/landingBackground.svg");
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>