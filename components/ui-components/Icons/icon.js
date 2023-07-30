import React from 'react';
import styles from "./icon.module.css"
import Image from 'next/image'
import Like from '../../../assets/img/svg/like.png';
import Liked from '../../../assets/img/svg/liked.png';
import Comment from '../../../assets/img/svg/comment.png';
import Bookmark from '../../../assets/img/svg/bookmark.png';
import Share from '../../../assets/img/svg/send.png';

// import LikeIcon from '../../../assets/img/svg/like.svg'
const IconSection = ({postLiked, onLike}) => (
  <div className={styles.icons}>
    <div>
      {/* <img src={LikeIcon} alt='Like Icon' />   */}
       {postLiked?
         (<Image className={styles.icon}
         src={Liked}
         width={24}
         height={24}
         alt="Likes"
         onClick={onLike} 

       />):
       
    (  <Image className={styles.icon}
        src={Like}
        width={24}
        height={24}
        alt="Likes"
        onClick={onLike} 
      />)
       }
      <Image className={styles.icon}
        src={Comment}
        width={24}
        height={24}
        alt="Comment"
      />  
      <Image className={styles.icon}
        src={Share}
        width={24}
        height={24}
        alt="Share"
      /> 
        </div>
    <div>
    <Image
        src={Bookmark}
        width={24}
        height={24}
        alt="Bookmark"
      />      </div>
  </div>
);

export default IconSection;
