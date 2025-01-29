import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const farmacie = [
    {
        nome: "Farmacia Rupes ",
        descrizione: "Castel Sant’Elia",
        img: "/farmacie/roma-centro.jpg",
        whatsapp: "https://wa.me/3921427894",
    },
    {
        nome: "Farmacia S.Monica",
        descrizione: "Genzano di Roma",
        img: "/farmacie/milano-nord.jpg",
        whatsapp: "https://wa.me/3921427894",
    },
];

const Farmacie = () => {
    return (
        <Box className="py-10 bg-white text-center">
            <Typography variant="h4" className="font-bold mb-6 text-primary">
                Le nostre farmacie
            </Typography>
            <Box className="grid md:grid-cols-2 gap-6">
                {farmacie.map((farmacia, index) => (
                    <Box key={index} className="p-4 border rounded-lg shadow-md">
                        <img src={farmacia.img} alt={farmacia.nome} className="h-40 w-full object-cover rounded-md" />
                        <Typography variant="h5" className="font-bold mt-4">{farmacia.nome}</Typography>
                        <Typography className="text-gray-600">{farmacia.descrizione}</Typography>
                        <Button variant="contained" className="mt-4 bg-primary text-white">
                            Scopri di più
                        </Button>
                        <Button href={farmacia.whatsapp} target="_blank" className="ml-4 text-green-500">
                            <WhatsAppIcon fontSize="large"  />
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Farmacie;