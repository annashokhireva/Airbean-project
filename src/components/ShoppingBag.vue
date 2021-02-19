<template>
	<div class="shopping-bag" @click="handlePreview">
		<div v-if="items.length > 0" class="circle">
			{{ items.length }}
		</div>
		<img src="../assets/bag.svg" alt="shopping bag">

		<ul v-if="showBag" class="bag-view">
			<li></li>
		</ul>
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			showBag: false
		}
		
	},

	props: {
		showAmount: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		items: function() {
			return this.$store.state.bagItems;
		}
	},

	methods: {
		handlePreview() {
			if (!this.showBag){
				this.showBag = true;
			}
			else this.showBag = false
		}
	}

}
</script>

<style lang="scss" scoped>
	.shopping-bag {
		position: relative;
		cursor: pointer;
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

	.bag-view {
        position: absolute;
        top: 20px;
        width: 300px;
        height: 400px;
        border: 1px solid gainsboro;
        margin: 10px 30px 0 0;
        background-color: white;
        box-shadow: 5px 5px 5px rgba(77, 77, 77, 0.406);
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        overflow: scroll;
    }

</style>