import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "@assets/kairosFarmacie.jpg";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Chi siamo", path: "/chi-siamo" },
        { label: "Le nostre marche", path: "/marchi" },
        { label: "Le nostre farmacie", path: "/farmacie" },
        { label: "I prodotti del nostro lab", path: "/prodotti" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ flexGrow: 1, color: "white", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                        <img src={logo} alt="Farmacie Kairos" style={{ height: "100px", marginRight: "10px" }} />
                    </Typography>

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