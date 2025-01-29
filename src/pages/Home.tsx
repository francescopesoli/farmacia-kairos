import HeroSection from "@components/HeroSection";
import Brands from "@components/Brands";
import Farmacie from "@components/Farmacie";
import Laboratorio from "@components/Laboratorio";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Brands />
            <Farmacie />
            <Laboratorio />
        </>
    );
};

export default Home;