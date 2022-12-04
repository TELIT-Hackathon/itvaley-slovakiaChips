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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function CatalogPage() {
    return (
        <>
            <AppBarr></AppBarr>
            <Background></Background>
            <br/><br/>
            <Typography align={"center"} sx={{fontSize:35}}>Featured:</Typography>
            <br/><br/>
            <Stack direction="row" spacing={3}>
                <DialogExperts></DialogExperts>
                <CardC></CardC>
                <CardPython></CardPython>
                <CardJava></CardJava>
                <CardCss></CardCss>
                <CardAngular></CardAngular>
                <CardCs></CardCs>

            </Stack>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    );
}

export default CatalogPage;