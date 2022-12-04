import AppBarr from "../components/AppBarr";
import Background from "../Background";
import Typography from "@mui/material/Typography";
import Register from "../components/Register";
import Login from "../components/Login";
import Box from "@mui/material/Box";
import itValley from "../images/itValley.jpg";
import React from "react";

function MainPage() {
    return (
        <>
            <AppBarr></AppBarr>
            <Background></Background>
            <Typography sx={{
                height: 400,
                width: 1000,
                position: 'absolute',
                top: 230,
                left: 100,
                fontSize:50,
                color: '#ece3e3',

            }}>Learn, teach, help others
            </Typography>
            <Register></Register>
            <Login></Login>
            <Box
                component="img"
                sx={{
                    height: 400,
                    width: 350,
                    position: 'absolute',
                    top: 250,
                    left: 1000,
                }}
                alt="itValley"
                src={itValley}
            />
        </>
    );
}

export default MainPage;