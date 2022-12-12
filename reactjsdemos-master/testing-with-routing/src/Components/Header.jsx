import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
