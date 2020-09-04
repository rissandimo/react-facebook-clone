import React from 'react';

import {auth, provider} from './firebase';

import './Login.css';
import { Button } from '@material-ui/core';

import { actionTypes} from './reducer';
import { useStateValue } from './StateProvider';

function Login(){

    // Grab data from data layer
    const [state, dispatch] = useStateValue();

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER, // push into data layer
                user: result.user
            })
            console.log(result.user);
        }).catch(error => alert(error.message));
    }
    
    return(
        <div className="login">
            <div className="login__logo">
                <img 
                 src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
                 alt=""/>

                 <img 
                 src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" 
                 alt=""/>
            </div>

            <Button type="submit" onClick={signin}>
                Sign in
            </Button>
        </div>
    );
}

export default Login;