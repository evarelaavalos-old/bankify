import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#0043A8',
    color: 'white',
    border: '2px solid #0043a8',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{
                        flexGrow: 1,
                        fontFamily: `'Lato', sans-serif`,
                        fontWeight: 700,
                    }}>
                        Bankify
                    </Typography>
                    <Button color="inherit" variant="text">Sign In</Button>
                    <div style={{ marginLeft: "0.5rem" }}></div>
                    <Button
                        color="inherit"
                        variant="contained"
                        onClick={handleOpen}
                        sx={{
                            backgroundColor: "#fff",
                            color: "#0d0d77",
                        }}
                    >
                        Get Started
                    </Button>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{
                        textAlign: 'center'
                    }}>
                        Join Bankify
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button variant="outlined" startIcon={<GoogleIcon />}
                            sx={{
                                backgroundColor: "#0043A8",
                                color: "#fff",
                                width: "100%",
                                padding: "0.875rem",
                            }}
                        >
                            Sign in With Google
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}
