import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/material';

export const LogoText = styled('span')(() => ({
  fontFamily: '"Lobster", cursive',
  fontSize: '1.75rem',
  color: pink[400],
}));

export const LogoTag = styled('sup')(({ theme: { palette, typography } }) => ({
  backgroundColor: palette.primary.light,
  color: '#FFF',
  borderRadius: '2rem',
  padding: '0.25rem 0.75rem',
  fontSize: '10px',
  marginLeft: '0.25rem',
  fontWeight: typography.fontWeightBold,
  position: 'absolute',
}));
