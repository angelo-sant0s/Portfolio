import Link from 'next/link';
import {
    FiTwitter, 
    FiLinkedin,
    FiGithub } from 'react-icons/fi';

const Nav = () => {
    return(
        <>
        <nav>
            <div className="nav-brand">
                Ângelo Santos
            </div>
            <div className="nav-items">
                <div className="nav-item">
                    <Link href='/'>Home</Link>
                </div>
                <div className="nav-item">
                    <Link href='/about'>About</Link>
                </div>
                <div className="nav-item">
                    <Link href='/works'>Works</Link>
                </div>
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
        </nav>
        </>
    )
}

export default Nav;