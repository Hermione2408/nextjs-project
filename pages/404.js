import React from 'react';
import styles from '../styles/404.module.css';
import NotFound from '../assets/img/svg/404.svg'
import Image from 'next/image';
import Link from 'next/link';
const Custom404 = () => {
  return (
    <div className={styles.container}>
      <span>Page not found!</span>
      <div className={styles.imagePlaceholder}>
        <Image src={NotFound} alt='404 image' className={styles.image} />
      </div>
      <Link href={"/"}><span className={styles.link}>Go back home</span></Link>
    </div>
  );
};

export default Custom404;
