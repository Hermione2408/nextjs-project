import React from 'react';
import styles from "./profile.module.css"

const ProfileSection = ({ post,ShowName }) => (
    <div className={styles.header}>
        <div className={styles.profilePic}></div> {/* Profile picture placeholder */}
        {ShowName && <div>{post.username}</div>}
    </div>
);

export default ProfileSection;
