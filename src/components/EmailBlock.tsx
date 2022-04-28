import { Box, Button, Paper, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const EmailBlock = () => {
    const theme = useTheme();

    const xsDown = useMediaQuery(theme.breakpoints.down("xs"));
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component={Paper}

            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            borderRadius="0"
            width="100vw"
            maxWidth="100%"
            height={xsDown ? theme.spacing(45) : smDown ? theme.spacing(35) : mdDown ? theme.spacing(40) : theme.spacing(50)}

            boxSizing="border-box"
        >
            <Box
                width="80vw"
                paddingY={smDown ? 5 : mdDown ? 10 : 10}
                boxSizing="border-box"
            >
                <Typography
                    variant={smDown ? "h4" : mdDown ? "h3" : "h2"}
                    overflow="hidden"
                    color="gray"
                >Lançamento em breve...</Typography>

                <Typography
                    variant={smDown ? "h6" : mdDown ? "h6" : "h4"}
                    overflow="hidden"
                    color="gray"
                >Cadastre seu email para ser avisado e ganhar um cupom exclusivo!</Typography>

                <TextField
                    variant="filled" 
                    label="Email"
                    placeholder="SeuEmail@email.com"
                    required
                    style={{ width: "60%", marginTop: "30px"}}
                />
                <Button color="primary"><ArrowCircleRightIcon style={{ fontSize: "3rem", marginTop: "30px"}} /></Button>
            </Box>
        </Box >
    )
}

export default EmailBlock;