import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <header>
        <div className='{styles.headerLeft}'>
          <img src="/path/to/instagram_icon.png" alt="Instagram Icon" />
        </div>
        <div className={styles.headerRight}>
          <img src="/path/to/notification_icon.png" alt="Notification Icon" />
          <img src="/path/to/message_icon.png" alt="Message Icon" />
        </div>
      </header>
      <main>

      </main>

      <footer>

      </footer>

    </div>
  )
}
