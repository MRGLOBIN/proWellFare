import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'login-background-color': 'rgba(255, 255, 255, 0.8)',
      },
      backgroundColor: {
        secondary: '#393B43',
        tetiary: '#181A26',
        primary: '#2A2D38',
        'button-primary-background': '#5095C9',
        'button-primary-background-hover': '#64A9DD',
      },
      backgroundImage: {
        'login-background': 'url(/images/bg.jpg)',
        'login-logo': 'url(/images/pro-active-logo.svg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
