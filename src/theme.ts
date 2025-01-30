import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0B3C78", // Colore blu scuro personalizzato
            light: "#4374affa"
        },
        secondary: {
            main: "#DEE8F5",
        },
    },
    typography: {
        fontFamily: `"Poppins", sans-serif`,
    },
});

export default theme;