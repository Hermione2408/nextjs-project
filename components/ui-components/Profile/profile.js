import React from 'react';
import styles from "./profile.module.css"

const ProfileSection = ({ username }) => (
    <div className={styles.header}>
        <div className={styles.profilePic}></div> {/* Profile picture placeholder */}
        <div>{username}</div>
    </div>
);

export default ProfileSection;
