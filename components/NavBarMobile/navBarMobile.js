import styles from './navBarMobile.module.css';
import UserIcon from '../ui-components/UserIcon/index';
import Image from 'next/image'
import Home from '../../assets/img/svg/home.png';
import Search from '../../assets/img/svg/search.png';
import Create from '../../assets/img/svg/create.png';
import Reels from '../../assets/img/svg/reels.png';
// import Message from '../../assets/img/svg/message.png';
import Profile from '../../assets/img/svg/profile-picture.jpg';

import Link from 'next/link'
import { useSelector } from 'react-redux'
const NavBarMobile = () => {
    const { userState } = useSelector((state) => state.user);
    return (
        <div className={styles.container}>
                <Link href={`/`}>
                    <Image className={styles.icon}
                        src={Home}
                        width={24}
                        height={24}
                        alt="Home"
                    />
                </Link>
                <Image className={styles.icon}
                    src={Search}
                    width={24}
                    height={24}
                    alt="Search"
                />
                <Image className={styles.icon}
                    src={Create}
                    width={24}
                    height={24}
                    alt="Create"
                />
                <Image className={styles.icon}
                    src={Reels}
                    width={24}
                    height={24}
                    alt="Reels"
                />
                <div className={styles.profileImageContainer}>
                <Link href={`/profile/me`}><UserIcon post={{ username: 'test' }} ShowName={false} /></Link>
                </div>

        </div>
    );
};

export default NavBarMobile;