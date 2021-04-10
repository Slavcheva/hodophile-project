import React from 'react'
import withForm from "../components/withForm";
import userService from '../services/user-service';

class Register extends React.Component {

    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    repeatPasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repeatPassword');

    submitHandler = () => {
        // this.props.runValidations()
        //   .then(formData => console.log(formData));
        // const errors = this.props.getFormErrorState();
        // if (!!errors) {
        //     return;
        // }
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        });
        const {username, password, repeatPassword} = this.props.getFormState()
        console.log(username, password, repeatPassword)
    };

    render() {
        const {email, username, password, repeatPassword} = this.props.getFormState()
        return (
            <div className="form-wrapper">
                <h1>Sign up</h1>
                <div className="form-group">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' value={email} onChange={this.emailOnChangeHandler}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username:</label>
                            <input type='text' value={username} onChange={this.usernameOnChangeHandler}/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' value={password} onChange={this.passwordOnChangeHandler}/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='repeatPassword'>Repeat password:</label>
                            <input type='password' value={repeatPassword}
                                   onChange={this.repeatPasswordOnChangeHandler}/>
                        </div>
                        <div className='form-group'>
                            <button type='button' onClick={this.submitHandler}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: '',
    repeatPassword: ''
}

export default withForm(Register, initialFormState)