import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/Dashcomponents/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#0A101D',
        loginBg: 'rgba(10, 16, 29 , 0.9)',
        secColor: "#1B212B",
        thirdColor: "#222A35",
        forthColor: "#FFC100",
      },
      boxShadow: {
        "3xl": '0px 0px 15px -10px #f1f1f161'
      }
    },
  },
  plugins: [],
};
export default config;
