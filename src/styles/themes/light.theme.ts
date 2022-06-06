import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import baseThemeOptions from './_themeOptions';

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: 'light',
  },
};

export default createTheme(lightThemeOptions);
