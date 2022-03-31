import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>This is our fancy Routing</h1>
            <nav>
                <ul>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/friends'>Friedns</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;