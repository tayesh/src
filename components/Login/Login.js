import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);


    }
    return (
        <div className='login-form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                    </div>

                    <input className='input-submit' type="submit" value="Login" />
                    <p>{error?.message}</p>
                    <p style={{ color: 'red' }}>{
                        loading && 'Loading!!...Please wait'
                    }</p>
                </form>
                <p>
                    New to Ema-John?? <Link to={'/signup'}>Create new Account</Link>
                </p>
                <div className='horizontal-or'>
                    <div><hr /></div>
                    <p>or</p>
                    <div><hr /></div>
                </div>
            </div>
        </div>
    );
};

export default Login;