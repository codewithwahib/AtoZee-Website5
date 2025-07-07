import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#1D4ED8',   // blue-700
        secondary: '#F97316', // orange-500
        accent: '#22C55E',    // green-500
        lightbg: '#fdfbf8',
        brownPrimary: '#6B4F3B',
        brownSecondary: '#8B6E4F',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Roboto', 'Inter', 'sans-serif'], // Added Noto Sans as primary sans
        heading: ['Roboto', 'Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'], // Explicit Noto Sans family
        serif: ['"Roboto Slab"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        baskerville: ['"Libre Baskerville"', 'serif'],
        bubble: ['"Comic Neue"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif']
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.03em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
}

export default config