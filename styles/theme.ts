interface BaseThemeI {
  colors: {[key: string]: string},
  fonts: {
    calibry: string,
    circeAlt:string,
    circe: string,
    hilvetica: string
  },
}

export const baseTheme:BaseThemeI = {
  colors: {
    primary: '#FFD748',
    secondary: '#104987',
    success: '#38DF7A',

    lightGreen: '#2bd600',
    
    mainBackground: '#A2D3DA',

    fontDark: '#423f45',
    fontLight: '#FFFFFF'
  },

  fonts: {
    calibry: "Calibri",
    circeAlt:'Circe Rounded Alt',
    circe: 'Circe Rounded',
    hilvetica: "Helvetica"
  },

  // media: {
  //   extraLarge: '(max-width: 1140px)',
  //   large: '(max-width: 960px)',
  //   medium: '(max-width: 720px)',
  //   small: '(max-width: 540px)',
  // },

  // // in px
  // sizes: {
  // },

  // // in ms
  // durations: {
  //   ms300: 300,
  // },

  // // z-index
  // order: {
  // },
}