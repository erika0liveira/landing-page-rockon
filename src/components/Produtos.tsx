import { Paper, Box, Typography, useTheme, useMediaQuery, Button, Card } from "@mui/material";

import SecondaryBg from "../assets/SecondaryBg.jpg";
import ShirtImg from "../assets/Camisetas.png";
import LPImg from "../assets/LP.png";
import PatchImg from "../assets/Patch.jpg";

export const Produtos = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const xlDown = useMediaQuery(theme.breakpoints.down("xl"));
    const xlUp = useMediaQuery(theme.breakpoints.up("xl"));

    return (
        <Box
            component={Paper}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"

            maxWidth="100%"
            height={smDown ? theme.spacing(155) : lgDown ? theme.spacing(125) : mdDown ? theme.spacing(130) : xlDown ? theme.spacing(150) : theme.spacing(110)}

            borderRadius="0"
            boxSizing="border-box"
            textAlign="center"

            sx={{
                background: `url(${SecondaryBg})`,
            }}
        >
            <Box
                display="flex"
                flexWrap="wrap"
                gap="10"
                justifyContent={smDown ? "" : xlDown ? "space-around" : "space-between"}

                width="90vw"
                height={smDown ? "10vh" : xlDown ? "30vh" : "50vh" }
            >
                <Box
                    display={xlDown ? "" : "flex"}
                    justifyContent={xlDown ? "" : "center"}
                    alignSelf={xlDown ? "" : "center"}
                    width="100%"   
                    marginY={smDown ? "20px" : xlDown ? "50px" : "60px"}
                >
                    <Typography
                        variant={smDown ? "h5" : xlDown ? "h3" : "h2"}
                        color="#9a9898">
                        A melhor loja para se encontrar:
                    </Typography>
                </Box>

                <Box
                    marginY={xlDown || xlUp ? "20px" : "0"}
                    
                    sx={{
                        width: smDown ? "100%" : xlDown ? "50%" : "30%",
                        height: smDown ? "40vh" : xlDown ? "40vh" : "60vh",
                    }}
                >
                    <Typography
                        variant={smDown ? "h6" : xlDown ? "h4" : "h2"}
                        color="#9a9898"
                    >CAMISETAS</Typography>

                    <Box
                        component="img"
                        src={ShirtImg}
                        width="90%"
                        height={smDown ? "80%" : "85%"}
                        marginTop="10px"
                    />
                </Box>

                <Box
                    marginY={xlDown || xlUp ? "20px" : "0"}

                    sx={{
                        width: smDown ? "100%" : xlDown ? "50%" : "30%",
                        height: smDown ? "40vh" : xlDown ? "40vh" : "60vh",
                    }}
                >
                    <Typography
                        variant={smDown ? "h6" : xlDown ? "h4" : "h2"}
                        color="#9a9898"
                    >LPS</Typography>

                    <Box
                        component="img"
                        src={LPImg}
                        width="90%"
                        height={smDown ? "80%" : "85%"}
                        marginTop="10px"
                    />

                </Box>

                <Box
                    marginY={xlDown || xlUp ? "20px" : "0"}
                    
                    sx={{
                        width: smDown ? "100%" : xlDown ? "50%" : "30%",
                        height: smDown ? "40vh" : xlDown ? "40vh" : "60vh",
                    }}
                >
                    <Typography 
                        variant={smDown ? "h6" : xlDown ? "h4" : "h2"}
                        color="#9a9898"
                    >PATCHS</Typography>

                    <Box
                        component="img"
                        src={PatchImg}
                        width="90%"
                        height={smDown ? "80%" : "85%"}
                        marginTop="10px"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Produtos;