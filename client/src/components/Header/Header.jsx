import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { AuthContext } from '../../context/auth';
import { ThemeContext } from '../../context/themeContext';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        {user ? (
                            <button onClick={() => logout()}>Logout</button>
                        ) : (
                            <NavLink
                                to="/login"
                            >
                                Login
                            </NavLink>
                        )}                       
                    </li>
                    <li className={style.themeSwitcher}>
                        <button onClick={toggleTheme}>Change theme</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;