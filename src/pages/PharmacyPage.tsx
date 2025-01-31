import { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button, Modal, TextField, Typography, IconButton, Paper, Grid } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

// Lazy load della mappa per evitare problemi di SSR con Next.js
const MapComponent = dynamic(() => import("@components/MapComponent"), {
    ssr: false,
});

interface PharmacyProps {
    name: string;
    description: string;
    address: string;
    hours: string;
    phone: string;
    email: string;
    services: { icon: JSX.Element; name: string; description: string }[];
    whatsappNumber: string;
}

const PharmacyPage: React.FC<PharmacyProps> = ({
                                                   name,
                                                   description,
                                                   address,
                                                   hours,
                                                   phone,
                                                   email,
                                                   services,
                                                   whatsappNumber,
                                               }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleOrder = () => {
        console.log("Dati ordine:", formValues);
        setIsModalOpen(false);
        setFormValues({ name: "", email: "", phone: "", description: "" });
    };

    return (
        <Box className="container mx-auto p-4">
            {/* Titolo e descrizione */}
            <Typography variant="h4" fontWeight="bold">
                {name}
            </Typography>
            <Typography color="gray">{description}</Typography>

            {/* Mappa e informazioni */}
            <Grid container spacing={4} className="mt-6">
                <Grid item xs={12} lg={6}>
                    <Paper elevation={3} className="p-4">
                        <MapComponent address={address} />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={3} className="p-4">
                        <Typography variant="h6">Dove siamo</Typography>
                        <Typography>{address}</Typography>

                        <Typography variant="h6" className="mt-4">
                            Orari
                        </Typography>
                        <Typography>{hours}</Typography>

                        <Typography variant="h6" className="mt-4">
                            Contatti
                        </Typography>
                        <Typography>📞 {phone}</Typography>
                        <Typography>📧 {email}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Servizi */}
            <Box className="mt-8">
                <Typography variant="h5" fontWeight="bold">
                    Servizi
                </Typography>
                <Grid container spacing={2} className="mt-4">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <Paper elevation={2} className="p-4 flex flex-col items-center text-center">
                                {service.icon}
                                <Typography variant="h6" className="mt-2">
                                    {service.name}
                                </Typography>
                                <Typography color="gray">{service.description}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Pulsante Ordina Ora */}
            <Box className="mt-8 flex justify-center">
                <Button variant="contained" color="primary" size="large" onClick={() => setIsModalOpen(true)}>
                    Ordina Ora
                </Button>
            </Box>

            {/* Modale Ordina Ora */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-96 shadow-lg">
                    <Typography variant="h6" gutterBottom>
                        Ordina un Farmaco
                    </Typography>
                    <TextField
                        fullWidth
                        label="Nome e Cognome"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        margin="normal"
                        type="email"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Numero di telefono"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Descrizione del farmaco"
                        name="description"
                        value={formValues.description}
                        onChange={handleInputChange}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Button fullWidth variant="contained" color="primary" onClick={handleOrder} className="mt-4">
                        Invia Ordine
                    </Button>
                </Box>
            </Modal>

            {/* Pulsante WhatsApp */}
            <IconButton
                component="a"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
                <WhatsApp fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default PharmacyPage;