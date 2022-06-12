import { styled } from '@mui/material';

export const Image3dEffectRoot = styled('div')(() => ({
  position: 'relative',
}));

export const Side = styled('div')<{ direction?: 'left' | 'right' }>(
  ({ direction }) => ({
    position: 'absolute',
    width: '100%',
    top: '0',
    bottom: '0',
    zIndex: '10',

    ...(direction && {
      width: '50%',
      [direction]: '0',

      ...(direction === 'left' && {
        '&:hover': {
          '~ div [type="front"]': {
            transform:
              'matrix3d(.94,0,.34,-.0002,0,1,0,0,-.34,0,.94,0,1,0,10,1) translateX(-10px)',
          },
          '~ div [type="back"]': {
            transform:
              'matrix3d(.94,0,.34,-.00025,0,1,0,0,-.34,0,.94,0,1,0,10,1) translateX(30px)',
          },
        },
      }),

      ...(direction === 'right' && {
        '&:hover': {
          '~ div [type="front"]': {
            transform:
              'matrix3d(.94,0,.34,.0002,0,1,0,0,-.34,0,.94,0,1,0,10,1) translateX(30px)',
          },
          '~ div [type="back"]': {
            transform:
              'matrix3d(.94,0,.34,.0005,0,1,0,0,-.34,0,.94,0,1,0,10,1.1) translateX(-100px)',
          },
        },
      }),
    }),
  }),
);

export const Images = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const ImageItem = styled('div')<{ type: 'front' | 'back' }>(
  ({ type }) => ({
    perspective: '200px',
    transition: 'all .2s ease',
    height: '300px',
    width: '500px',
    marginRight: '30px',
    backgroundSize: 'cover',
    boxShadow: '0 15px 75px 0 rgba(0,0,0,.15)',

    ...(type == 'front' && {
      marginRight: '50px',
      zIndex: '1',
      borderRadius: '4px',
    }),

    ...(type === 'back' && {
      marginLeft: '100px',
      marginTop: '-200px',
      backgroundPosition: 'bottom',
      borderRadius: '4px',
    }),
  }),
);
