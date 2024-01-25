import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/Dashcomponents/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
