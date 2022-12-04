import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import RegisterWithoutButton from "./RegisterWithoutButton";
import {Link} from "react-router-dom";

export default function Login() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}
                    sx={{
                        textAlign: 'left',
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#0095ff',
                        top: 420,
                        left: 230,
                        backgroundColor: '#ece3e3',

                    }}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth={'xs'}>
                <DialogTitle>Welcome back!</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        fontSize: 30,
                    }}>
                        Sign in to your account
                    </DialogContentText>
                    <br></br>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Email"
                               margin="normal"
                               fullWidth/>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Password"
                               margin="normal"
                               type="password"
                               fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Link to='/Main'>
                    <Button onClick={handleClose} color={"primary"} variant={"contained"} sx={{
                        textAlign: 'center',
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: 15,
                        width: 427,
                        left: 10,
                        top: 300,
                        color: '#ffffff',
                        backgroundColor: '#0584e8'

                    }}>Sign in</Button>
                    </Link>
                    </DialogActions>
                <br></br>
                <Typography sx={{textAlign: 'center', display: 'inline'}}>Don't have an
                    account?<RegisterWithoutButton></RegisterWithoutButton></Typography>
                <br></br>
            </Dialog>
        </div>
    );
}