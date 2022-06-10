import { styled } from '@mui/material';
import { Link } from '@mui/material';

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
