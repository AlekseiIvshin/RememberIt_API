import React, { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { signUp } from './reducer';
import { SignUpPayload } from '../../constants/types';

interface SignUpProps {
    signUp: ({ login, password }: SignUpPayload) => any
}

const SignUp: FunctionComponent<SignUpProps> = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        props.signUp({ login, password })
    };

    const handleLogin = useCallback((e) => setLogin(e.target.value), [])
    const handlePassword = useCallback((e) => setPassword(e.target.value), [])

    return (
        <div>
            <form>
                <label>Login:<input type="text" name="name" onChange={handleLogin} /></label>
                <label>Passwrod:<input type="password" name="name" onChange={handlePassword} /></label>
                <input type="submit" value="Sign up" onClick={handleClick} />
            </form>
        </div>
    );
}

export default connect(null, { signUp })(SignUp);