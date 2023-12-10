import React from "react";
import styles from "./FormControls.module.css";


export const Textarea = ({input, meta, ...props}: any) => {
    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
                < textarea {...props} {...input} />
            </div>

        </div>
    )
}