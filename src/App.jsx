import AvailableSection from "./sections/availableSection/AvailableSection";
import FeaturesSection from "./sections/featuresSection/FeaturesSection";
import HeroSection from "./sections/heroSection/HeroSection";
import NavbarSection from "./sections/navbarSection/NavbarSection";

function App() {
    return (
        <>
            <NavbarSection />
            <HeroSection />

            <FeaturesSection />

            <AvailableSection />
        </>
    );
}

export default App;
