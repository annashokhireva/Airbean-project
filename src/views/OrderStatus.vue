<template>
	<main>
		<p class="order">Ordernummer "order.id"</p>
		<img src="../assets/drone.svg" alt="Drone with coffee">
		<h3>Din beställning är på väg!</h3>
		<p class="countdown">
			<b>{{ countDown }}</b> minuter
		</p>
		<button class="white">
			<router-link to="/menu">
				<h4>Ok, cool!</h4>
			</router-link>
		</button>
	</main>
</template>

<script>
export default {
	data() {
		return {
			countDown: 15,
		}
	},

	watch: {
		countDown: {
			handler(value) {
				if (value > 0) {
					setTimeout(() => {
						this.countDown--;
					}, 60000);
				}
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss" scoped>
	main {
		width: 100%;
		height: 100%;
		background-color: $airbean_orange;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		color: white;
	}

	h3 {
		font-size: $h_normal;
		margin: 15% 15% 5%;
	}

	p.order {
		font-size: 16px;
		margin: 20% 0 15%;
		color:rgba(255, 255, 255, 0.7)
	}

	p.countdown {
		font-size: 22px;
		margin: 0;
	}

	button {
		margin: 20% 0;
	}
</style>