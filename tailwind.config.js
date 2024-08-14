
module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom-20': '20rem',
        'custom-30': '30rem',
        'custom-40': '40rem',
       
      },
    },
  },
  plugins: [],
};
