/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  safelist: [
    'bg-white/opacity-10',
    'border-white/opacity-20',
    'bg-white/opacity-5',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#dcf1f0',
          200: '#b8e3e1',
          300: '#94d5d2',
          400: '#70c7c3',
          500: '#4bb9b4',
          600: '#389591',
          700: '#257e7a',
          800: '#155355',
          900: '#0d3332',
        },
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(16px)',
      },
      backgroundColor: {
        'glassmorphism': 'rgba(255, 255, 255, 0.1)',
        'glassmorphism-dark': 'rgba(30, 30, 30, 0.1)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, rgba(75, 185, 180, 0.1), rgba(51, 146, 93, 0.1))',
        'gradient-soft-dark': 'linear-gradient(135deg, rgba(56, 102, 170, 0.1), rgba(45, 213, 176, 0.1))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
