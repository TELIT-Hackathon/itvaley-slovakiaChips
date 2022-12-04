import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import {styled} from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import {Stack} from "@mui/material";
import Rating from "@mui/material/Rating";
import Ratingg from "./Ratingg";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import Chat from "./Chat";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#3493d2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignSelf:'center',
    width: 50,
    color: theme.palette.text.secondary,
}));

export default function ExpertProfile() {
    return (
        <Card sx={{maxWidth: 345}}>
            <Avatar sx={{top: 10, left: 100, width: 150, height: 150}}></Avatar>
            <br/>
            <CardContent>
                <Typography align={"center"} gutterBottom variant="h5" component="div">
                    Greg Gorlen
                </Typography>
                    <Typography align={"center"} sx={{backgroundColor:'lightblue', padding:1}}>Expert</Typography>
                <br/>
                <Ratingg></Ratingg>
                <br/>
                <Box sx={{display:"flex",
                    justifyContent:"flex-end",
                    alignItems:"flex-end"}}>
                    <Chat></Chat>
                </Box>


            </CardContent>
        </Card>
    );
}