import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
    FiTwitter, 
    FiLinkedin,
    FiGithub } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';    


const Nav = (props) => {
    
    return(
        <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}>
        <nav>
            <div className="nav-brand">
                <motion.h1 whileHover={{x: 25}}>
                    <Link href={'/'}>Ângelo Santos</Link>
                </motion.h1>
            </div>
            <div className="nav-socials">
                <div className='nav-social'> 
                    <FiTwitter />
                </div>
                <div className='nav-social'> 
                    <FiGithub />
                </div>
                <div className='nav-social'> 
                    <FiLinkedin />
                </div>
            </div>
            <div className='menu-icon'>
                <button onClick={props.Toggle}><HiMenuAlt3 /></button> 
            </div>
        </nav>
        </motion.div>
    )
}

export default Nav;