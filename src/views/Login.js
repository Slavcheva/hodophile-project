import React from 'react'
import withForm from "../components/withForm";

class Login extends React.Component {

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        // const errors = this.props.getFormErrorState();
        // if (!!errors) {
        //     return;
        // }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data);
        const {username, password} = this.props.getFormState()
        console.log(username, password)
    }

    render() {
        return <div className="form-wrapper">
            <h1>Login</h1>
            <div className="form-group">
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={this.usernameChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.passwordChangeHandler}/>
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

export default withForm(Login, initialFormState);