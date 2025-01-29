import { Box, Typography, Container } from "@mui/material";

const ChiSiamo = () => {
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: "#E0F2F1", // Colore di sfondo simile alle immagini fornite
                textAlign: "center",
                minHeight: "100vh",
            }}
        >
            <Container maxWidth="md">
                {/* Titolo principale */}
                <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#333", fontFamily: "serif" }}
                >
                    Chi siamo
                </Typography>

                {/* Testo principale */}
                <Typography
                    variant="h5"
                    sx={{
                        color: "#444",
                        mt: 4,
                        fontWeight: 400,
                        fontSize: "1.2rem",
                        lineHeight: 1.8,
                    }}
                >
                    Benvenuti nella nostra farmacia, il vostro punto di riferimento per il
                    benessere e la salute. Crediamo che ogni momento sia quello giusto per
                    prendersi cura di sé, trasformando ogni occasione in un’opportunità unica.
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        color: "#444",
                        mt: 4,
                        fontWeight: 400,
                        fontSize: "1.2rem",
                        lineHeight: 1.8,
                    }}
                >
                    Ispirati al concetto greco di <strong>Kairos</strong>, mettiamo a disposizione
                    prodotti, servizi e consulenze pensati per rispondere alle vostre esigenze,
                    aiutandovi a trovare il vostro equilibrio ideale.
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        color: "#444",
                        mt: 4,
                        fontWeight: 400,
                        fontSize: "1.2rem",
                        lineHeight: 1.8,
                    }}
                >
                    Siamo qui per voi, con <strong>professionalità</strong>, <strong>passione</strong> e{" "}
                    <strong>dedizione</strong>.
                </Typography>
            </Container>
        </Box>
    );
};

export default ChiSiamo;