import { Box } from '@mui/material';
import { LogoTag, LogoText } from './Logo.styled';

interface LogoProps {
  size?: 'small' | 'normal' | 'large';
}

const Logo = ({ size = 'normal' }: LogoProps) => {
  return (
    <Box position="relative">
      <LogoText size={size}>Room BookIT.</LogoText>
      <LogoTag>NextJs</LogoTag>
    </Box>
  );
};

export default Logo;
