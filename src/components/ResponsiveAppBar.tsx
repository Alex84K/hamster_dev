
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout, selectAuth } from '../features/account/userSlie';

function ResponsiveAppBar() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const auth = useAppSelector(selectAuth)
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const goTo = (txt: string) => {
        navigate(`${txt}`)
        handleCloseNavMenu()
        handleCloseUserMenu()
    }

    const logOut = () => {
        dispatch(logout())
        handleCloseUserMenu()
        navigate('/')
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src='/assets/hamsterfff.svg' className='App-logo me-2' />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem onClick={() => goTo('/')}>
                                <Typography sx={{ textAlign: 'center' }}>Home</Typography>
                            </MenuItem>
                            {auth ? (
                                <>
                                    <MenuItem onClick={() => goTo('/gemini')}>
                                        <Typography sx={{ textAlign: 'center' }}>Gemini 2.0 Flash</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => goTo('/forecasts')}>
                                        <Typography sx={{ textAlign: 'center' }}>Solar forecast</Typography>
                                    </MenuItem>
                                </>
                            ) : (<></>)}
                            <MenuItem onClick={() => goTo('/home2')}>
                                <Typography sx={{ textAlign: 'center' }}>Home 2</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={() => goTo('/')} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                        <Button onClick={() => goTo('/home2')} sx={{ my: 2, color: 'white', display: 'block' }}>Home 2</Button>
                        {auth ? (
                            <>
                            <Button onClick={() => goTo('/gemini')} sx={{ my: 2, color: 'white', display: 'block' }}>Gemini 2.0 Flash</Button>
                            <Button onClick={() => goTo('/forecasts')} sx={{ my: 2, color: 'white', display: 'block' }}>Solar forecast</Button>
                            </>
                        ) : (<></>)}

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Hamster Sharp" src="/assets/favicon_humster.svg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography sx={{ textAlign: 'center' }}>Account</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography sx={{ textAlign: 'center' }}>Dashboard</Typography>
                            </MenuItem>
                            <MenuItem onClick={logOut}>
                                <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

