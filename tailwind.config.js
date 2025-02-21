/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('public/images/—Pngtree—islamic background muharram with lantern_1207103.jpg')",
    },
  },
  plugins: [],
}
}
