import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from '../button/MyButton';
import { AuthContext } from '../../../context'

export const NavBar = () => {

    const { isAuth, setIsAuth } = React.useContext(AuthContext);

    const logout = () => {

        setIsAuth(false);
        localStorage.removeItem('auth');

    };

    return (
        <div className='navbar'>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className='navbar__links'>
            <Link to='/about'>
                About Us
            </Link>
            <Link to='/posts'>
                Posts
            </Link>
            </div>

        </div>
    );
};