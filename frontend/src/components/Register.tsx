import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import LoginWithoutButton from "./LoginWithoutButton";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

export default function Register() {
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
                        left: 380,
                        backgroundColor: '#ece3e3',

                    }}>
                Register</Button>
            <Dialog open={open} onClose={handleClose} maxWidth={'xs'}>
                <DialogTitle>Welcome!</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        fontSize: 30,
                    }}>
                        Create your new account
                    </DialogContentText>
                    <Divider></Divider>
                    <br></br>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Email"
                               margin="normal"
                               fullWidth/>

                    <TextField variant="outlined" id="full-width-text-field"
                               label="User name"
                               margin="normal"
                               fullWidth/>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Password"
                               margin="normal"
                               fullWidth/>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Confirm password"
                               margin="normal"
                               fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Link to='/Main'>
                    <Button onClick={handleClose} color={"primary"} variant={"contained"} sx={{
                        textAlign: 'left',
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: 15,
                        width: 427,
                        left: 10,
                        top: 460,
                        color: '#ffffff',
                        backgroundColor: '#0584e8',

                    }}>Register</Button>
                    </Link>
                </DialogActions>
                <br></br>
                <Typography sx={{textAlign: 'center',}}>Already have an Account
                    ?<LoginWithoutButton></LoginWithoutButton></Typography>
                <br></br>
            </Dialog>
        </div>
    );
}