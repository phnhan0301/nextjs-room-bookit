import { styled } from '@mui/material';

export const ClientLayoutRoot = styled('div')(() => ({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateAreas: `
    "topbar"
    "navbar"
    "main"
    "footer"
  `,
  gridTemplateRows: 'max-content max-content 1fr max-content',
}));
