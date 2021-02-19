<template>
	<div class="our-coffee">
		<main-header />

		<main>
			<h1>Vårt kaffe</h1>
			<p>
				<b>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, 
				strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</b>
			</p>
			<p>
				Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con 
				panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato 
				sit extraction instant grinder seasonal organic, turkish single shot, single origin, and 
				robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup 
				kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant 
				kopi-luwak.
			</p>
			<p>
				Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, 
				so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed 
				to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. 
				In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal 
				bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator 
				cream black, galão flavour, milk aromatic turkish skinny crema.

			</p>
			<div class="owner">
				<img src="../assets/owner.svg" alt="Owner's photo">
				<h3>Eva Cortado</h3>
				<p>VD & Grundare</p>
			</div>
		</main>

		<footer>
			<img src="../assets/footer.svg" alt="leafs">
		</footer>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader';

export default {
	components: { 
		MainHeader 
	},

}
</script>

<style lang="scss" scoped>
	.our-coffee {
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

	.owner	{
		display: flex;
		flex-direction: column;
		align-items: center;

		p{
			margin: 0;
			font-size: 12px;
		}
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