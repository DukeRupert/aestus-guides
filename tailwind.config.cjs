const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,

	theme: {
		fontFamily: {
			sans: ['Petrona', 'Helvetica', 'Arial', 'sans-serif']
		},

		extend: {
			colors: {
				parchment: '#faf3d1',
				bgBrown: '#261210',
				bgRed: '#591812',
				bgYellow: '#D8C368',
				bgGrey: '#737373',
				bgBlack: '#0D0D0D'
			},
			maxWidth: {
				'8xl': '90rem'
			}
		}
	},

	variants: {
		display: ['group-hover']
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
