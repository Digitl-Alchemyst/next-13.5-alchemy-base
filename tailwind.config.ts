import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/util/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ty: '355px',
        xs: '480px',
        sm: '640px',
        md: '770px',
        lg: '1060px',
        xl: '960px',
        hg: '1300px',
        tv: '2000px',
      },
      colors: {
        midnight: '#121063',
        copper: '#b87333',
        bronze: '#565584',
        silver: '#ecebff',
        gold: '#f7f7ff',
        platinum: '#ffffff',
        onyx: '#000000',
        obsidian: '#464646',
        diamond: '#b9f2ff',
        pearl: '#f0f0ff',
        amethyst: '#9966cc',
        emerald: '#50c878',
        ruby: '#e0115f',
        citrine: '#e4d00a',
        sapphire: '#0f52ba',
        topaz: '#ffc87c',
        coffee: '#6f4e37',
        cedar: '#4a3728',
        caramel: '#af6e4d',
        ginger: '#b06500',
        hazel: '#8e7618',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        74: '18.5rem',
        78: '19.5rem',
        82: '20.5rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '24.5rem',
        100: '25rem',
        102: '25.5rem',
        104: '26rem',
        106: '26.5rem',
        108: '27rem',
        110: '27.5rem',
        112: '28rem',
        114: '28.5rem',
        116: '29rem',
        118: '29.5rem',
        120: '30rem',
        122: '30.5rem',
        124: '31rem',
        126: '31.5rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gradual':
          'linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)',
        site: 'url("/site.svg")',
        main: 'url("/main.png")',
        accent1: 'url("/accent1.png")',
        accent2: 'url("/accent2.png")',
        accent3: 'url("/accent3.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        mont: [`var(--font-mont)`, ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][300];
          const color2 = colors[color][600];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
export default config;
