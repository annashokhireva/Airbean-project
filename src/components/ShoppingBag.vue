<template>
	<div class="shopping-bag">
		<div v-if="cartItemsCount.length > 0" class="circle">
			{{ cartItemsCount.length }}
		</div>
		<img src="../assets/bag.svg" alt="shopping bag">
	</div>
	
</template>

<script>
export default {

	props: {
		showAmount: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		cartItemsCount: function() {
			return this.$store.state.cart;
		}
	}
}
</script>

<style lang="scss" scoped>
	.shopping-bag {
		position: relative;

		.circle {
		background-color: rgba(229, 103, 78, 1);
		color: white;
		margin: 0;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		text-align: center;
		position: absolute;
		top: 15%;
		right: 15%;
		}
	}

</style>