import styles from './navBarMobile.module.css';
import ProfileSection from '../ui-components/Profile/profile';
import Image from 'next/image'
import Home from '../../assets/img/svg/home.png';
import Search from '../../assets/img/svg/search.png';
import Create from '../../assets/img/svg/create.png';
import Reels from '../../assets/img/svg/reels.png';

const NavBarMobile = () => {
    return (
        <div className={styles.container}>
            NavBarMobile
            <footer className={styles.footer}>
            <Image className={styles.icon}
        src={Home}
        width={24}
        height={24}
        alt="Home"
      />
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
           
            <ProfileSection post={{username:'test'}} ShowName={false} />
            <img src="" alt="Profile Icon"/>
        </footer>
        </div>
    );
};

export default NavBarMobile;