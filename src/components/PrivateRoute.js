import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AuthContext} from "./ContextWrapper";

const PrivateRoute = ({isLogged, ...otherProps}) => {
    return (
        <AuthContext.Consumer>
            {
                value => (<div>
                    {
                        value.isLogged
                            ? <Route {...otherProps}/>
                            : <Redirect to='/login'/>
                    }
                </div>)
            }
        </AuthContext.Consumer>
    )
}

export default PrivateRoute