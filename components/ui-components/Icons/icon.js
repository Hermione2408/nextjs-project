import React from 'react';
import styles from "./icon.module.css"
import LikeIcon from '../../../assets/img/svg/like.svg'
const IconSection = () => (
  <div className={styles.icons}>
    <div>
      <img src={LikeIcon} alt='Like Icon' />  
      <span className={styles.icon}>Comment Icon</span> {/* Comment Icon placeholder */}
    </div>
    <div>
      <span className={styles.icon}>Bookmark Icon</span> {/* Bookmark Icon placeholder */}
    </div>
  </div>
);

export default IconSection;
