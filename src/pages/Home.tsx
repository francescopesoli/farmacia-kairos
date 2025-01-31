import HeroSection from "@components/HeroSection";
import Brands from "@components/Brands";
import Farmacie from "@components/Farmacie";
import Laboratorio from "@components/Laboratorio";
import ChiSiamo from "@components/ChiSiamo";

const Home = () => {
    return (
        <>
            <section id="home">
                <HeroSection />
            </section>

            <section id="chi-siamo">
                <ChiSiamo />
            </section>

            <section id="marchi">
                <Brands />
            </section>

            <section id="farmacie">
                <Farmacie />
            </section>

            <section id="prodotti">
                <Laboratorio />
            </section>
        </>
    );
};

export default Home;