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
import ListExperts from "../components/ListExperts";

function ExpertsPage() {
    return (
        <>
            <AppBarr></AppBarr>
            <Background></Background>
            <br/><br/><br/><br/>
            <Stack direction="row" spacing={3}>
            <ListExperts></ListExperts>

            </Stack>

        </>
    );
}

export default ExpertsPage;