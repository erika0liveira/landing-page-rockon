import { Box, Paper, Typography, useTheme } from "@mui/material";

export const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            component={Paper}

            width="100%"
            height={theme.spacing(15)}
            
            borderRadius="0"
        >
            <Typography>
                FOOTER
            </Typography>
        </Box>
    )
}

export default Footer;