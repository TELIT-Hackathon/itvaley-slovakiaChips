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
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListMessages from "./ListMessages";

export default function Messages() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} size="large" aria-label="show 2 new mails" color="inherit">
                <Badge badgeContent={2} color="error">
                    <MailIcon />
                </Badge>
            </IconButton>
            <Dialog open={open} onClose={handleClose} maxWidth={'xs'}
                    PaperProps={{sx: {position: "fixed", top: 50, right: 130, m: 0, width: 700, height: 490}}}
                    BackdropProps={{ style: { backgroundColor: "transparent" } }}
            >
                <DialogTitle sx={{
                    fontSize: 30,}}>
                    Messages:</DialogTitle>
                <Divider></Divider>
                <DialogContent>
                    <ListMessages></ListMessages>
                    <br></br>

                </DialogContent>
            </Dialog>
        </div>
    );
}