import styles from './navBarDesktop.module.css';
import Image from 'next/image'
import Logo from '../../assets/img/svg/Instagram_logo.svg.png';
import Home from '../../assets/img/svg/home.png';
import Search from '../../assets/img/svg/search.png';
import Create from '../../assets/img/svg/create.png';
import Reels from '../../assets/img/svg/reels.png';
import Link from 'next/link';
import UserIcon from '../ui-components/UserIcon/index';
import Like from '../../assets/img/svg/like.png'
import Explore from '../../assets/img/svg/explore.png'
import Message from '../../assets/img/svg/message.png'

const NavBarDesktop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image className={styles.icon} src={Logo} width={103} height={40} alt="Logo" />
            </div>
            <div className={styles.icons}>
            <div className={styles.iconLeftContainer}>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Home} width={24} height={24} alt="Home" />
                    <span>Home</span>
                </div>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Reels} width={24} height={24} alt="Reels" />
                    <span>Reels</span>
                </div>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Create} width={24} height={24} alt="Create" />
                    <span>Create</span>
                </div>  
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Explore} width={24} height={24} alt="Explore" />
                    <span>Explore</span>
                </div>
            </div>
            </div>
            <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input type="text" placeholder="Search" className={styles.searchInput}/>
                <div className={styles.searchIcon}>
                    <Image className={styles.icon} src={Search} width={16} height={16} alt="Search" />
                </div>
            </div>
            </div>
            <div className={styles.iconsLeft}>
            <div className={styles.iconContainer}>
            <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Like} width={24} height={24} alt="Notification" />
                    {/* <span>Notifications</span> */}
                </div>
                <div className={styles.subcontainer}>
                    <Image className={styles.icon} src={Message} width={27} height={27} alt="Message" />
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.profileImageContainer}>
                <Link href={`/profile/me`}><UserIcon post={{ username: 'test' }} ShowName={false} /></Link>
                </div>
                </div>
         
              
            </div>
            </div>
       
        </div>
    );
};

export default NavBarDesktop;
