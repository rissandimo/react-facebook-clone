import React from 'react';

import {auth, provider} from './firebase';

import './Login.css';
import { Button } from '@material-ui/core';

function Login(){

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result => {
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