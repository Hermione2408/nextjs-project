import React from 'react';
import styles from "./icon.module.css"

const IconSection = () => (
  <div className={styles.icons}>
    <div>
      <span className={styles.icon}>Like Icon</span> {/* Like Icon placeholder */}
      <span className={styles.icon}>Comment Icon</span> {/* Comment Icon placeholder */}
    </div>
    <div>
      <span className={styles.icon}>Bookmark Icon</span> {/* Bookmark Icon placeholder */}
    </div>
  </div>
);

export default IconSection;
