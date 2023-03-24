import React from 'react';
import s from "./Authorization.module.css"

function Authorization() {
    return (
        <div className={s.modalAuth}>
            <div className={s.authorization}>
               <div>
                   логин
                   <input type="text"/>
               </div>
                <div>
                    пароль<input type="text"/>
                </div>
                <input type="text"/>
            </div>
        </div>
    );
}

export default Authorization;