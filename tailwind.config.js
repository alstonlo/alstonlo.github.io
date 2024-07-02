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
    extend: {
      colors: {
        'primary-dark': '#00181B',
        'primary-accent': '#009178'
      }
    },
  },
  plugins: []
}