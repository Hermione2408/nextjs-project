// Card.js
import React from 'react';
import styles from "./card.module.css"
import ProfileSection from '../Profile/profile';
import ImageSection from '../Image/image';
import IconSection from '../Icons/icon';

const Card = ({ post }) => {

    let user_profileimg = post.user.profile_image.small
    let user_username = post.user.instagram_username
  return (
    <div className={styles.card}>
      <ProfileSection image={user_profileimg} username={user_username} ShowName={true} />
      <ImageSection url={post.urls.small_s3} />
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
