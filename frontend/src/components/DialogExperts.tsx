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
import howto from "../images/howto.jpg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListExperts from "./ListExperts";
import CardCatalog from "./CardCatalog";

export default function DialogExperts() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box onClick={handleClickOpen}>
                <CardCatalog></CardCatalog>
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth={'xs'}>
                <DialogTitle sx={{
                    fontSize: 30,}}>
                    Choose expert:</DialogTitle>
                <Divider></Divider>
                <DialogContent>
                    <ListExperts></ListExperts>
                    <br></br>

                </DialogContent>
            </Dialog>
        </div>
    );
}