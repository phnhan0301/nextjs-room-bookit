import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material';
import { pink } from '@mui/material/colors';
import baseThemeOptions from './_themeOptions';

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    text: {
      primary: '#2c3e50',
    },
    secondary: {
      main: pink[400],
    },
  },
};

export default createTheme(lightThemeOptions);
