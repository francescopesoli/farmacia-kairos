import HeroSection from "@components/HeroSection";
import Brands from "@components/Brands";
import Farmacie from "@components/Farmacie";
import Laboratorio from "@components/Laboratorio";
import ChiSiamo from "@components/ChiSiamo";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ChiSiamo />
            <Brands />
            <Farmacie />
            <Laboratorio />
        </>
    );
};

export default Home;