import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
    return (
        <Box sx={{ mt: "auto", bgcolor: "primary.light", color: "white", py: 3, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                <Link href="https://www.instagram.com/farmacie_kairos/" target="_blank" color="inherit">
                    <InstagramIcon fontSize="large" />
                </Link>
                <FacebookIcon fontSize="large" />
            </Box>
            <Typography sx={{ mt: 2 }}>Indirizzi Farmacie | Email: info@farmaciakairos.it | P.IVA: 123456789</Typography>
            <Typography sx={{ mt: 1 }}><PhoneIcon /> 06 87133919</Typography>
        </Box>
    );
};

export default Footer;