import React from "react";
import {Route, Switch} from 'react-router-dom';

import userService from "./services/user-service";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Logout from "./components/Logout";

import Login from "./views/Login";
import Register from "./views/Register";
import CreateTrip from "./views/CreateTrip";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Trips from "./views/Trips";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import TripPage from './views/TripPage'

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {})
}

function render(Cmp, otherProps) {
    return function (props) {
        return <Cmp {...props} {...otherProps} />
    };
}


class App extends React.Component {

    constructor(props) {
        super(props);
        const cookies = parseCookies();
        const isLogged = !!cookies['x-auth-token'];
        const userD = {};
        this.state = {isLogged, userD};
    }

    logout = (history) => {
        userService.logout().then(() => {
            this.setState({isLogged: false});
            history.push('/');
            return null;
        });
    }

    login = (history, data) => {
        return userService.login(data).then(() => {
            this.setState({isLogged: true, userD: data});
            history.push('/');
        });
    }

    render() {
        const {isLogged, userD} = this.state;
        return (
            <div className="App">
                <Navigation userD={userD} isLogged={isLogged}/>
                <Switch>
                    <Route path='/' exact render={render(Home, {isLogged})}/>
                    <Route path="/register" render={render(Register, {isLogged})}/>
                    <Route path="/login" render={render(Login, {isLogged, login: this.login})}/>
                    <Route path="/logout" render={render(Logout, {isLogged, logout: this.logout})}/>
                    {isLogged && <Route path='/create-trip' render={render(CreateTrip, {isLogged})}/>}
                    {isLogged && <Route path='/profile' render={render(Profile, {userD})}/>}
                    <Route path='/destinations' component={Destinations}/>
                    <Route path='/trip/:id' component={TripPage}/>
                    <Route path='/trips' exact render={render(Trips, {userD})}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;