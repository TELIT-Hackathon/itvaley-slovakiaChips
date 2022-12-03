import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import {useState} from "react";
import Table from "./Table";
// import LoginWithoutButton from "./LoginWithoutButton";
// // import {Link} from "react-router-dom";

export default function Registration() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = (e: any)=> {
        e.preventDefault()
        const user = {name,surname,mail,password}
        console.log(user);
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(user)
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        //     throw new Error(response.statusText);
        // }).then(jsonData => {
        //     console.log("Successful",jsonData);
        // }).catch(errors => {
        //     //handling errors from backend
        //     console.log('error1', errors);
        //     errors.setState({ errors });
        })
 //       setOpen(false);
    }

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
                        color: '#ffffff',
                        top: 420,
                        left: 380,
                        backgroundColor: '#000000',

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
                    <br></br>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Email"
                               margin="normal"
                               fullWidth
                               onChange={(e) => setMail(e.target.value)}/>

                    <TextField variant="outlined" id="full-width-text-field"
                               label="User name"
                               margin="normal"
                               fullWidth
                               onChange={(e) => setName(e.target.value)}/>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Surname"
                               margin="normal"
                               fullWidth
                               onChange={(e) => setSurname(e.target.value)}/>
                    <TextField variant="outlined" id="full-width-text-field"
                               label="Password"
                               margin="normal"
                               fullWidth
                               onChange={(e) => setPassword(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                        <Button onClick={handleClick} color={"primary"} variant={"contained"} sx={{
                            textAlign: 'left',
                            position: 'absolute',
                            fontWeight: 'bold',
                            fontSize: 15,
                            width: 427,
                            left: 10,
                            top: 460,
                            color: '#ffffff',
                            backgroundColor: '#000000',

                        }}>Register</Button>
                </DialogActions>
                <br></br>
                <Typography sx={{textAlign: 'center',}}>Already have an Account</Typography>
                <br></br>
            </Dialog>
            <Table></Table>
        </div>
    );
}