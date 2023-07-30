import { useRouter } from 'next/router'
import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import ProfileStats from '../../components/ProfileStats';
import styles from "./profile.module.css"

import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Page({isMobileView}) {
  console.log("profile")
  const router = useRouter()
  let id = router.query.id
  const [userDetails,setUserDetails]=useState({})

  const fetchDetails = async(username)=>{
    const response = await axios.get(`https://api.unsplash.com/users/${username}`, {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    }
  });

  if (response.status !== 200) {
    throw new Error('Failed to fetch photos');
  }
  setUserDetails(response.data)
  return ;
  }
  console.log(userDetails,'data')
  useEffect(()=>{
    const { id } = router.query;

    fetchDetails(id)
  },[router.query])
  return (
    <div className={styles.container}>
    { !isMobileView && <NavBarDesktop />}
    <div className={styles.home}>
     {Object.keys(userDetails).length>0 && <ProfileSection userData={userDetails} photosData={userDetails.photos} />}
    </div>
    <div style={{position:"fixed"}}>
      {isMobileView && <NavBarMobile/>}
    </div>
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}