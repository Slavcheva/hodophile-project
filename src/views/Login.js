import React from 'react'
import * as yup from 'yup';
import withForm from "../components/withForm";

class Login extends React.Component {

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {

        const errors = this.props.getFormErrorState();
        if (!!errors) {
            return;
        }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data);

    }

    render() {
        const {username, password} = this.props.getFormState()

        return <div className="form-wrapper">
            <h1>Login</h1>
            <div className="form-group">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.usernameChangeHandler} value={username}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.passwordChangeHandler} value={password}/>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.submitHandler}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    }
}

const initialFormState = {
    username: '',
    password: '',
}
const schema = yup.object({
    username: yup.string('Username should be a string')
        .required('Username is required')
        .min(2, 'Username should be more than 2 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(3, 'Password must be more than 3 chars'),
});

export default withForm(Login, initialFormState, schema);