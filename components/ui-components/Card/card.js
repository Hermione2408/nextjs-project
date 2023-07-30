// Card.js
import React from 'react';
import styles from "./card.module.css"
import ProfileSection from '../UserIcon/index.js';
import ImageSection from '../Image/image';
import IconSection from '../Icons/icon';
import {useState} from 'react';
import Link from 'next/link';
// import axios from "axios";

const Card = ({ post }) => {

  console.log(post.liked_by_user, "POST")
  let user_profileimg = post.user.profile_image.small
  let user_username = post.user.username
  // let postLiked = post.liked_by_user
  const [postLiked, setPostLiked] = useState(post.liked_by_user);  
  const handleLike = async () => {
    setPostLiked(!postLiked);

    const response = await fetch(`https://api.unsplash.com/photos/${post.id}/like`, {
      method: 'POST',
      headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      }
    });
    const data = await response.json();
    console.log(data);
    
  }
  return (
    <div className={styles.card}>      
      <Link href={`/profile/${user_username}`}>
      <div className={styles.profileHeader}>  
      <ProfileSection image={user_profileimg} username={user_username} ShowName={true} />
      </div>
      </Link>
      <ImageSection url={post.urls.small_s3} />
      <div className={styles.content}>
        <IconSection postLiked={postLiked} onLike={handleLike}/>
        <div><strong>{post.likes}</strong> likes </div>
        <div><strong>{post.username}</strong> {post.caption}</div>
        <div className={styles.comments}>{post.comments}</div>
      </div>
    </div>
  );
};

export default Card;
