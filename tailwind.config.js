/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Enable manual dark mode toggle
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Aesthetic Monochrome Palette
                // Light Mode
                light: {
                    bg: '#FFFFFF',
                    surface: '#F5F5F7', // Apple Light Gray
                    text: '#1D1D1F',
                    textMuted: '#86868B',
                    border: '#E5E5EA',
                },
                // Dark Mode
                dark: {
                    bg: '#000000', // True Black
                    surface: '#1C1C1E', // Apple Dark Gray
                    text: '#F5F5F7',
                    textMuted: '#86868B',
                    border: '#38383A',
                },
                // Accent
                accent: {
                    DEFAULT: '#990000', // Currant Red
                    hover: '#7f1d1d',   // Darker Red
                    secondary: '#B45309', // Burnished Gold / Amber
                }
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
