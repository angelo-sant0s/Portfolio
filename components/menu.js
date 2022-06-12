import Link from 'next/link';

const Menu = (props) => {

    return(
        <div Open={props.Open} onClick={props.Toggle}>
        <div className="mobile-menu">
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
            <style>

            </style>
        </div>
    )
}
export default Menu;