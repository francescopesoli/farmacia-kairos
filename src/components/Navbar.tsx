import { useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "@assets/logoKairos.svg";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Chi siamo", path: "/chi-siamo" },
        { label: "I nostri marche", path: "/marchi" },
        { label: "Le nostre farmacie", path: "/farmacie" },
        { label: "I prodotti del nostro laboratorio", path: "/prodotti" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                    {/* Logo */}
                    <Box sx={{ flexGrow: 2, display: "flex", alignItems: "center" }}>
                        <Box sx={{ bgcolor: "white", borderRadius: "60%", p: 2 }}>
                            <img src={logo} alt="Farmacie Kairos" style={{ height: "80px" }} />
                        </Box>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navLinks.map((item) => (
                            <Button key={item.path} component={Link} to={item.path} sx={{ color: "white" }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" }, color: "white" }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
                    <List>
                        {navLinks.map((item) => (
                            <ListItem key={item.path} component={Link} to={item.path}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;