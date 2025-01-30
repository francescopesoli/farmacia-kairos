import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Collapse,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "@assets/logoKairos.svg";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Chi Siamo", path: "/chi-siamo" },
        { label: "I Nostri Marchi", path: "/marchi" },
        { label: "Le Nostre Farmacie", path: "/farmacie" },
        { label: "I Prodotti del Nostro Laboratorio", path: "/prodotti" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "primary.light", px: 2 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Logo più grande e centrato */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={logo}
                            alt="Farmacie Kairos"
                            style={{ height: "50px", width: "auto" }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navLinks.map((item) => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{ color: "white", fontSize: "1rem", fontWeight: 500 }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        onClick={handleToggle}
                        sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu - Si apre sotto la Navbar */}
            <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                <Box
                    sx={{
                        bgcolor: "primary.light",
                        color: "white",
                        textAlign: "center",
                        py: 3,
                        width: "100vw", // Copre tutta la larghezza senza spazi bianchi
                        position: "fixed", // Assicura che rimanga visibile durante lo scroll
                        top: 64, // Altezza della navbar
                        left: 0,
                        height: "100vh", // Copre tutta l'altezza dello schermo
                        overflowY: "auto", // Permette di scrollare se necessario
                        zIndex: 10,
                    }}
                >
                    <List>
                        {navLinks.map((item) => (
                            <ListItem
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    justifyContent: "center",
                                    py: 1,
                                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                                }}
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary={item.label} sx={{ fontSize: "1.2rem", color: "white", textAlign: "center" }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Collapse>
        </>
    );
};

export default Navbar;
