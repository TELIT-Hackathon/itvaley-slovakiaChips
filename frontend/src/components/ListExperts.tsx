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
                    <Avatar alt="John Kon" src={c} />
                </ListItemAvatar>
                <ListItemText
                    primary="John Kon"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Senior developer
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Travis Howard"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Java enthusiast
                            </Typography>
                            {"— Full-stack applications"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={im1} />
                </ListItemAvatar>
                <ListItemText
                    primary="Cindy Baker"
                    secondary={
                        <React.Fragment>
                            <Link to={"/ExpertProfile"}>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            </Link>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Java developer
                            </Typography>
                            {'— I will learn you basis'}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Tim Fisher" src={im} />
                </ListItemAvatar>
                <ListItemText
                    primary="Tim Fisher"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Senior
                            </Typography>
                            {""}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Greg Gorlen" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Greg Gorlen"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Manager
                            </Typography>
                            {""}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Mike" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Mike Bickar"
                    secondary={
                        <React.Fragment>
                            <Button sx={{position:'absolute',right:-10, bottom:20}}><img src={arr}/></Button>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Software engineer
                            </Typography>
                            {""}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}