import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css';
import NavBarDesktop from '../../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../../components/SideBarDesktop/sideBarDesktop';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import { fetchPhotos } from '../../store/userSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Page({isMobileView}) {
  console.log("profile")
  const { userState } = useSelector((state) => state.user);
  const [photosData,setPhotosData] = useState([])
  const fetchPhotos = async()=>{
    const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: { count: 10 },
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    }
  });

  if (response.status !== 200) {
    throw new Error('Failed to fetch photos');
  }
  console.log(response.data,"RESP")
  return response.data;
  }
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
    {!isMobileView && <SideBarDesktop/>}
   </div>
  )
}


