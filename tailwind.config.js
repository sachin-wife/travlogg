/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        fullW: "1440px",
      },
      colors: {
        black: "#191825",
        blueShade: "#5D50C6",
        buttonWhite: "#EEEEEE",
        pinkShade: "#F85E9F",
        orangeShade: "#FF5722",
      },
      padding: {
        dpad: "135px",
        buttonPadding: "16px 32px",
      },
      borderRadius: {
        buttonRadius: "100px",
      },

      fontSize: {
        mobileBannerText: "28px",
        bannerText: "69px",
      },
      lineHeight: {
        mobileBannerText: "32px",
        bannerText: "69px",
      },
    },
  },
  plugins: [],
};
