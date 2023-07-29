import styles from './navBarMobile.module.css';
import ProfileSection from '../ui-components/Profile/profile';
const NavBarMobile = () => {
    return (
        <div className={styles.container}>
            NavBarMobile
            <footer className={styles.footer}>
            <img src="" alt="Home Icon"/>
            <img src="" alt="Search Icon"/>
            <img src="" alt="Create Icon"/>
            <img src="" alt="Reels Icon"/>
            <ProfileSection post={{username:'test'}} ShowName={false} />
            <img src="" alt="Profile Icon"/>
        </footer>
        </div>
    );
};

export default NavBarMobile;