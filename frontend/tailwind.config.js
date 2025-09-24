const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import prelinePlugin from 'preline/plugin';
import formPlugin from '@tailwindcss/forms';

const config: Config = {
  content: [
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'components/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.violet['600'],
        'primary-hover': colors.violet['700'],
        default: colors.slate,
      },
    },
  },
  plugins: [
    prelinePlugin,
    formPlugin,
  ],
};

export default config;