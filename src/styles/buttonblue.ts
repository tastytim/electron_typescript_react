import { Button ,styled } from "@mui/material";



export const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.primary.light,
    margin: 5,
    "&:hover":{
        backgroundColor: theme.palette.secondary.main
    },
    color:'white'
}));