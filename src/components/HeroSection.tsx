import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import heroImage from "@assets/hero-images.png";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)"); // Verifica se è mobile

    return (
        <>
            {isMobile ? (
                // **LAYOUT MOBILE**
                <Box className="flex flex-col items-center justify-center bg-gray-100 px-6 py-16 min-h-[90vh]">
                    {/* Testo */}
                    <Box className="max-w-sm text-center">
                        <Typography
                            variant="h2"
                            className="font-bold text-primary"
                            sx={{ fontFamily: "serif", letterSpacing: 1, mb: 3 }}
                        >
                            Farmacie Kairos
                        </Typography>
                        <Typography variant="h5" className="text-gray-700" sx={{ fontStyle: "italic", mb: 2 }}>
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
                            sx={{ fontWeight: "bold", textTransform: "uppercase", cursor: "pointer", mb: 2 }}
                        >
                            Scopri di più
                        </Button>
                    </Box>

                    {/* Immagine */}
                    <Box className="flex justify-center mt-5" sx={{ width: "100%", maxWidth: "400px" }}>
                        <img
                            src={heroImage}
                            alt="Team"
                            className="w-full h-auto object-cover max-w-[350px]"
                        />
                    </Box>
                </Box>
            ) : (
                // **LAYOUT DESKTOP**
                <Box className="flex flex-row-reverse items-center justify-between bg-gray-100 px-12 py-32 min-h-[90vh]">
                    {/* Immagine */}
                    <Box className="flex justify-end flex-1" sx={{ width: "100%", maxWidth: "500px" }}>
                        <img
                            src={heroImage}
                            alt="Team"
                            className="w-full h-auto object-cover max-w-[450px]"
                        />
                    </Box>

                    {/* Testo */}
                    <Box className="max-w-lg text-left flex-1 pr-12">
                        <Typography
                            variant="h2"
                            className="font-bold text-primary"
                            sx={{ fontFamily: "serif", letterSpacing: 1, mb: 3 }}
                        >
                            Farmacie Kairos
                        </Typography>
                        <Typography variant="h5" className="text-gray-700" sx={{ fontStyle: "italic", mb: 2 }}>
                            IL MOMENTO GIUSTO PER PRENDERTI CURA DI TE
                        </Typography>
                        <Button
                            variant="contained"
                            className="bg-primary text-white px-10 py-5 text-xl"
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
                </Box>
            )}
        </>
    );
};

export default HeroSection;