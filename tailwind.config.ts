import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
      colors: {
        primary: {
            100: '#DFFEE5',
            200: '#B6FBC9',
            300: '#8CF8AD',
            400: '#63F591',
            500: '#12ED39', // main
            600: '#10d732',
            700: '#0ea82a',
            800: '#0b8822',
            900: '#076117',
            DEFAULT: '#12ED39',
            foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

export default config;