import { styled, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';

export const WidgetTitle = styled(Typography)(() => ({
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
    backgroundColor: pink[400],
    borderRadius: '99rem',
  },
}));
