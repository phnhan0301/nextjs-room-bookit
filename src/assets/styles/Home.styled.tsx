import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const HeroFullSlider = styled(Box)(() => ({
  height: '85vh',
  backgroundColor: '#ddd',
}));

export const SearchForm = styled(Box)(() => ({
  backgroundColor: '#fff',
  padding: '2rem',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
  marginTop: '-55px',
}));

export const RoomSuggestionBox = styled(Box)(() => ({
  backgroundColor: '#ddd',
  padding: '3rem 0',
  position: 'relative',
  zIndex: 1,

  '&::before': {
    position: 'absolute',
    content: '""',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: -1,
    opacity: 0.3,
    background:
      'url("https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1655053780~exp=1655054380~hmac=f7410ba4570f7178404e7656257e4ff260d1459342769cbc0ae2fe13b89b6192&w=1980")',
    backgroundSize: 'cover',
  },
}));
