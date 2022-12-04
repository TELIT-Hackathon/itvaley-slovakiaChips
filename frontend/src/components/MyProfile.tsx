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
import cindy from "../images/imag.jpg";
import student from "../images/student.png";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#3493d2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignSelf:'center',
    width: 50,
    color: theme.palette.text.secondary,
}));

export default function MyProfile() {
    return (
        <Card sx={{minWidth: 345}}>
            <Avatar src={student} sx={{top: 10, left: 100, width: 150, height: 150}}></Avatar>
            <br/>
            <CardContent>
                <Typography align={"center"} gutterBottom variant="h5" component="div">
                    John Mohan
                </Typography>
                <Typography align={"center"} sx={{backgroundColor:'lightblue', padding:1}}>Student</Typography>
                <br/>
                <br/>
                <Box sx={{display:"flex",
                    justifyContent:"center",
                    alignItems:"center"}}>
                    <Button variant="contained">
                        Edit profile
                    </Button>
                </Box>


            </CardContent>
        </Card>
    );
}