import { Box } from '@mui/material';
import { LogoTag, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <Box position="relative">
      <LogoText>Room BookIT.</LogoText>
      <LogoTag>NextJs</LogoTag>
    </Box>
  );
};

export default Logo;
