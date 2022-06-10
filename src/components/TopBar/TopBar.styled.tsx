import { Box, styled } from '@mui/material';

export const TopBarRoot = styled(Box)(({ theme: { palette } }) => ({
  borderBottom: '1px solid rgba(0, 0, 0, 0.075)',
  paddingTop: '0.35rem',
  paddingBottom: '0.35rem',
  fontSize: '12px',
  backgroundColor: palette.background.default,
}));
