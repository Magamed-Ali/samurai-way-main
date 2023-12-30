import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validation/validators";
import {connect} from "react-redux";
import {loginAuth} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type loginType = {
    isAuth: boolean
    loginAuth: (email: string, password: string, rememberMe: boolean) => void
}
const maxLength15 = maxLengthCreator(15)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> rememberMe
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: loginType) => {
    const onSubmit = (formData: FormDataType) => {

        props.loginAuth(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>)
}

const mapStateToProps = (state: any) => ({
    isAuth: state.authUser.isAuth
})
export default connect(mapStateToProps, {loginAuth})(Login)