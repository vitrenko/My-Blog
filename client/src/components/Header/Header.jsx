import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { ThemeContext } from '../../context/themeContext';

const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
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
                    <li className={style.themeSwitcher}>
                        <button onClick={toggleTheme}>Change theme</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;