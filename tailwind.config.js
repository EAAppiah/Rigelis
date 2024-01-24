/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#3C0753',
          secondary: '#720455',
          tertiary: '#910A67',
        },
        grey: '#e8f0f1',
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        primary: 'Poppins',
        secondary: 'Roboto Slab',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: "url('/assets/services/bg.svg')",
        testimonial: "url('/assets/testimonials/bg.svg')",
        quoteLeft: "url('/assets/testimonials/quote-left.svg')",
        quoteRight: "url('/assets/testimonials/quote-right.svg')",
        // staff_Kusi
        // Staff_Apeku
        // Staff_Heku
        // Staff_Appiah
        // Staff_Crentsil
        // Application
      },
    },
  },
  plugins: [],
}

