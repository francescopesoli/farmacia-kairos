import { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);

    // Rileva lo scroll della pagina
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            {/* Navbar principale */}
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: mobileOpen ? "secondary.light" : scrolled ? "primary.light" : "secondary.light",
                    transition: "background-color 0.3s ease-in-out",
                    width: "100vw",
                    left: 0,
                    boxShadow: "none",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "56px" }}>
                    {/* Logo */}
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
                                sx={{
                                    color: mobileOpen ? "black" : scrolled ? "white" : "black",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    transition: "color 0.3s ease-in-out",
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        onClick={handleToggle}
                        sx={{ display: { xs: "flex", md: "none" }, color: scrolled ? "white" : "black" }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu - Si apre sotto la Navbar */}
            <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                <Box
                    sx={{
                        bgcolor: "secondary.light",
                        color: "black",
                        textAlign: "center",
                        py: 3,
                        width: "100vw",
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
                                    color: "black",
                                    "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
                                }}
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary={item.label} sx={{ fontSize: "1.2rem", textAlign: "center" }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Collapse>
        </>
    );
};

export default Navbar;