import Image from 'next/image';
import React from 'react';
import { GitRibbonRoot } from './GitRibbon.styled';

interface GitRibbonProps {
  type: string;
  url: string;
}

const GitRibbon = ({ type, url }: GitRibbonProps) => {
  return (
    <>
      {url && (
        <GitRibbonRoot href={url} target="_blank">
          <Image src={`/icons/${type}.svg`} height={30} width={30} alt={type} />
        </GitRibbonRoot>
      )}
    </>
  );
};

export default GitRibbon;
