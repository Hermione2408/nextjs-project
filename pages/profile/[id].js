import { useRouter } from 'next/router'
import SideBarDesktop from '../../components/ProfileSidebar';
import NavbarDesktop from '../../components/Sidebar/index';
import NavBarMobile from '../../components/NavBarMobile/navBarMobile';
import ProfileSection from '../../components/ProfileSection/profileSection';
import ProfileStats from '../../components/ProfileStats';
import styles from "./profile.module.css"
import Loading from '../../components/Loading/loading';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Page({isMobileView}) {
  console.log("profile")
  const router = useRouter()
  let id = router.query.id
  const [userDetails,setUserDetails]=useState({})
  const [loading,setLoading] = useState(true)
  const fetchDetails = async(username)=>{
    const response = await axios.get(`https://api.unsplash.com/users/${username}`, {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    }
  });

  if (response.status !== 200) {
    setLoading(false)
    throw new Error('Failed to fetch photos');
  }
  setUserDetails(response.data)
  setLoading(false)
  return ;
  }
  console.log(userDetails,'data')
  useEffect(()=>{
    const { id } = router.query;

    fetchDetails(id)
  },[router.query])
  return (
    <>
    {loading ? <Loading />:(
      <div className={styles.container}>
    { !isMobileView && <NavbarDesktop />}
    <div className={styles.home}>
     {Object.keys(userDetails).length>0 && <ProfileSection userData={userDetails} photosData={userDetails.photos} />}
    </div>
    <div style={{position:"fixed"}}>
      {isMobileView && <NavBarMobile/>}
    </div>
    {/* {!isMobileView && <SideBarDesktop/>} */}
   </div>)}
   </>
  )
}