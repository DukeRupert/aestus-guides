const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,
	darkMode: 'media',
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
				xs: '20rem',
				'8xl': '90rem'
			},
			invert: {
				20: '.2'
			},
			typography: (theme) => ({
				light: {
					css: [
						{
							color: theme('colors.gray.400'),
							'[class~="lead"]': {
								color: theme('colors.gray.300')
							},
							a: {
								color: theme('colors.white')
							},
							strong: {
								color: theme('colors.white')
							},
							'ol > li::before': {
								color: theme('colors.gray.400')
							},
							'ul > li::before': {
								backgroundColor: theme('colors.gray.600')
							},
							hr: {
								borderColor: theme('colors.gray.200')
							},
							blockquote: {
								color: theme('colors.gray.200'),
								borderLeftColor: theme('colors.gray.600')
							},
							h1: {
								color: theme('colors.white')
							},
							h2: {
								color: theme('colors.white')
							},
							h3: {
								color: theme('colors.white')
							},
							h4: {
								color: theme('colors.white')
							},
							'figure figcaption': {
								color: theme('colors.gray.400')
							},
							code: {
								color: theme('colors.white')
							},
							'a code': {
								color: theme('colors.white')
							},
							pre: {
								color: theme('colors.gray.200'),
								backgroundColor: theme('colors.gray.800')
							},
							thead: {
								color: theme('colors.white'),
								borderBottomColor: theme('colors.gray.400')
							},
							'tbody tr': {
								borderBottomColor: theme('colors.gray.600')
							}
						}
					]
				}
			})
		}
	},

	variants: {
		extend: { typography: ['dark'] },
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
