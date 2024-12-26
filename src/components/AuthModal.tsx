import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/account/userSlie';
import { User } from '../features/account/type';

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
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    const logIn = () => {
        if(username == 'admin' && pwd == 'admin') {
            let user: User = {
                username: username,
                password: pwd
            }
            dispatch(login(user))
            setOpen(false)
        }
    }

    return (
        <div>
            <Button onClick={handleOpen} sx={{ color: 'white' }}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <TextField id="outlined-basic" label="Username" type='text' variant="outlined" size="small" className='mb-3' onChange={e => setUsername(e.target.value.trim())}/>
                        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" size="small" className='mb-3' onChange={e => setPwd(e.target.value.trim())}/>
                    </Box>
                    <Button variant="contained" onClick={logIn}>Login</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default AuthModal