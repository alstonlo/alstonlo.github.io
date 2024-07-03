/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.liquid',
    './_includes/**/*.liquid',
    './_layouts/**/*.liquid',
    './_posts/*.md',
    './*.md',
    './*.liquid',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      fontFamily: { 
        "roboto": ['Roboto', 'sans-serif'],
      }, 
      colors: {
        'primary-dark': '#00181B',
        'primary-accent': '#009178'
      }
    },
  },
  plugins: []
}