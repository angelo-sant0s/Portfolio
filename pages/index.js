import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
        <title>Ângelo Santos</title>
      </Head>     
      <div className='home-start'>
        <div>
          <motion.h1>
            Hello there
          </motion.h1>
          <motion.h2>
            Welcome to my Portfolio
          </motion.h2>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default Home;