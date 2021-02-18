<template>
  <section class="body">
    <main-header />
	
		<container class="registration-form">
			<h2>Välkommen till AirBean-familjen!</h2>	
			<p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
			<button class="register">Brew me a cup!</button>
		</container>
  </section>
</template>

<script>

import MainHeader from '../components/MainHeader';

export default {
	components: { 
		MainHeader,
	},
}
</script>


<style lang="scss" scoped>
	.body{
		background-color: black;
		height: 100%;
		width: 100%;
	}

	.registration-form{
		height: 80%;
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $airbean_pink;
		margin: auto;
		border-radius: 3px;
		
	}

	.registration-form h2 {
		font-family: PT serif;
		font-size: 32px;
		color: $airbean_brown;
		
	}
	.registration-form p {
		font-family: Work Sans;
		font-size: 16px;
		color: $airbean_brown;
	}

	.register {
		background-color: $airbean_brown;
		border-radius: 20px;
		font-size: 24px ;
		color: white;
		padding: 5px px 5px 10px;
		font-family: PT serif;
	}


	h1 {
		font-family: PT serif;
		font-size: $h_big;
		width: 100%;
		margin: 5% 0;
	}

	p {
		font-size: 14px;
	}

	h3 {
		font-size: 22px;
		margin: 0;
	}

</style>