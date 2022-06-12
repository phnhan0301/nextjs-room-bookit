import React from 'react';
import {
  Image3dEffectRoot,
  Images,
  ImageItem,
  Side,
} from './Image3dEffect.styled';

interface Image3dEffectProps {
  frontImage: string;
  backImage: string;
}

const Image3dEffect = ({ frontImage, backImage }: Image3dEffectProps) => {
  return (
    <Image3dEffectRoot>
      <Side direction="left" />
      <Side direction="right" />

      <Images>
        <ImageItem
          type="front"
          style={{
            backgroundImage: `url(${frontImage})`,
          }}
        />
        <ImageItem
          type="back"
          style={{
            backgroundImage: `url(${backImage})`,
          }}
        />
      </Images>
    </Image3dEffectRoot>
  );
};

export default Image3dEffect;
