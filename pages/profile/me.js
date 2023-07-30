import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css';
import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Page({isMobileView}) {
  console.log("profile")
  const { userState } = useSelector((state) => state.user);
  console.log(userState)
  const {data} = userState
  return (
    <div className={styles.container}>
    { !isMobileView && <NavBarDesktop />}
    <div className={styles.home}>
     <ProfileSection userData = {data}/>
     {/* <NavBarMobile/> */}
    </div>
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}


