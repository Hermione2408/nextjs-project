import styles from '../styles/Footer.module.css';
import like from '../assets/img/svg/like.svg'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src='like' alt="Home Icon"/>
            <img src="" alt="Search Icon"/>
            <img src="" alt="Create Icon"/>
            <img src="" alt="Reels Icon"/>
            <img src="" alt="Profile Icon"/>
        </footer>
    );
};

export default Footer;