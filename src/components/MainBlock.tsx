import { Paper, Box, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


import mainBg from "../assets/mainBg.jpg";

export const MainBlock = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

    return (
        <Box
            component={Paper}

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
            borderRadius="0"
            width="100%"
            height={smDown ? theme.spacing(25) : mdDown ? theme.spacing(50) : lgDown ? theme.spacing(55) : xlDown ? theme.spacing(70) : theme.spacing(125)}

            style={{
                backgroundImage: `linear-gradient(#afafaf9f, #0000007a), url(${mainBg})`,                
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Typography
                variant={smDown ? "h4" : mdDown ? "h2" : "h1"}
                whiteSpace="nowrap"
                overflow="hidden"
            >ROCKON STORE</Typography>

            <Typography
                variant={smDown ? "h6" : mdDown ? "h4" : "h3"}
                whiteSpace="nowrap"
                overflow="hidden"
            >Em breve...</Typography>

            <Button color="primary"><ArrowCircleDownIcon style={{ fontSize:"3rem"}}/></Button>

        </Box>
    );
}

export default MainBlock;
