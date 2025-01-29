import { Box, Button, Typography } from "@mui/material";
import heroImage from "@assets/hero-images.png";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg mt-10">
            {/* Testo */}
            <Box className="max-w-lg">
                <Typography variant="h3" className="font-bold text-primary">
                    Amici della tua <span className="text-blue-600">Salute</span>
                </Typography>
                <Typography variant="body1" className="mt-4 text-gray-700">
                    Benvenuti nelle <b>Farmacie Kairos</b>, dove la tua salute è la nostra
                    priorità. Il nostro team di esperti è pronto ad aiutarti con prodotti e servizi personalizzati.
                </Typography>
                <Button variant="contained" className="mt-4 bg-primary text-white" component={Link} to="/chi-siamo">
                    Scopri di più
                </Button>
            </Box>

            {/* Immagine */}
            <Box className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img src={heroImage} alt="Team" className="w-full h-full object-cover" />
            </Box>
        </div>
    );
};

export default HeroSection;