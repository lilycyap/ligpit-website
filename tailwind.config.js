/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── BRAND COLOURS ──────────────────────────────────────────────────
      // Edit these to update colours across the entire site
      colors: {
        charcoal:  '#2B2B2B',
        beige:     '#F2EFEA',
        'beige-dark': '#E8E4DC',
        olive:     '#6F7A63',
        'olive-light': '#8A9880',
        'olive-dark':  '#566050',
        gold:      '#B8965A',
        'gold-light': '#C9AB75',
        teal:      '#5B8A7A',
        'teal-light': '#7AA89A',
      },
      // ── TYPOGRAPHY ─────────────────────────────────────────────────────
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      // ── SPACING ────────────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      maxWidth: {
        'prose-xl': '75ch',
        'site': '1280px',
      },
      // ── ANIMATIONS ─────────────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'shimmer':   'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
