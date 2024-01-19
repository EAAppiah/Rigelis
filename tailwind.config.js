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
        // testimonial1
        // testimonial2
        // staff_Quao
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

