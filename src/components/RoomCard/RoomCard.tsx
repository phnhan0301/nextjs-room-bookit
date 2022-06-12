import React, {
  MouseEvent,
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import {
  CardImageFeature,
  CardMediaThumb,
  ImageFeature,
} from './RoomCard.styled';

interface RoomCardProps {
  images: string[];
  title: string;
  excerpt?: string;
}

const RoomCard = ({ images, title, excerpt }: RoomCardProps) => {
  const [cardMediaIndex, setCardMediaIndex] = useState(0);

  const changeCardMediaIndex = (event: SyntheticEvent) => {
    const idx = +(event.currentTarget.getAttribute('data-index') || 0);
    setCardMediaIndex(idx);
  };

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        const imageFeatureIndex =
          cardMediaIndex == images.length - 1 ? 0 : cardMediaIndex + 1;
        setCardMediaIndex(imageFeatureIndex);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [images, cardMediaIndex]);

  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardImageFeature>
        <ImageFeature image={images[cardMediaIndex]} />

        {images.length > 1 && (
          <CardMediaThumb
            position="absolute"
            direction="row"
            justifyContent="end"
            paddingX={2}
            spacing={2}
          >
            {[...images].slice(0, 5).map((image, idx) => (
              <MuiLink
                role="link"
                key={`thumb_${idx}`}
                data-index={idx}
                width={75}
                height={42}
                sx={{
                  display: 'block',
                  cursor: 'pointer',
                  ...(cardMediaIndex == idx && {
                    border: '2px solid',
                    borderColor: 'primary.light',
                  }),
                }}
                onClick={changeCardMediaIndex}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="image"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </MuiLink>
            ))}
          </CardMediaThumb>
        )}
      </CardImageFeature>

      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          <Link href="" passHref>
            <MuiLink underline="hover" color="inherit">
              {title}
            </MuiLink>
          </Link>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
