// Card.js
import React from 'react';
import styles from "./card.module.css"
import ProfileSection from '../Profile/profile';
import ImageSection from '../Image/image';
import IconSection from '../Icons/icon';


const Card = ({ post }) => {

  console.log(post.liked_by_user, "POST")
  let user_profileimg = post.user.profile_image.small
  let user_username = post.user.instagram_username
  let postLiked = post.liked_by_user
  return (
    <div className={styles.card}>
      <ProfileSection image={user_profileimg} username={user_username} ShowName={true} />
      <ImageSection url={post.urls.small_s3} />
      <div className={styles.content}>
        <IconSection postLiked={postLiked}/>
        <div><strong>{post.likes}</strong> likes </div>
        <div><strong>{post.username}</strong> {post.caption}</div>
        <div className={styles.comments}>{post.comments}</div>
      </div>
    </div>
  );
};

export default Card;
