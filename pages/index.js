import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
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