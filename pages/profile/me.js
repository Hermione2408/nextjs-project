import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css';
import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { fetchSelfDetails } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
export default function Page({isMobileView}) {
  console.log("profile")
  const { userState } = useSelector((state) => state.user);
  console.log(userState,"nncn")
  const dispatch = useDispatch()
  const fetchUserDetails = ()=>{
    if(!userState.data){
        dispatch(fetchSelfDetails())
    }
  }
  useEffect(()=>{
    fetchUserDetails()
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


