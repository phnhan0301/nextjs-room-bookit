import { Link, PropTypes, styled } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const FooterRoot = styled('footer')(() => ({
  gridArea: 'footer',
  backgroundColor: blueGrey[900],
  color: 'rgba(255, 255, 255, 0.7)',

  '& .MuiInput-root': {
    color: 'inherit',

    '&::before': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));

export const FooterContent = styled('div')(() => ({
  padding: '2rem 0',
}));

export const FooterBottom = styled('div')(() => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
  padding: '1rem 0',
}));

export const FooterLink = styled(Link)<{ color?: PropTypes.Color }>(
  ({ theme: { palette }, color }) => ({
    color: color ? color : 'inherit',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
      color: palette.primary.main,
      transform: 'translate(0.15rem, -0.25rem)',
    },
  }),
);
