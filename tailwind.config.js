/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'rgba-blue': 'rgba(22,104,131,1)',
				'rgba-green': 'rgba(100,204,197,1)',
			},
		},
		colors: {
			primary: '#053B50',
			secondary: '#176B87',
			accent: '#64CCC5',
			gray: '#EEEEEE',
		},
	},
	plugins: [],
};
