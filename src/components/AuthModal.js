import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/account/userSlie';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AuthModal = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const logIn = () => {
        if (username == 'admin' && pwd == 'admin') {
            let user = {
                username: username,
                password: pwd
            };
            dispatch(login(user));
            setOpen(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(Button, { onClick: handleOpen, sx: { color: 'white' }, children: "Login" }), _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsxs(Box, { sx: style, children: [_jsxs(Box, { children: [_jsx(TextField, { id: "outlined-basic", label: "Username", type: 'text', variant: "outlined", size: "small", className: 'mb-3', onChange: e => setUsername(e.target.value.trim()) }), _jsx(TextField, { id: "outlined-basic", label: "Password", type: 'password', variant: "outlined", size: "small", className: 'mb-3', onChange: e => setPwd(e.target.value.trim()) })] }), _jsx(Button, { variant: "contained", onClick: logIn, children: "Login" })] }) })] }));
};
export default AuthModal;
