import React from 'react';
import styles from "./image.module.css"
import Image from 'next/image';

const ImageSection = ({url, hashUrl,height,width,isMobileView}) => {
  const heightImg = height ? height/10: 200
  const widthImg = width ? width/10:200
  return (
    <div className={styles.image}>
      <Image src={url} blurDataURL={hashUrl} height={heightImg} width={widthImg} />
    </div>
  )
};

export default ImageSection;
