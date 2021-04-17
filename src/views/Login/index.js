import React from 'react'
import withForm from "../../components/withForm";
import './style.css'

class Login extends React.Component {
    state = {error: null}
    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {

        const errors = this.props.getFormErrorState();
        if (!!errors) {return;}

        const data = this.props.getFormState();
        this.props.login(this.props.history, data)
            .catch(error => {
                this.setState({error});
            });
    }

    render() {
        const {error} = this.state

        return <div className="form-wrapper">
            <h1>Sign in</h1>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={this.usernameChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.passwordChangeHandler}/>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="form-submit">
                    <button type="button" onClick={this.submitHandler}>Sign in</button>
                </div>
            </form>
        </div>
    }
}

const initialFormState = {
    username: '',
    password: '',
}

export default withForm(Login, initialFormState);