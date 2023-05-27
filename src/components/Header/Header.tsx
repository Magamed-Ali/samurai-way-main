import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type headerType ={
    login: string
    isAuth: boolean
}
const Header = (props: any) => {

    console.log("prooooopsss",props)

    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt=""/>
            <div>
                {!props.isAuth ?
                <NavLink activeClassName={s.active} to={"login"} className={s.login}>Login</NavLink>
                    : <div>{props.id} - {props.login}</div>
                }
            </div>
        </header>
    )
}


export default Header;