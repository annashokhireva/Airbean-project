<template>
  
  <div id="profil">
  <main-header />
   
        <h2>Välkommen till airben</h2>
    
    </div>
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
	.profil {
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

	p {
		font-size: 14px;
	}

	h3 {
		font-size: 22px;
		margin: 0;
	}

</style>