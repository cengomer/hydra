/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'ip': {'min': '768px', 'max': '1078px'}
      },
      backgroundColor: { 
        'primary' : '#8176AF',
        'secondary': 'rgba(0, 0, 0, 0.13)',
        'card' : 'radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)',
        'rare':'rgba(13, 13, 13, 0.32)'

      },
      textColor : { 
        'primary' : '#8176AF',
        'rare':'rgba(13, 13, 13, 0.32)',
        'snow':'#343045'
      },
      boxShadow: {
        'secondary': 'rgba(0, 0, 0, 0.13)',
      },
      borderRadius: {
        '100/100/100/240': '100px 100px 100px 240px',
      },
      backgroundSize: {
        'auto-2900': 'auto 2900%',
      },
      backgroundPosition: {
        'center-53.89': '50% 53.89%',
      },
      backgroundImage: {
        'radial': 'radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)',
        'custom': "url('https://images.unsplash.com/photo-1633521184087-cba52bd78fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
            },
    },
  },
  plugins: [],
}