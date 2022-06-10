import { AppBar, AppBarProps, styled } from '@mui/material';
import { Link } from '@mui/material';
import { ElementType } from 'react';

export const ClientAppBar = styled(AppBar)<
  AppBarProps & { component?: ElementType }
>(({ theme: { palette } }) => ({
  boxShadow: ' rgba(17, 17, 26, 0.1) 0px 1px 0px',
  color: palette.text.primary,
  backgroundColor: palette.background.default,
}));

export const NavLink = styled(Link)<{ activated?: number }>(
  ({ theme: { palette, typography }, activated = false }) => ({
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
    color: 'inherit',

    ...(!!activated && {
      color: palette.primary.main,
      fontWeight: typography.fontWeightMedium,
      position: 'relative',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-0.25rem',
        left: 0,
        height: '2px',
        borderRadius: '10rem',
        width: '20px',
        backgroundColor: palette.primary.main,
      },
    }),

    '&:hover': {
      color: palette.primary.main,
      transform: 'translate(0.15rem, -0.25rem)',
    },
  }),
);
