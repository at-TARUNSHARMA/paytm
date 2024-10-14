module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // This ensures Tailwind can scan all React files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
