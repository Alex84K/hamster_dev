import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const goTo = (txt) => {
        navigate(`${txt}`);
        handleCloseNavMenu();
        handleCloseUserMenu();
    };
    const logOut = () => {
        dispatch(logout());
        handleCloseUserMenu();
        navigate('/');
    };
    return (_jsx(AppBar, { position: "static", children: _jsx(Container, { maxWidth: "xl", children: _jsxs(Toolbar, { disableGutters: true, children: [_jsx("img", { src: '/assets/hamsterfff.svg', className: 'App-logo me-2' }), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } }, children: [_jsx(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit", children: _jsx(MenuIcon, {}) }), _jsxs(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }, keepMounted: true, transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: { display: { xs: 'block', md: 'none' } }, children: [_jsx(MenuItem, { onClick: () => goTo('/'), children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Home" }) }), auth ? (_jsxs(_Fragment, { children: [_jsx(MenuItem, { onClick: () => goTo('/gemini'), children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Gemini 2.0 Flash" }) }), _jsx(MenuItem, { onClick: () => goTo('/forecasts'), children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Solar forecast" }) })] })) : (_jsx(_Fragment, {})), _jsx(MenuItem, { onClick: () => goTo('/home2'), children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Home 2" }) })] })] }), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } }, children: [_jsx(Button, { onClick: () => goTo('/'), sx: { my: 2, color: 'white', display: 'block' }, children: "Home" }), _jsx(Button, { onClick: () => goTo('/home2'), sx: { my: 2, color: 'white', display: 'block' }, children: "Home 2" }), auth ? (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => goTo('/gemini'), sx: { my: 2, color: 'white', display: 'block' }, children: "Gemini 2.0 Flash" }), _jsx(Button, { onClick: () => goTo('/forecasts'), sx: { my: 2, color: 'white', display: 'block' }, children: "Solar forecast" })] })) : (_jsx(_Fragment, {}))] }), _jsxs(Box, { sx: { flexGrow: 0 }, children: [_jsx(Tooltip, { title: "Open settings", children: _jsx(IconButton, { onClick: handleOpenUserMenu, sx: { p: 0 }, children: _jsx(Avatar, { alt: "Hamster Sharp", src: "/assets/favicon_humster.svg" }) }) }), _jsxs(Menu, { sx: { mt: '45px' }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                }, keepMounted: true, transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu, children: [_jsx(MenuItem, { onClick: handleCloseUserMenu, children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Profile" }) }), _jsx(MenuItem, { onClick: handleCloseUserMenu, children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Account" }) }), _jsx(MenuItem, { onClick: handleCloseUserMenu, children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Dashboard" }) }), _jsx(MenuItem, { onClick: logOut, children: _jsx(Typography, { sx: { textAlign: 'center' }, children: "Logout" }) })] })] })] }) }) }));
}
export default ResponsiveAppBar;
