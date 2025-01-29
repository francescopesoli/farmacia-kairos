import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const farmacie = [
    {
        nome: "Farmacia Rupes (Castel Sant’Elia) – Benessere e Salute al Tuo Fianco",
        descrizione: "Benvenuto alla Farmacia Rupes, il tuo punto di riferimento per la salute e il benessere. Offriamo una vasta gamma di prodotti farmaceutici, integratori, cosmetici e servizi personalizzati per prenderti cura di te ogni giorno. Con professionalità e attenzione, il nostro team di esperti è sempre pronto a consigliarti le soluzioni migliori per le tue esigenze.\n" +
            "Vieni a trovarci e scopri un nuovo modo di vivere la tua salute!\n",
        img: "/farmacie/farmacia1.svg",
        whatsapp: "https://wa.me/3921427894",
    },
    {
        nome: "Farmacia S. Monica (Genzano di Roma) – La Tua Salute, la Nostra Priorità",
        descrizione: "Alla Farmacia S. Monica, mettiamo il tuo benessere al centro di tutto. Con un team di esperti sempre a tua disposizione, offriamo consulenze personalizzate, prodotti di alta qualità e un servizio attento e professionale. Dalla prevenzione alla cura, siamo qui per accompagnarti in ogni fase della tua salute con soluzioni affidabili e innovative.\n" +
            "Vieni a trovarci e affidati alla nostra esperienza!\n",
        img: "/farmacie/farmacia2.svg",
        whatsapp: "https://wa.me/3921427894",
    },
];

const Farmacie = () => {
    return (
        <Box sx={{ py: 10, backgroundColor: "white", textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 6, color: "primary.main" }}>
                Le nostre farmacie
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr" }, gap: 6, alignItems: "center" }}>
                {/* Farmacia Rupes - Testo sopra, immagine sotto */}
                <Box sx={{ textAlign: "left", px: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>{farmacie[0].nome}</Typography>
                    <Typography sx={{ color: "gray", mb: 2 }}>{farmacie[0].descrizione}</Typography>
                    <Button href={farmacie[0].whatsapp} target="_blank" sx={{ color: "green", ml: 2 }}>
                        <WhatsAppIcon fontSize="large" />
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "primary.main", color: "white"}}>
                        Scopri di più
                    </Button>
                    <Box component="img" src={farmacie[0].img} alt={farmacie[0].nome}
                         sx={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px", mt: 2 }}
                    />
                </Box>

                {/* Farmacia Santa Monica - Immagine sopra, testo sotto */}
                <Box sx={{ textAlign: "left", px: 4 }}>
                    <Box component="img" src={farmacie[1].img} alt={farmacie[1].nome}
                         sx={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px", mb: 2 }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>{farmacie[1].nome}</Typography>
                    <Typography sx={{ color: "gray", mb: 2 }}>{farmacie[1].descrizione}</Typography>
                    <Button href={farmacie[1].whatsapp} target="_blank" sx={{ color: "green", ml: 2 }}>
                        <WhatsAppIcon fontSize="large" />
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "primary.main", color: "white"}}>
                        Scopri di più
                    </Button>

                </Box>
            </Box>
        </Box>
    );
};

export default Farmacie;