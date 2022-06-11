import { Link, styled } from '@mui/material';
import { hexToRgb } from 'app/helpers';

export const GitRibbonRoot = styled(Link)(({ theme: { breakpoints } }) => ({
  position: 'fixed',
  top: '0',
  right: '0',
  padding: '4rem 5rem 0.5rem',
  zIndex: '99999',
  backgroundColor: '#1976d2',
  color: '#fff',
  textDecoration: 'none',
  transform: 'rotate(45deg) translate(14%, -80%)',
  display: 'none',
  transition: 'all 0.3s ease-in-out',

  [breakpoints.up('lg')]: {
    display: 'block',
  },

  '&:hover': {
    boxShadow: `
    0 10px 15px -3px rgb(${hexToRgb('1976d2')?.replaceAll(',', ' ')} / 50%),
    0 4px 6px -4px rgb(${hexToRgb('1976d2')?.replaceAll(',', ' ')} / 50%)`,
  },

  '& *': {
    display: 'block',
    transform: 'rotate(-180deg)',
  },
}));
