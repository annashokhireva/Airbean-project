<template>
	<main>
		<p>Ordernummer "order.id"</p>
		<img src="../assets/drone.svg" alt="Drone with coffee">
		<h3>Din beställning är på väg!</h3>
		<p class="countdown">
			<b>{{ countDown }}</b> minuter
		</p>
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
		margin: 15% 15% 10%;
	}

	p {
		font-size: 12px;
		margin: 20% 0 15%;
	}

	p.countdown {
		font-size: 22px;
		margin: 0;
	}

</style>