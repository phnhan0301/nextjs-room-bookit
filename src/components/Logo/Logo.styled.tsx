import { styled } from '@mui/material';
import { pink } from '@mui/material/colors';

export const LogoText = styled('span')<{ size: 'small' | 'normal' | 'large' }>(
  ({ size }) => {
    let fontSize = '1.65rem';
    switch (size) {
      case 'small':
        fontSize = '1rem';
        break;

      case 'large':
        fontSize = '2.5rem';
        break;
    }

    return {
      fontFamily: '"Lobster", cursive',
      fontSize,
      color: pink[400],
    };
  },
);

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
