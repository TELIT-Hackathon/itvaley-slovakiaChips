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

export default function LoginWithoutButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography onClick={handleClickOpen} sx={{textAlign: 'center',fontWeight: 'bold',}}>Login</Typography>
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
                               fullWidth/>
                </DialogContent>
                <DialogActions>
                    {/*<Link to='/Home'>*/}
                    <Button onClick={handleClose} color={"primary"} variant={"contained"} sx={{
                        textAlign: 'left',
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: 15,
                        width: 427,
                        left: 10,
                        top: 300,
                        color: '#ffffff',
                        backgroundColor: '#000000',

                    }}>Sign in</Button>
                    {/*</Link>*/}
                </DialogActions>
                <br></br>
                <Typography onClick={handleClose}  sx={{textAlign: 'center', display: 'inline'}}>Don't have an
                    account?<RegisterWithoutButton></RegisterWithoutButton></Typography>
                <br></br>
            </Dialog>
        </div>
    );
}