import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import logo from '/public/assets/img/logo.png'
import mascot from '/public/assets/img/white.png'
import Arrow from '/public/assets/img/right-arrow.png'
import favicon from '/public/favicon.ico'



const MainApp = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Lyrid Edition</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.atas}>
            <Image src={logo} alt='logo' unoptimized={true}/>
            <br/>
            <h1 className={styles.title}>Welcome to Lyrid</h1>
            <p className={styles.subtitle}>Get started by editing your Next.JS Application.
              <br/>
              <a href="https://nextjs.org/docs/getting-started">Documentation</a>
            </p>
          </div>
          <div>
            <Image src={mascot} alt='mascot putih' unoptimized={true}/>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.docsEx}>
            <a href="https://docs.lyrid.io" className={styles.boxRight}>
              <div>
                <div className={styles.boxTitle}>
                  <h5 className={styles.docs}>Documentation</h5>
                  <Image className={styles.arrow} src={Arrow} width={20} height={20} alt='right-arrow'/>
                </div>
                <p className={styles.ex}>Find in-depth information about Lyrid features and API.</p>
              </div>
            </a>
            <a href="https://github.com/LyridInc" className={styles.boxRight}>
              <div>
                <div className={styles.boxTitle}>
                  <h5 className={styles.docs}>Examples</h5>
                  <Image className={styles.arrow} src={Arrow} width={20} height={20} alt='right-arrow'/>
                </div>
                <p className={styles.ex}>Discover and deploy boilerplate example Next.js projects.</p>
              </div>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
};

export default MainApp;

