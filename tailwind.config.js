
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom-20': '20rem',
        'custom-30': '30rem',
        'custom-40': '40rem',
        // Add more custom values as needed
      },
    },
  },
  plugins: [],
};
