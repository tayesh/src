import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toast, setToast] = useState(false)
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    sendPasswordResetEmail(auth, email)
        .then(() => {


        })


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
    // if (error && error === 'Firebase: Error (auth/wrong-password).') {
    //     setToast(true);
    // }
    // else {
    //     setToast(false);


    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);


    }
    return (
        <div className='login-form-container d-flex justify-center'>
            {{ error } === 'Firebase: Error (auth/wrong-password)' ? <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    Hello, world! This is a toast message.
                    <div class="mt-2 pt-2 border-top">
                        <button type="button" class="btn btn-primary btn-sm">Take action</button>
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                    </div>
                </div>
            </div> : <></>}
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-div'>
                        <label className='' htmlFor="email">Email</label>
                        <br />
                        <input className='' onBlur={handleEmailBlur} type="email" name="email" id="5" required />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="6" required />
                    </div>

                    <input className='input-submit' type="submit" value="Login" />
                    <p className='text-danger'>{error?.message}</p>
                    <p className='text-success'>{
                        loading && 'Loading!!...Please wait'
                    }</p>
                </form>
                {{ error } == 'Firebase: Error (auth/wrong-password)' ? <p>password reset</p> :

                    <p>
                        New to Fitness Freak?? <Link to={'/signup'}>Create new Account</Link>
                    </p>
                }
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