import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'icon-sm': '1.5rem', // 24px
        'icon-md': '2rem', // 32px
        'icon-lg': '2.5rem', // 40px
        'icon-xl': '3rem', // 48px
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|border)-(red|yellow|green|gray|blue)-(300|500)/,
    },
  ],
  plugins: [],
};
export default config;
