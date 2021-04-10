import React from "react";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./views/Login";
import Register from "./views/Register";
import CreateTrip from "./views/CreateTrip";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Posts from "./views/Trips";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="Container">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/create-trip' component={CreateTrip}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/destinations' component={Destinations}/>
                    <Route path='/trips' component={Posts}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;