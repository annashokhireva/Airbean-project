<template>
	<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M7.80257 0.499201C8.06581 0.762243 8.06581 1.19363 7.80257 1.45667L4.44357 4.80257C4.18734 5.0586 3.77317 5.06561 3.50993 4.82361L0.200065 1.52682C0.0666879 1.39354 3.30565e-07 1.22169 3.45907e-07 1.04633C3.60942e-07 0.874473 0.0666889 0.699112 0.196556 0.569345C0.459801 0.306303 0.888011 0.302795 1.15477 0.569345L3.99781 3.36811L6.84436 0.495693C7.1076 0.232651 7.53581 0.232651 7.80257 0.499201Z" fill="#2F2926"/>
	</svg>
</template>

<script>
	export default {
		props: {
			width: {
				type: [Number, String],
				default: "100%"
			},
			height: {
				type: [Number, String],
				default: "100%"
			},
			strokewidth: {
				type: [Number, String],
				default: 1
			}
		}
}
</script>

