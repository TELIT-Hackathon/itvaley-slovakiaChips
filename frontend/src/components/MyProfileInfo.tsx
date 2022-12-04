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

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#3493d2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 50,
    color: theme.palette.text.secondary,
}));

export default function MyProfileInfo() {
    return (
        <Box sx={{width:700, alignSelf:'center'}}>
            <Card>
                <CardContent>
                    <Typography sx={{fontSize:30, fontWeight:"bold"}}>About me</Typography>
                    <Typography sx={{fontSize:20}}>IT student</Typography>
                    <Typography sx={{fontSize:15}}>I'm An entry-level IT student specializing in software engineering, application development and I have experience with Java.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}