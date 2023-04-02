import React,  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileScreen from './MobileScreen';
import MenuIcon from '../icons/nav-icon.svg';
import CloseMenu from '../icons/exit-icon.svg';
import './nav.css';

const Nav = () => {

    const isMobile = MobileScreen();
    const [navOpen, setNavOpen] = useState(false);
    const toggleShowHide = () => {
        setNavOpen( !navOpen );
    };

    return (
        <>
        {isMobile ? (
            <>
            {/* <img className='logo' src={MenuIcon} alt="Hamburger menu icon" onClick={toggleShowHide} /> */}
            <img 
                src={navOpen ? CloseMenu: MenuIcon}
                alt={navOpen ? "Close menu" : "Open menu"}
                onClickCapture={() => setNavOpen(!navOpen)}
                className={`hamburger-icon ${navOpen ? "close" : ""}`}
            />
            {navOpen && (
            <nav className='nav mobile-menu'>
                <ul className={navOpen ?'nav-options nav-items active': 'nav-items'}>

                        <li className='option nav-item works-navlink'>
                            <NavLink onClick={toggleShowHide} to='/'>Home</NavLink>
                        </li>
                        <li className='option nav-item works-navlink'>
                            <NavLink onClick={toggleShowHide} to='/works'>Works</NavLink>
                        </li>
                        <li className='option nav-item about-navlink'>
                            <NavLink onClick={toggleShowHide} to='/about'>About</NavLink>
                        </li>
                        <li className='option nav-item contact-navlink'>
                            <NavLink onClick={toggleShowHide} to='/contact'>Contact</NavLink>
                        </li>

                    </ul>
            </nav>
            )}
            </>
        ) : (
            <nav className="nav desktop-menu">
               <ul className='nav-links'>

                    <li className='works-navlink'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='works-navlink'>
                        <NavLink to='/works'>Works</NavLink>
                    </li>
                    <li className='about-navlink'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='contact-navlink'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>

                </ul>
            </nav>
        )
        }   
        </>
    );
}
export default Nav;