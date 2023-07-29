import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBarDesktop from '../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../components/SideBarDesktop/sideBarDesktop';
import HomeFeed from '../components/HomeFeed/homeFeed';
import NavBarMobile from '../components/NavBarMobile/navBarMobile';
export default function Home({isMobileView}) {
  console.log(isMobileView)
  return (
    <div className={styles.container}>
     { !isMobileView && <NavBarDesktop />}
     <div className={styles.home}>
      <HomeFeed/>
      <NavBarMobile/>
     </div>
     {!isMobileView && <SideBarDesktop/>}
    </div>
  )
}
