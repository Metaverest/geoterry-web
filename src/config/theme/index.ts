import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import getLPTheme from './get-lp-theme'

const createTheme = (): Theme => {
  return createMuiTheme(getLPTheme('dark'))
}

const theme = createTheme()

export default theme
