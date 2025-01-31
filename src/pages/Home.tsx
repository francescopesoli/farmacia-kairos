import { Box, Container } from "@mui/material";
import HeroSection from "@components/HeroSection";
import Brands from "@components/Brands";
import Farmacie from "@components/Farmacie";
import Laboratorio from "@components/Laboratorio";
import ChiSiamo from "@components/ChiSiamo";

const Home = () => {
    return (
        <>
            {/* Sezione Hero con sfondo in basso */}
            <Box
                id="home"
                sx={{
                    position: "relative",
                    bgcolor: "#f3f5fa",
                    backgroundImage: 'url(/sfondo3.svg)',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Adjusted size
                    py: 8, // Added padding to the bottom
                    pb: 25,
                }}
            >
                <Container maxWidth="lg">
                    <HeroSection />
                </Container>
            </Box>

            {/* Sezioni successive */}
            <Box id="chi-siamo" sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <ChiSiamo />
                </Container>
            </Box>

            <Box id="marchi" sx={{ bgcolor: "#f3f5fa", py: 8 }}>
                <Container maxWidth="lg">
                    <Brands />
                </Container>
            </Box>

            <Box id="farmacie" sx={{ bgcolor: "white", py: 8 }}>
                <Container maxWidth="lg">
                    <Farmacie />
                </Container>
            </Box>

            <Box id="prodotti" sx={{ bgcolor: "#f3f5fa", py: 8 }}>
                <Container maxWidth="lg">
                    <Laboratorio />
                </Container>
            </Box>
        </>
    );
};

export default Home;