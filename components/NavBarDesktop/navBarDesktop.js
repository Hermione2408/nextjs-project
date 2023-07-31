import styles from './navBarDesktop.module.css';
import Image from 'next/image'
import Logo from '../../assets/img/svg/Instagram_logo.svg.png';
import Home from '../../assets/img/svg/home.png';
import Search from '../../assets/img/svg/search.png';
import Create from '../../assets/img/svg/create.png';
import Reels from '../../assets/img/svg/reels.png';

const NavBarDesktop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image className={styles.icon} src={Logo} width={103} height={32} alt="Logo" />
            </div>
            <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input type="text" placeholder="Search" className={styles.searchInput}/>
                <div className={styles.searchIcon}>
                    <Image className={styles.icon} src={Search} width={16} height={16} alt="Search" />
                </div>
            </div>
            </div>
            <div className={styles.icons}>
            <div className={styles.iconContainer}>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Home} width={24} height={24} alt="Home" />
                    <span>Home</span>
                </div>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Create} width={24} height={24} alt="Create" />
                    <span>Create</span>
                </div>  
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Reels} width={24} height={24} alt="Reels" />
                    <span>Reels</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NavBarDesktop;
