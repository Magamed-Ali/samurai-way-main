import React, {useEffect} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    const onclickLogout = () => {
        props.logout()
    }



    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt=""/>
            <div>
                {!props.isAuth ?
                <NavLink activeClassName={s.active} to={"login"} className={s.login}>Login</NavLink>
                    : <div>{props.login}<button onClick={onclickLogout}>Logout</button></div>
                }
            </div>
        </header>
    )
}

export default Header;