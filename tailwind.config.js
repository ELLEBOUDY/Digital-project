/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./javaScript/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Works with both Node tooling (module.exports) and Play CDN (window.tailwind.config).
if (typeof module !== "undefined" && module.exports) {
  module.exports = tailwindConfig;
}

if (typeof window !== "undefined") {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = tailwindConfig;
}
