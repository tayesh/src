import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/home')
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords don't match")
            return;
        }

        if (email === '' || password === "") {
            setError('email and password is required')
            return;
        }

        if (password.length < 6) {
            setError('Password must be longer than 6 charachters')
            return;
        }
        createUserWithEmailAndPassword(email, password);

        sendEmailVerification()
            .then(() => {
                console.log('verification mail sent')

            })
        setError('')

    }

    return (
        <div>
            <div className='login-form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form>
                        <div className='input-div'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="Password" id="2" required />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm Password" id="3" required />
                        </div>
                        <p className='text-danger'>{error}</p>
                        <input onClick={handleCreateUser} className='input-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already have an account? <Link to={'/login'}>Login</Link>
                    </p>
                    <div className='horizontal-or'>
                        <div><hr /></div>
                        <p>or</p>
                        <div><hr /></div>
                    </div>
                    <div className='w-100 d-flex justify-center'>
                        <button onClick={handleGoogleSignIn} className='btn border rounded  w-75 mx-auto btn-light'>Sign In with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;