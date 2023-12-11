import {maxLengthCreator, required} from "../../../utils/validation/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs.module.css";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)
const AddMessage: React.FC<InjectedFormProps<any>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={s.textareaBox} >
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}
                />
                <button  className={s.textareaBtn}>add1</button>
            </div>
        </form>
    )
}

export const AddMessageForm = reduxForm({form: "AddMessageForm"})(AddMessage)