import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

interface Farmacia {
    nome: string;
    indirizzo: string;
    mapsLink: string;
    img: string;
    whatsapp: string;
}

const farmacie: Farmacia[] = [
    {
        nome: "Farmacia Rupes",
        indirizzo: "Castel Sant’Elia(VT) - Via Roma, 15, 01030",
        mapsLink: "https://www.google.com/maps/place/Farmacia+Rupes+-+Farmacie+Kairos+-/@42.248422,12.3628516,965m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132f3ec10bdc74df:0x6ebe228c86121275!8m2!3d42.2484181!4d12.3654265!16s%2Fg%2F1vyr7zh4?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
        img: "/farmacie/farmacia1.svg",
        whatsapp: "https://wa.me/3921427894",
    },
    {
        nome: "Farmacia S. Monica",
        indirizzo: "Genzano di Roma(RM) - Via Sebastiano Silvestri, 124, 00045",
        mapsLink: "https://www.google.com/maps/place/Farmacia+S.+Monica+-+Farmacie+Kairos+-/@41.7040776,12.6864087,974m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132584bf4fd89055:0xbe0c5daea89510e6!8m2!3d41.7040737!4d12.6912796!16s%2Fg%2F1tdjf12c?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
        img: "/farmacie/farmacia2.svg",
        whatsapp: "https://wa.me/3921427894",
    },
];

const Footer: React.FC = () => {
    return (
        <Box sx={{ mt: "auto", bgcolor: "primary.light", color: "white", py: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Contattaci</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PhoneIcon />
                    <Typography>+39 0687133919</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmailIcon />
                    <Link href="mailto:info@farmaciakairos.it" color="inherit" sx={{ textDecoration: "none", transition: "0.3s", '&:hover': { color: "#ffcc00" } }}>
                        info@farmaciakairos.it
                    </Link>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
                {farmacie.map((farmacia, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <LocationOnIcon />
                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>{farmacia.nome}</Typography>
                            <Link href={farmacia.mapsLink} target="_blank" color="inherit" sx={{ textDecoration: "none", transition: "0.3s", '&:hover': { color: "#ffcc00" } }}>
                                {farmacia.indirizzo}
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
                <Link href="https://www.instagram.com/farmacie_kairos/" target="_blank" color="inherit" sx={{ transition: "0.3s", '&:hover': { color: "#ffcc00" } }}>
                    <InstagramIcon fontSize="large" />
                </Link>
                <Link href="https://www.facebook.com/farmacie_kairos/" target="_blank" color="inherit" sx={{ transition: "0.3s", '&:hover': { color: "#ffcc00" } }}>
                    <FacebookIcon fontSize="large" />
                </Link>

            </Box>
        </Box>
    );
};

export default Footer;
