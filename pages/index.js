import styles from '../styles/Home.module.css';
import NavBarDesktop from '../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../components/SideBarDesktop/sideBarDesktop';
import HomeFeed from '../components/HomeFeed/homeFeed';
import NavBarMobile from '../components/NavBarMobile/navBarMobile';
import { fetchPhotos } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Home({isMobileView}) {
  console.log(isMobileView)
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.user);
  const fetchMorePhotos = () => {
    console.log('1111')
    return new Promise((resolve, reject) => {
      dispatch(fetchPhotos('refetch'))
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
    fetchMorePhotos()
  },[])
  const { data: posts } = photos;
  console.log(photos,"222")

  return (
    <div className={styles.container}>
     { !isMobileView && <NavBarDesktop className={styles.navbarDesktop} />}
     <div className={styles.home}>
      <div className={styles.homeFeed}>
      {(posts&&posts.length>0) &&<HomeFeed isMobileView={isMobileView} data={posts} fetchingFunction={fetchMorePhotos} />}
      </div>
      <div>
      {isMobileView && <NavBarMobile/>}
      </div>
     </div>
    </div>
  )
}
