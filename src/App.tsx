import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

// Pagine
import Home from "@pages/Home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;