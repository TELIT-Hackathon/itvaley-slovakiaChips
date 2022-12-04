import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Button, Grid, Paper} from '@mui/material';
import Box from "@mui/material/Box";
import StarRateIcon from '@mui/icons-material/StarRate';
import c from "../images/c.png";
import im from "../images/images.jpg";
import im1 from "../images/imag.jpg";
import arr from "../images/arrow.png";
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";


export default function ListExperts() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, maxHeight: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Travis Howard"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-20, bottom:20, fontSize:30, color:'black'}}>✔</Button>
                            <Button sx={{position:'absolute',right:-60, bottom:20, fontSize:30, color:'black'}}>X</Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Travis Howard wants to send you message.
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider></Divider>
        </List>
    );
}