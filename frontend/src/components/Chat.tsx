import {
    Container,
    Divider,
    FormControl,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import "../Chat.css"
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import * as React from "react";
import cindy from "../images/imag.jpg";

export default function Chat(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" endIcon={<SendIcon />}>
                Contact me
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth={'xs'}
                    PaperProps={{sx: {position: "fixed", bottom: 0, right: 0, m: 0, width: 700, height: 490}}}>

                <Paper elevation={5}>
                    <Box p={3}>
                        <Stack direction="row" spacing={2}>
                        <Avatar src={cindy}></Avatar>
                        <Typography variant="h4" gutterBottom>
                            Cindy Baker
                        </Typography>
                        </Stack>
                        <br/>
                        <Divider />
                        <Grid container spacing={4} alignItems="center">
                            <Grid id="chat-window" xs={12} item>
                                <List id="chat-window-messages">

                                    <ListItem ></ListItem>
                                </List>
                                <Divider />
                            </Grid>
                            <Grid xs={9} item>
                                <FormControl fullWidth>
                                    <TextField
                                               label="Type your message..."
                                               variant="outlined"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={1} item>
                                <IconButton
                                            aria-label="send"
                                            color="primary">
                                    <SendIcon />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Box>
                </Paper>
        </Dialog>
        </div>
    );
}