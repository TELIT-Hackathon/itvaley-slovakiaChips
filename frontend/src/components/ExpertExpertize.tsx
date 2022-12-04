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
import CardAngular from "./CardAngular";



export default function ExpertExpertize() {
    return (
        <Box sx={{width:700, alignSelf:'center'}}>
        <Card>
            <CardContent>
                <Typography sx={{fontSize:30, fontWeight:"bold"}}>Expertise</Typography>
                <CardAngular></CardAngular>
            </CardContent>
        </Card>
        </Box>
    );
}