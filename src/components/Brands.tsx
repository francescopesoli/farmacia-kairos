import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
    "/brands/Aboca.svg",
    "/brands/Avène.svg",
    "/brands/CeraVe.svg",
    "/brands/Dompé.svg",
    "/brands/Haleon.svg",
    "/brands/Hipp.svg",
    "/brands/La-Roche-Posay.svg",
    "/brands/Reckitt.svg",
    "/brands/Vichy.svg",
];

// 🔹 Raddoppiamo l'array per evitare spazi vuoti nel carosello
const extendedBrands = [...brands, ...brands];

const settings = {
    infinite: true, // Loop infinito
    speed: 4000, // Velocità fluida
    slidesToShow: 5, // Mostra più elementi su desktop
    slidesToScroll: 1, // Scorrimento di un elemento alla volta
    autoplay: true,
    autoplaySpeed: 0, // Nessuna pausa tra i cicli
    cssEase: "linear", // Movimento continuo
    variableWidth: false, // Disabilitato per evitare problemi di spazi vuoti
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
            speed: 4000,

        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 },
            speed: 4000,
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
            speed: 4000,
        },
    ],
};

const Brands = () => {
    return (
        <Box sx={{ py: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}>
                Le nostre marche
            </Typography>
            <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {extendedBrands.map((logo, index) => (
                        <Box key={index} sx={{ display: "flex", justifyContent: "center", padding: 1 }}>
                            <img
                                src={logo}
                                alt={`Brand ${index}`}
                                style={{
                                    width: "180px",
                                    height: "auto",
                                    padding: "5px",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default Brands;