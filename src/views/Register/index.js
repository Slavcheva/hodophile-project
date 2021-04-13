import React from 'react'
import * as yup from 'yup';

import './style.css'
import withForm from "../../components/withForm";
import userService from '../../services/user-service';


class Register extends React.Component {

    emailChangeHandler = this.props.controlChangeHandlerFactory('email');
    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');
    repeatPasswordChangeHandler = this.props.controlChangeHandlerFactory('repeatPassword');

    submitHandler = () => {
        this.props.runValidations()
        //   .then(formData => console.log(formData));
        // const errors = this.props.getFormErrorState();
        // if (!!errors) {
        //     return;
        // }
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
            // alert('success')
        });
    };
    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const emailError = this.getFirstControlError('email');
        const usernameError = this.getFirstControlError('username');
        const passwordError = this.getFirstControlError('password');
        const repeatPasswordError = this.getFirstControlError('repeatPassword');

        return (
            <div className="form-wrapper">
                <h1>Sign up</h1>
                <div className="form-group">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' onChange={this.emailChangeHandler}/>
                            {emailError && <div className="error">{emailError}</div>}


                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username:</label>
                            <input type='text'  onChange={this.usernameChangeHandler}/>
                            {usernameError && <div className="error">{usernameError}</div>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' onChange={this.passwordChangeHandler}/>
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='repeatPassword'>Repeat password:</label>
                            <input type='password' onChange={this.repeatPasswordChangeHandler}/>
                            {repeatPasswordError && <div className="error">{repeatPasswordError}</div>}

                        </div>
                        <div className='form-submit'>
                            <button type='button' onClick={this.submitHandler}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const initialFormState = {
    email:'',
    username: '',
    password: '',
    repeatPassword: ''
}
const schema = yup.object({
    email: yup.string().email('Email should be a valid email')
        .required('Email is required'),

    username: yup.string('Username should be a string')
        .required('Username is required')
        .min(2, 'Username should be more than 2 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(3, 'Password must be more than 3 chars'),

    repeatPassword: yup.string('Password must be a string')
        .oneOf([yup.ref('password'), null], 'Passwords don\'t match')
        .required('Password is required')

});

export default withForm(Register, initialFormState,schema)