import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to={'/services'}>Programs</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/about'}>About</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;