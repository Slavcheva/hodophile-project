import React, {Fragment} from "react";
import {Route, Switch} from 'react-router-dom';

import userService from "./services/user-service";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import ContextWrapper from "./components/ContextWrapper";

import Login from "./views/Login";
import Register from "./views/Register";
import CreateTrip from "./views/CreateTrip";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Trips from "./views/Trips";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import TripPage from './views/TripPage'


function render(Cmp, otherProps) {
    return function (props) {
        return <Cmp {...props} {...otherProps} />
    };
}

class App extends React.Component {

    constructor(props) {
        super(props);
        const userD = {};
        this.state = {userD};
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
        const {userD} = this.state;
        return (
            <Fragment>
                <div className="App">
                    <ContextWrapper>
                        <Navigation userD={userD}/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" render={render(Login, {login: this.login})}/>
                            <Route path="/logout" render={render(Logout, {logout: this.logout})}/>
                            <Route path='/create-trip' component={CreateTrip}/>}
                            <Route path='/profile' render={render(Profile, {userD})}/>}
                            <Route path='/destinations' component={Destinations}/>
                            <Route path='/trips' component={Trips}/>
                            <Route path='/trip/:id' component={TripPage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </ContextWrapper>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;