import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBarDesktop from '../components/NavBarDesktop/navBarDesktop';
import SideBarDesktop from '../components/SideBarDesktop/sideBarDesktop';
import HomeFeed from '../components/HomeFeed/homeFeed';
import NavBarMobile from '../components/NavBarMobile/navBarMobile';
export default function Home() {
  return (
    <div className={styles.container}>
     <NavBarDesktop />
     <div className={styles.home}>
      <HomeFeed/>
      <NavBarMobile/>
     </div>
     <SideBarDesktop/>
    </div>
  )
}
