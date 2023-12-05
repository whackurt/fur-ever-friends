/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#9c5e2f',
				secondary: '#955222',
				primaryYellow: '#FFAE41',
				mainText: '#2b2b2b',
				secondaryText: '#262424',
			},
		},
	},
	plugins: [],
};
