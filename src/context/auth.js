import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const api = "https://api-js401.herokuapp.com";

export const AuthContext = React.createContext();

function AuthProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const state = { loggedIn, setLogin, setLoggedIn, login, user };

    function login (isLoggedIn, token, user) {
        cookie.save('auth', token);
        setLoggedIn(isLoggedIn);
        setUser(user);
    }

    const validateToken = (token) => {
        try {
            const user = jwt.verify(token,'supersecret')
            login(true, token, user);
        } catch (error) {
            login(false, null, {});
            console.log('validation error', error);
        }
    }

    async function setLogin (username, password) {
        try {
            const response = await superagent.post(`${api}/signin`).set('authorization',`Basic ${btoa(`${username}:${password}`)}`);
            validateToken(response.body.token);
        } catch (error) {
            console.error('Login error', error);
        }
    }

    useEffect(() => {
        const token = cookie.load('auth');
        validateToken(token);
    }, [])

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;