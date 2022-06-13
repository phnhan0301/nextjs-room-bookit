import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { ElementType } from 'react';

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

export const CardTitle = styled(Typography)<{
  component: ElementType;
  line?: number;
}>(
  ({ line }) =>
    !!line &&
    line > 0 && {
      display: '-webkit-box',
      WebkitLineClamp: line,
      WebkitBoxOrient: 'vertical',
      maxHeight: '100px',
      overflow: 'hidden',
    },
);
