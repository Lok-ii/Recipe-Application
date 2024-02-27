/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainText: "#fff",
        hoverText: '#DA2F68',
        backgroundColor: '#04152D',
        extraTextColor: '#04152D',
        lightBackground:  'rgba(3, 9, 27, .5)',
        pinkText: "#da2f68",
        pinkLight : "rgba(218, 47, 104, 0.5)",
        navyLight: "rgba(4, 21, 45, 0.2)"
      },
      backgroundImage : {
        gradientImage: `linear-gradient(transparent 10%, #04152D 90%), url("https://cdn.dribbble.com/userupload/10112502/file/original-278b4cc840daee516a64162a3c699ab7.jpg?resize=1905x1429")`,
        buttonGradient: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)',
        heart: "url('https://cssanimation.rocks/images/posts/steps/heart.png')",
      },
      backgroundPosition:{
        zero: "0 0",
      },
      transitionProperty: {
        "background" : "background-position",

      },
      backgroundColor: {
        transparentBlack : "rgba(0, 0, 0, 0.5)",
        transparentLogo : "rgba(0, 0, 0, 0.3)",
      },
      screens: {
        'mobile-small' : '321px',
        'mobile-medium' : '426px',
        'mobile-large' : '476px',

        'tablet': '769px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  plugins: [],
};
