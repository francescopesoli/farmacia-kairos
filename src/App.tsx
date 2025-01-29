import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

// Pagine
import Home from "@pages/Home";
import ChiSiamo from "@pages/ChiSiamo";
import Marchi from "@pages/Marchi";
import Farmacie from "@pages/Farmacie";
import ProdottiLab from "@pages/ProdottiLab";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/chi-siamo" element={<ChiSiamo />} />
                        <Route path="/marchi" element={<Marchi />} />
                        <Route path="/farmacie" element={<Farmacie />} />
                        <Route path="/prodotti" element={<ProdottiLab />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;