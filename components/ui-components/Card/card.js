// Card.js
import React from 'react';
import styles from "./card.module.css"
import ProfileSection from '../Profile/profile';
import ImageSection from '../Image/image';
import IconSection from '../Icons/icon';

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <ProfileSection post={post} ShowName={true} />
      <ImageSection />
      <div className={styles.content}>
        <IconSection />
        <div><strong>{post.likes}</strong> likes</div>
        <div><strong>{post.username}</strong> {post.caption}</div>
        <div className={styles.comments}>{post.comments} comments</div>
      </div>
    </div>
  );
};

export default Card;
