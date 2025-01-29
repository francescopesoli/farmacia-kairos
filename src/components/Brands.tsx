import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
    "/brands/ceraVee.png",
    "/brands/brand2.png",
    "/brands/brand3.png",
    "/brands/brand4.png",
    "/brands/brand5.png",
];

// 🔹 Raddoppiamo l'array per evitare spazi vuoti nel carosello
const extendedBrands = [...brands, ...brands];

const settings = {
    infinite: true, // Loop infinito
    speed: 3000, // Velocità fluida
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
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
        },
    ],
};

const Brands = () => {
    return (
        <Box sx={{ py: 5, backgroundColor: "#f8f9fa", textAlign: "center" }}>
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
                                    width: "120px",
                                    height: "auto",
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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