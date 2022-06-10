import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material';
import baseThemeOptions from './_themeOptions';

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    text: {
      primary: '#2c3e50',
    },
  },
};

export default createTheme(lightThemeOptions);
