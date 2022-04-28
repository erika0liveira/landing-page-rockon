import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import LogoRS from "../assets/LogoRS.png";

export const Footer = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            component={Paper}

            display="flex"
            flexWrap={smDown ? "wrap" : "nowrap"}
            justifyContent="center"

            width="100%"
            height={theme.spacing(30)}

            borderRadius="0"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"

                width="80vw"
            >
                <Box
                    width={smDown ? "100%" : "60%"}
                >
                    <Box
                        component="img"

                        src={LogoRS}
                        alt="Logo Rockon Store"

                        width={smDown ? "80px" : "180px"}
                        height={smDown ? "auto" : "100px"}
                    />
                </Box>

                <Box
                    width={smDown ? "100%" : "15%"}
                >
                    <Typography
                        variant="body1"
                        textAlign="center"
                        width="100%"
                    >
                        Nos siga nas redes sociais:

                        <Box
                            display="flex"
                            justifyContent={smDown ? "space-evenly" : "center"}
                            gap="10px"
                            flexWrap="wrap"

                            marginTop="10px"
                        >
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>

                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;