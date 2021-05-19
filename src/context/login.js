import React, {useState} from 'react';

export const LoginContext = React.createContext();

function LoginProvider(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const state = {username, password, setUsername, setPassword};

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;