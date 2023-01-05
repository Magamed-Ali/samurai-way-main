import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}><a href="src/index#">Profile</a></div>
            <div className={`${s.item} ${s.active}`}><a href="src/index#">Messages</a></div>
            <div className={s.item}><a href="src/index#">News</a></div>
            <div className={s.item}><a href="src/index#">Music</a></div>
            <div className={s.item}><a href="src/index#">Settings</a></div>
        </nav>
    )
}


export default Navbar;