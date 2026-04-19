import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        accent: {
          50: '#FCFAF8',
          100: '#F6F2EC',
          200: '#EBE0D3',
          300: '#DCC3AD',
          400: '#C9A384',
          500: '#B6825B',
          600: '#A46B46',
          700: '#875338',
          800: '#6E4531',
          900: '#59392A',
          950: '#301E15',
        },
        beige: '#F8F5F2',
        charcoal: {
          DEFAULT: '#1F2937',
          light: '#374151',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(14,165,233,0.08)',
        'card': '0 8px 40px rgba(14,165,233,0.12)',
        'card-hover': '0 16px 56px rgba(14,165,233,0.18)',
        'primary': '0 8px 32px rgba(14,165,233,0.30)',
        'accent': '0 8px 32px rgba(182,130,91,0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(14,165,233,0.09) 0%, transparent 70%)',
        'primary-radial': 'radial-gradient(circle at center, rgba(14,165,233,0.12) 0%, transparent 65%)',
        'accent-glow': 'radial-gradient(circle at center, rgba(182,130,91,0.15) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
