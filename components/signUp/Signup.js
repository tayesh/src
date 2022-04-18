import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords don't match")
            return;
        }
        if (password.length < 6) {
            setError('Password must be longer than 6 charachters')
            return;
        }
        createUserWithEmailAndPassword(email, password);
        setError('')

    }
    return (
        <div>
            <div className='login-form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm Password" id="" required />
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
                </div>
            </div>
        </div>
    );
};

export default Signup;