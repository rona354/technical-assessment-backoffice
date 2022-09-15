const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}