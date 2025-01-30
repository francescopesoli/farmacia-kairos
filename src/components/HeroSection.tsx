import { Box, Button, Typography } from "@mui/material";
import heroImage from "@assets/hero-images.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg mt-10">
            {/* Testo */}
            <Box className="max-w-lg">
                <Typography variant="h3" className="font-bold text-primary" sx={{ fontFamily: "serif", letterSpacing: 1 }}>
                    Farmacie Kairos
                </Typography>
                <Typography variant="body1" className="mt-4 text-gray-700" sx={{ fontStyle: "italic", fontSize: "1.2rem" }}>
                    IL MOMENTO GIUSTO PER PRENDERTI CURA DI TE
                </Typography>
                <Button variant="contained" className="mt-4 bg-primary text-white" component={Link} to="/chi-siamo" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
                    Scopri di più
                </Button>
            </Box>

            {/* Immagine */}
            <Box sx={{ width: "350px", height: "300px", borderRadius: "50%", overflow: "hidden", boxShadow: 3, mt: 2 }}>
                <img src={heroImage} alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
        </div>
    );
};

export default HeroSection;