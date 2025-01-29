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
        { label: "Chi siamo", path: "/chi-siamo" },
        { label: "I nostri marchi", path: "/marchi" },
        { label: "Le nostre farmacie", path: "/farmacie" },
        { label: "I prodotti del nostro laboratorio", path: "/prodotti" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "primary.main", px: 2 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Logo più grande */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                            sx={{
                                bgcolor: "white",
                                borderRadius: "50%",
                                p: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: { xs: 80, md: 100 }, // Maggiore dimensione
                                width: { xs: 80, md: 100 },
                            }}
                        >
                            <img
                                src={logo}
                                alt="Farmacie Kairos"
                                style={{ maxHeight: "100%", maxWidth: "100%" }}
                            />
                        </Box>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
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
                        bgcolor: "primary.main",
                        color: "white",
                        textAlign: "center",
                        py: 3,
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
                                <ListItemText primary={item.label} sx={{ fontSize: "1.2rem", color: "white" }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Collapse>
        </>
    );
};

export default Navbar;