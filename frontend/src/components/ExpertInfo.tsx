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

export default function ExpertInfo() {
    return (
        <Box sx={{width:700, alignSelf:'center'}}>
        <Card>
            <CardContent>
            <Typography sx={{fontSize:30, fontWeight:"bold"}}>About me</Typography>
            <Typography sx={{fontSize:20}}>Programmer and CS enthusiast</Typography>
            <Typography sx={{fontSize:15}}>I'm experienced in many areas of programming, from full-stack applications to creative coding, computer science education and algorithms. I work as a freelance programmer, computer science educator and technical writer and received a Master's degree in CS from Georgia Tech in 2021.</Typography>
            </CardContent>
        </Card>
        </Box>
    );
}