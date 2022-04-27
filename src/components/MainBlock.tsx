import { Paper, Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import mainBg from "../assets/mainBg.jpg";

export const MainBlock = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component={Paper}

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"

            width="100%"
            height={smDown ? theme.spacing(25) : mdDown ? theme.spacing(50) : theme.spacing(125)}

            style={{
                backgroundImage: `url(${mainBg})`,
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
        </Box>
    );
}

export default MainBlock;
