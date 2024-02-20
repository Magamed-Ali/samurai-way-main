import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, ...props}: any) => {
    return (
        <div className={touched && error && styles.formControl + " " + styles.error}>
            <div>
                {props.children}
            </div>
            {
                touched && error &&   <span>{error}</span>
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

export const CreateField = (placeholder: string | null,
                            name: string,
                            component: any,
                            props: {type?: string} = {},
                            text?: string | null,
                            validate?: [any]) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>
        {text}
    </div>

)