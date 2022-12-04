import {
    DiReact,
    DiJsBadge,
    DiHtml5, DiPython,
} from 'react-icons/di'
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import * as React from "react";

// import '../styles/components/technologiescontainer.sass'

const interest = [
    { id: "react", name: "React.JS", icon: <DiReact />, text: "Beginner",color:'#97a7f3'},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Beginner", color:'#efdd86' },
    { id: "python", name: "Python", icon: <DiPython />, text: "Beginner", color:'#a9b6d5'  },
    { id: "html", name: "HTML", icon: <DiHtml5 />, text: "Intermediate", color:'#e0a6a6'  },
];

const Pref = () => {

    return (
        <Box sx={{minWidth: 680, alignSelf:'center'}}>
            <Card sx={{maxWidth: 1000, alignSelf:'center'}}>
                <Typography sx={{fontSize: 30, fontWeight: "bold", marginLeft:1}}> I am interested in:</Typography>
        <Box style={{display:'flex', flexDirection:'row', width:20, alignSelf:'center'}}>
            {interest.map((a) => (
                <Box  style={{margin:10, backgroundColor:a.color, minWidth:150}} id={a.id} key={a.id}>
                    {a.icon}
                        <h3>{a.name}</h3>
                        <p>
                            {a.text}
                        </p>

                </Box>
            ))}
        </Box>
            </Card>
    </Box>)
}

export default Pref