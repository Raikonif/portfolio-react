/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'false' or 'class'
  theme: {
    extend: {
      // backgroundColor: {
      //   primary: "var(--color-bg-primary)",
      //   secondary: "var(--color-bg-secondary)"
      // },
      // textColor: {
      //   accent: "var(--color-text-accent)",
      //   primary: "var(--color-text-primary)",
      //   secondary: "var(--color-text-secondary)"
      // },
      colors: {
        // dark_primary: "#06223F",
        dark_primary: "#00BCD4",
        dark_primary_dark: "#0288D1",
        dark_section_accent: "#1976D2",
        bg_light_primary: "#BBDEFB",
        accent_color: "#2196F3",
        // bg_light_primary: "#F5F9FD",
        // gray: "#B7C5D3"
        gray: "#212121"
      },
      backgroundImage: {
        primaryLinear:
          // "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)"
          "linear-gradient(180deg, #00BCD4 0.48%, #D5E3F1 100%)",
        primaryLinearDark:
          "linear-gradient(180deg, #0288D1 0.48%, #1f2937 100%)",
        primarySoftDark: "linear-gradient(180deg, #1976D2 0.48%, #1f2937 100%)"
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)"
      }
    },
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      Roboto: "Roboto",
      Ubuntu: "Ubuntu"
    },
    container: {
      center: true,
      padding: "4rem"
    }
  },
  plugins: []
};
