import { useContext, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            My Blog
        </Typography>
        <Divider />
        <List>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    My Blog
                </Typography>
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
            </Toolbar>
            </AppBar>
            <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            </Box>
            
        </Box>
    );
}
