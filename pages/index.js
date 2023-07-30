import styles from '../styles/Home.module.css';
import NavBarDesktop from '../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../components/SideBarDesktop/sideBarDesktop';
import HomeFeed from '../components/HomeFeed/homeFeed';
import NavBarMobile from '../components/NavBarMobile/navBarMobile';
import { fetchPhotos } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelfDetails } from '../store/userSlice';
import { useEffect } from 'react';

export default function Home({isMobileView}) {
  console.log(isMobileView)
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.user);
  const fetchUserDetails = ()=>{
      dispatch(fetchSelfDetails())
  }
  const fetchMorePhotos = () => {
    console.log('1111')
    return new Promise((resolve, reject) => {
      dispatch(fetchPhotos())
        .then(() => {
          console.log('Fetched more photos');
          resolve();
        })
        .catch((error) => {
          console.error('Error fetching more photos', error);
          reject(error);
        });
    });
  }
  useEffect(()=>{
    fetchUserDetails()
  },[])
  const { data: posts } = photos;
  console.log(photos,"222")

  return (
    <div className={styles.container}>
     { !isMobileView && <NavBarDesktop />}
     <div className={styles.home}>
      <div className={styles.homeFeed}>
      <HomeFeed data={posts} fetchingFunction={fetchMorePhotos} />
      </div>
      <div>
      {isMobileView && <NavBarMobile/>}
      </div>
      {/* <NavBarMobile/> */}
     </div>
     {!isMobileView && <SideBarDesktop/>}
    </div>
  )
}
