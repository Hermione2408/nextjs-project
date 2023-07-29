import React from 'react';
import styles from "./profile.module.css"

const ProfileSection = ({ image,username,ShowName }) =>{
    return(
    <div className={styles.header}>
        <img src={image} className={styles.profilePic} />
        {ShowName && <div>{username}</div>}
    </div>)
};

export default ProfileSection;
