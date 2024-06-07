/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'color-white': '#F2F2F2',
                'color-primary': '#22262F',
                'color-secondary': '#292E3B',
                'color-accent': '#DF3A3A',
                'color-light-accent': '#E25050',
                'color-footer': '#1E2025',
            },
            dropShadow: {
                'nav-line': '0 -5px 10px #E25050',
            },
        },
    },
    plugins: [],
}
