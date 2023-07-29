import React from 'react';
import styles from "./image.module.css"

const ImageSection = ({url}) => (
  <div className={styles.image}>
    <img src={url} />
  </div> 
);

export default ImageSection;
