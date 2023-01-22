import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>
                    Friends
                    <div className={s.friends}>
                        <div>
                            <div className={s.friend}></div>
                            <div className={s.friendName}>Sasha</div>
                        </div>

                        <div>
                            <div className={s.friend}></div>
                            <div className={s.friendName}>Dima</div>
                        </div>

                        <div>
                            <div className={s.friend}></div>
                            <div className={s.friendName}>Marina</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;