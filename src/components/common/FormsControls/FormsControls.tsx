import React from "react";
import styles from "./FormControls.module.css";
import {Simulate} from "react-dom/test-utils";


const FormControl = ({input, meta, child, ...props}: any) => {
    return (
        <div className={meta.touched && meta.error && styles.formControl + " " + styles.error}>
            <div>
                {props.children}
            </div>
            {
                meta.touched && meta.error &&   <span>{meta.error}</span>
            }

        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}



export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}