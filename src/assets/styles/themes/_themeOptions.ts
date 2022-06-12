import { ThemeOptions } from '@mui/material';
import { hexToRgb } from 'app/helpers';

const baseThemeOptions: ThemeOptions = {
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        maxWidthXl: ({ theme: { breakpoints } }) => ({
          [breakpoints.up('lg')]: {
            maxWidth: breakpoints.values.lg,
          },

          [breakpoints.up('xl')]: {
            maxWidth: breakpoints.values.xl,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: { palette } }) => ({
          minWidth: '150px',
          boxShadow: 'none',

          // Styling for button variant contained
          ...(ownerState.color !== undefined &&
            ownerState.color !== 'inherit' && {
              '&:hover': {
                ...(ownerState.variant &&
                  ['contained', 'outlined'].includes(ownerState.variant) && {
                    backgroundColor: palette[ownerState.color].main,
                    color: '#fff',
                    boxShadow: `
                  0 10px 15px -3px rgb(${hexToRgb(
                    palette[ownerState.color].main,
                  )?.replaceAll(',', ' ')} / 50%),
                  0 4px 6px -4px rgb(${hexToRgb(
                    palette[ownerState.color].main,
                  )?.replaceAll(',', ' ')} / 50%)`,
                  }),
              },
            }),
        }),
      },
    },
  },

  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
};

export default baseThemeOptions;
