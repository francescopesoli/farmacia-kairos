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
import { Link as ScrollLink } from "react-scroll";
import logo from "@assets/logoKairos.svg";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { label: "Home", path: "home" },
        { label: "Chi Siamo", path: "chi-siamo" },
        { label: "Le nostre marche", path: "marchi" },
        { label: "Le nostre farmacie", path: "farmacie" },
        { label: "I Prodotti del Nostro Laboratorio", path: "prodotti" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "primary.light",width: "100vw",  // 🔥 Forza la larghezza a 100% della viewport
                left: 0,  }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "56px" }}>
                    {/* Logo cliccabile che usa ScrollLink */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={{ cursor: "pointer" }}>
                            <img
                                src={logo}
                                alt="Farmacie Kairos"
                                style={{ height: "35px", width: "auto" }}
                            />
                        </ScrollLink>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navLinks.map((item) => (
                            <Button
                                key={item.path}
                                component={ScrollLink}
                                to={item.path}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                sx={{ color: "white", fontSize: "1rem", fontWeight: 500, cursor: "pointer" }}
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
                        width: "100vw",  // 🔥 Assicura che occupi tutto lo schermo
                        maxWidth: "100%",  // 🔥 Impedisce overflow indesiderati
                        position: "fixed",
                        top: 56,
                        left: 0,
                        height: "100vh",
                        overflowY: "hidden",
                        zIndex: 10,
                    }}
                >
                    <List>
                        {navLinks.map((item) => (
                            <ListItem
                                key={item.path}
                                component={ScrollLink}
                                to={item.path}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                sx={{
                                    justifyContent: "center",
                                    py: 1,
                                    cursor: "pointer",
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
