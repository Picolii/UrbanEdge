const {addDynamicIconSelectors, addIconSelectors  } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}','./src/**/*.component.{html,ts}'],
  plugins: [addDynamicIconSelectors(), addIconSelectors(['ic']),],
}

