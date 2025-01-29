import { AppBar, Toolbar, Button, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "@assets/kairosFarmacie.jpg"

const Header = () => {

    return (
        <AppBar position="static" className="bg-primary">
            <Toolbar className="flex justify-between">
                <img src={logo} alt="Farmacie Marzoli" className="h-10" />

                <Box className="flex gap-4">
                    <Button startIcon={<EmailIcon />} className="text-white">
                        info@farmaciakairos.it
                    </Button>
                    <Button startIcon={<PhoneIcon />} className="text-white">
                        06 87133919
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;