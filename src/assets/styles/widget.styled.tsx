import { styled, Typography } from '@mui/material';

export const WidgetTitle = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '2.25rem',
  position: 'relative',

  '&::after': {
    position: 'absolute',
    content: '""',
    height: '3px',
    width: '50px',
    bottom: '-0.35rem',
    left: 0,
    backgroundColor: palette.secondary.main,
    borderRadius: '99rem',
  },
}));
