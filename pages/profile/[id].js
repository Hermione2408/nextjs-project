import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';
import NavBarDesktop from '../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../components/SideBarDesktop/sideBarDesktop';
import HomeFeed from '../components/HomeFeed/homeFeed';
import NavBarMobile from '../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
export default function Page() {
  const router = useRouter()
  return (
    <div className={styles.container}>
    { !isMobileView && <NavBarDesktop />}
    <div className={styles.home}>
     <ProfileSection/>
     <div>
     {isMobileView && <NavBarMobile/>}
     </div>
     {/* <NavBarMobile/> */}
    </div>
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}