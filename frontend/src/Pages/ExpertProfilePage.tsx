import AppBarr from "../components/AppBarr";
import Background from "../Background";
import Typography from "@mui/material/Typography";
import Register from "../components/Register";
import Login from "../components/Login";
import Box from "@mui/material/Box";
import itValley from "../images/itValley.jpg";
import React from "react";
import {Grid, Stack} from "@mui/material";
import CardCatalog from "../components/CardCatalog";
import python from "../images/python.png";
import Paper from "@mui/material/Paper";
import DialogExperts from "../components/DialogExperts";
import CardC from "../components/CardC";
import CardPython from "../components/CardPython";
import CardJava from "../components/CardJava";
import CardCss from "../components/CardCss";
import CardMysql from "../components/CardMysql";
import CardAngular from "../components/CardAngular";
import CardCs from "../components/CardCs";
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ExpertProfile from "../components/ExpertProfile";
import ExpertInfo from "../components/ExpertInfo";
import ExpertExpertize from "../components/ExpertExpertize";


function ExpertProfilePage() {
    return (
        <>
            <AppBarr></AppBarr>
            <br/>
            <Background></Background>
            <Box sx={{alignSelf:'center',width:300}}>
            </Box>
            <Stack spacing={3}>
                <Box sx={{alignSelf:'center'}}>
                    <ExpertProfile></ExpertProfile>
                </Box>
                <ExpertInfo></ExpertInfo>
                <ExpertExpertize></ExpertExpertize>
            </Stack>

        </>
    );
}

export default ExpertProfilePage;