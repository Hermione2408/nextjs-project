import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import { useSelector } from 'react-redux';
import styles from "./profile.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Page({isMobileView}) {
  console.log("profile")
  const { userState } = useSelector((state) => state.user);
  const [photosData,setPhotosData] = useState([])
 
//   useEffect(()=>{
//     const response = fetchPhotos().then((res)=>{
//         console.log(res,"RES")

//         setPhotosData(res)
//     })
//   },[])
  console.log(userState)
  const {data} = userState
  return (
    <div className={styles.container}>
    { !isMobileView && <NavBarDesktop />}
    <div className={styles.home}>
     <ProfileSection userData = {data} photosData={photosData} />
     {/* <NavBarMobile/> */}
    </div>
    <div style={{position:"fixed"}}>
      {isMobileView && <NavBarMobile/>}
    </div>
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}


