import {
  experimental_extendTheme as extendTheme,
  responsiveFontSizes,
} from '@mui/material/styles'

export const theme = responsiveFontSizes(
  extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#7335d4',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#a789d6',
          },
        },
      },
    },
  })
)
