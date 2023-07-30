import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css';
import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import ProfileStats from '../../components/ProfileStats';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Page({isMobileView}) {
  console.log("profile")
  const router = useRouter()
  let id = router.query.id
  const [userDetails,setUserDetails]=useState({})

  const fetchDetails = async(id)=>{
    const response = await axios.get(`https://api.unsplash.com/users/me`, {
    params: { count: 10 },
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

  useEffect(()=>{
    fetchDetails(id)
  },[])
  return (
    <div className={styles.container}>
    { !isMobileView && <NavBarDesktop />}
    <div className={styles.home}>
     <ProfileSection/>
     {/* <NavBarMobile/> */}
    </div>
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}