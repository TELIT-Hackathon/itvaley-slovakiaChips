import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import CardAngular from "./CardAngular";
import CardReact from "./CardReact";
import DialogExperts from "./DialogExperts";


export default function ExpertExpertize() {
    return (
        <Box sx={{width: 700, alignSelf: 'center'}}>
            <Card>
                <CardContent>
                    <Typography sx={{fontSize: 30, fontWeight: "bold"}}>Expertise</Typography>
                    <Stack direction="row" spacing={3}>
                        <CardAngular></CardAngular>
                        <CardReact></CardReact>
                        <DialogExperts></DialogExperts>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}