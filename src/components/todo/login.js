import React, { useContext } from 'react';
import { LoginContext } from '../../context/login';
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Login(props) {
    const loginContext = useContext(LoginContext);
    const authContext = useContext(AuthContext);

    const handleInputChange = event => {
        loginContext.setUsername(event.target.username);
        loginContext.setPassword(event.target.password);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        authContext.setLogin(username, password);
    }

    const handleLogout = () => {
        authContext.login(false, null, {});
    }

    return (
        <div id="login_out">
            <If condition={!authContext.loggedIn}>
                <Then>
                    <Form id='loginForm' onSubmit={handleSubmit}>
                        <FormGroup >
                            <FormControl name="username" type="text" placeholder="Enter Username" onChange={handleInputChange} />
                            <FormControl name="password" type="text" placeholder="Enter Password" onChange={handleInputChange} />
                            <Button type="submit" variant="light" >
                                Login
                            </Button>
                        </FormGroup>
                    </Form>
                </Then>
                <Else>
                    <Button onClick={handleLogout} type="submit" variant="danger" >
                        Log Out
                    </Button>
                </Else>
            </If>
        </div>
    )
}

export default Login;