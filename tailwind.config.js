/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme: Royal Dark Blue Brand
        royalBlue: '#23395d',
        royalBlueHover: '#1b2b47',
        royalBlueLight: 'rgba(35, 57, 93, 0.12)',
        
        // Dark Theme: Photo-Harmonized Warm Champagne Gold & Tailored Charcoal
        photoGold: '#e2c08d',
        photoGoldHover: '#f3d8a8',
        photoSage: '#79a96e',
        photoDarkBg: '#0e0e11',
        photoDarkCard: 'rgba(22, 21, 26, 0.85)',
        photoDarkBorder: 'rgba(255, 255, 255, 0.12)',

        themeText: '#0f172a',
        themeMuted: '#475569',
        themeBg: '#f1f4f8',
        themeSurface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'royal': '0 10px 30px -10px rgba(35, 57, 93, 0.3)',
        'royal-sm': '0 4px 15px -3px rgba(35, 57, 93, 0.2)',
        'photo-gold': '0 10px 30px -10px rgba(226, 192, 141, 0.3)',
        'photo-glow': '0 0 20px -3px rgba(226, 192, 141, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
