module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            video: {
              marginTop: 'inherit',
              marginBottom: 'inherit'
            }
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require('@tailwindcss/aspect-ratio')],
};
