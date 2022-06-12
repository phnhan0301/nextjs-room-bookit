import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';

export const ImageFeature = styled('div')<{ image: string }>(({ image }) => ({
  background: `#ddd url('${image}') no-repeat center center`,
  backgroundSize: 'cover',
  transition: 'all 1s ease-in-out',
  aspectRatio: '16 / 9',
  display: 'block',
}));

export const CardMediaThumb = styled(Stack)(() => ({
  width: '100%',
  bottom: '0',
  transform: 'translateY(0.5rem)',
}));

export const CardImageFeature = styled(Box)(() => ({
  position: 'relative',
}));
