import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import angular from "../images/angular.png";
import { CardActionArea } from '@mui/material';

export default function CardAngular() {
    return (
        <Card sx={{ maxWidth: 200, maxHeight: 250}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: 200, width:200 }}
                    image={angular}
                />
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                        Angular
                    </Typography>
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                    {/*    species, ranging across all continents except Antarctica*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}