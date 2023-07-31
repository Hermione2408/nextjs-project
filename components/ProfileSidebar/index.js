import React from 'react';
import styles from './profileSideBar.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import UserIcon from '../ui-components/UserIcon';
import userImage from '../../assets/img/svg/user.svg';

const ProfileSidebar = () => {
    const { userState } = useSelector((state) => state.user);
    const { suggestedUsers } = useSelector((state) => state.user);

    const { data } = userState
    console.log(data, 'sidebar')
    const { data: suggestedUserData } = suggestedUsers
    let user_profileimg = data && data.profile_image && data.profile_image.small || userImage
    let user_username = data && data.username || "instagram user"
    return (
        <div className={styles.sidebar}>
            <Link href={`/profile/${data.username}`}>
                <div>
                    <UserIcon image={user_profileimg} username={user_username || router.query.id} ShowName={true} />

                    <img className={styles.profileImage} src={data.profileImageUrl} alt="user profile" />
                    <p>{data.username}</p>
                </div>
            </Link>
            <h2>Suggested for you</h2>
            <ul>
                {suggestedUserData.map((user) => (
                    <li key={user.username} className={styles.suggestedUser}>
                        <Link href={`/profile/${user.username}`}>
                            <div>
                                <img className={styles.profileImage} src={user.profileImageUrl} alt="user profile" />
                                <p>{user.username}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileSidebar;
