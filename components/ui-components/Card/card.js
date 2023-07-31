// Card.js
import React, { useEffect } from 'react';
import styles from "./card.module.css"
import ProfileSection from '../UserIcon/index.js';
import ImageSection from '../Image/image';
import IconSection from '../Icons/icon';
import {useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
// import axios from "axios";

const Card = ({ post,id,user }) => {
  console.log(post, "POST")
  let user_profileimg = post && post.user && post.user.profile_image &&post.user.profile_image.small || (user && user.profile_image && user.profile_image.small) || ""
  let user_username = post && post.user && post.user.username || (user && user.username) || ""
  // let postLiked = post.liked_by_user
  const router = useRouter()
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
            <ProfileSection image={user_profileimg} username={user_username || router.query.id || 'hermione'} ShowName={true} />
          </div>
        </Link>
        <ImageSection url={post.urls.small_s3} />
        <div className={styles.content}>
          <IconSection postLiked={postLiked} onLike={handleLike}/>
          {post.likes && <div><strong>{post.likes}</strong> likes </div>}
          {post.username && post.caption && <div><strong>{post.username}</strong> {post.caption}</div>}
          {post.comments && <div className={styles.comments}>{post.comments}</div>}
        </div>
      </div>
  );
};

export default Card;
