// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5f2f7',
    primary: '#8352b7',
    secondary: '#b381ea',
    accent: '#9e48f9',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },

    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
