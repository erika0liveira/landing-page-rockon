import { Box, Button, Paper, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const EmailBlock = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component={Paper}

            display="flex"
            justifyContent="center"

            width="100vw"
            maxWidth="100%"
            height={smDown ? theme.spacing(25) : mdDown ? theme.spacing(50) : theme.spacing(55)}

            boxSizing="border-box"
        >
            <Box
                width="70vw"
                paddingY={10}
                boxSizing="border-box"
            >
                <Typography
                    variant={smDown ? "h4" : mdDown ? "h3" : "h2"}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    color="gray"
                >Lançamento em 2030</Typography>

                <Typography
                    variant={smDown ? "h6" : mdDown ? "h6" : "h4"}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    color="gray"
                >Assine para ser avisado e ganhar um cupom exclusivo</Typography>

                <TextField
                    variant="filled" 
                    label="email"
                    placeholder="SeuEmail@email.com"
                    required
                />
                <Button color="primary"><ArrowCircleRightIcon style={{ fontSize:"3rem"}} /></Button>


            </Box>
        </Box >
    )
}

export default EmailBlock;