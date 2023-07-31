import styles from './sidebar.module.css';
import Image from 'next/image'
import Logo from '../../assets/img/svg/Instagram_logo.svg.png';
import Home from '../../assets/img/svg/home.png';
import Search from '../../assets/img/svg/search.png';
import Create from '../../assets/img/svg/create.png';
import Reels from '../../assets/img/svg/reels.png';
import Link from 'next/link';
import Tooltip from '../Tooltip';
const NavBarDesktop = () => {
    return (
        <div className={styles.container}>
            <div>
            <Image className={styles.icon} src={Logo} width={103} height={32} alt="Logo" />
            </div>
            <div className={styles.icons}>
            <Link href={"/"}>
            <div className={styles.subcontainer}>
            <Image className={styles.icon} src={Home} width={24} height={24} alt="Home" />
            <span className={styles.iconName}>Home</span>
            </div>
            </Link> 
            <Tooltip content={"To be implemented"}>
                <div className={styles.subcontainer}>
                <Image className={styles.icon} src={Search} width={24} height={24} alt="Search" /> 
                <span className={styles.iconName}>Search</span>
                </div>
            </Tooltip>   
            <div className={styles.subcontainer}>
            <Image className={styles.icon} src={Create} width={24} height={24} alt="Create" /> 
            <span className={styles.iconName}>Create</span>

            </div>  
            <div className={styles.subcontainer}>
            <Image className={styles.icon} src={Reels} width={24} height={24} alt="Reels" /> 
            <span className={styles.iconName}>Reels</span>

            </div>
            </div>
                        </div>
    );
};

export default NavBarDesktop;