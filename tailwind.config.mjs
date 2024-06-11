/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'regal-blue': '#243c5a',
				'dark-second':'#393E46',
				'dark-main':'#222831',
				'teal':"#00ADB5",
				'aqua':"#00FFFF",
				'golden-yellow':'#ea9300',
				'dark-teal':'#005f5f'
			},
			backgroundImage: {
				'dashboard': "url('/dashboard.png')",
				'footer-texture': "url('/img/footer-texture.png')",
		},
		listStyleImage: {
			checkmark: 'url("/checkmark.svg")',
		  },
	},
	plugins: [],
}
}