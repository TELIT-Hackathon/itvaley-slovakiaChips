import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import CardAngular from "./CardAngular";
import CardReact from "./CardReact";
import DialogExperts from "./DialogExperts";
import CardJava from "./CardJava";


export default function MyProfileExpertize() {
    return (
        <Box sx={{width: 700, alignSelf: 'center'}}>
            <Card>
                <CardContent>
                    <Typography sx={{fontSize: 30, fontWeight: "bold"}}>Expertise</Typography>
                    <Stack direction="row" spacing={3}>
                        <CardJava></CardJava>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}