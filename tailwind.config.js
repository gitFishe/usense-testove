/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3a3a3a',
                bg: '#242424',
                lightGray: '#464646',
                text: {
                    DEFAULT: '#ababab',
                    dark: '#747474',
                },
            },
        },
    },
    plugins: [],
};
