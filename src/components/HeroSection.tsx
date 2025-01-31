import { Box, Button, Typography } from "@mui/material";
import heroImage from "@assets/hero-images.png";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-12 py-32 min-h-[90vh]">
            {/* Testo */}
            <Box className="max-w-sm text-center md:text-left flex-1 md:pr-12">
                <Typography variant="h2" className="font-bold text-primary" sx={{ fontFamily: "serif", letterSpacing: 1, mb: 3, mt:4 }}>
                    Farmacie Kairos
                </Typography>
                <Typography variant="h5" className=" text-gray-700" sx={{ fontStyle: "italic", mb: 4 }}>
                    IL MOMENTO GIUSTO PER PRENDERTI CURA DI TE
                </Typography>
                <Button
                    variant="contained"
                    className="bg-primary text-white px-10 py-5 text-xl mb-10"
                    component={ScrollLink}
                    to="chi-siamo"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    sx={{ fontWeight: "bold", textTransform: "uppercase", cursor: "pointer" }}
                >
                    Scopri di più
                </Button>
            </Box>

            {/* Immagine */}
            <Box className="flex justify-center md:justify-end mt-5 md:mt-0 flex-1" sx={{ display: "flex", width: "100%", maxWidth: "500px" }}>
                <img src={heroImage} alt="Team" className="w-full h-auto object-cover max-w-[450px] md:max-w-[500px]" />
            </Box>
        </div>
    );
};

export default HeroSection;