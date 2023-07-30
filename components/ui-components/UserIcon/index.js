import React from 'react';
import styles from "./userIcon.module.css"
import userImage from '../../../assets/img/svg/user.svg';
import Image from 'next/image';
const ProfileSection = ({ image,username,ShowName }) =>{
    return(
    <div className={styles.header}>
         <Image 
            className={styles.icon}
            src={image ? image :userImage}
            width={24}
            height={24}
            alt="Search"
        />
        {ShowName && <div>{username}</div>}
    </div>)
};

export default ProfileSection;
