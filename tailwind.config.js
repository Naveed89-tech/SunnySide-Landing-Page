const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      height: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),

        screen_half: "80vh",
      }),

      fontFamily: {
        Barlow: ["Barlow,sans-serif"],
        Fraunces: ["Fraunces,sans-serif"],
      },

      borderWidth: {
        40: "40px",
      },
      colors: {
        red: {
          soft_red: "#FE7867",
        },
        yellow: {
          full_yellow: "#FAD400",
        },
        dark: {
          dark_text: "#25564B",
          dark_footer: "#458C7E",
        },
        blue: {
          photo_text: "#19536B",
          dark_blue: "#23303E",
          full_grayish: "#5A636C",
          grayish: "#A7ABAE",
          dark_grayish: "#818498",
          hover_btn: "#9EDFFF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
