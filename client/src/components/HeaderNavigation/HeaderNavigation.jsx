import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { AuthContext } from '../../context/auth';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';


const HeaderNavigation = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <header className={style.header}>
            <nav>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NavLink to="/">
                        <Button sx={{ color: '#fff' }}>
                            Home                
                        </Button>
                    </NavLink>
                    <NavLink
                        to="/about"
                    >
                        <Button sx={{ color: '#fff' }}>
                            About                
                        </Button>
                    </NavLink>
                    <NavLink
                        to="/blog"
                    >
                        <Button sx={{ color: '#fff' }}>
                            Blog                
                        </Button>
                    </NavLink>
                    <NavLink
                        to="/contact"
                    >
                        <Button sx={{ color: '#fff' }}>
                            Contact us                
                        </Button>
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                    >
                        <Button sx={{ color: '#fff' }}>
                            Dashboard              
                        </Button>
                    </NavLink>                   
                    {user ? (
                        <NavLink
                            to="/myprofile"
                        >
                            <Button sx={{ color: '#fff' }}>
                                My profile              
                            </Button>
                        </NavLink>
                    ) : null}
                    {user ? (
                        <Button sx={{ color: '#fff' }} onClick={() => logout()}>Logout</Button>
                    ) : (
                        <NavLink
                            to="/login"
                        >
                            <Button sx={{ color: '#fff' }}>
                                Login              
                            </Button>
                        </NavLink>
                    )}
                    {user ? null : (
                        <NavLink
                            to="/registration"
                        >
                            <Button sx={{ color: '#fff' }}>
                                Registration              
                            </Button>
                        </NavLink>
                    )}                    
                </Box>
            </nav>
        </header>
    );
}

export default HeaderNavigation;