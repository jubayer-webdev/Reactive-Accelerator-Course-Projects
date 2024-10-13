import AboutSection from "./sections/aboutSection/AboutSection";
import AvailableSection from "./sections/availableSection/AvailableSection";
import ContactSection from "./sections/contactSection/ContactSection";
import CTASection from "./sections/CTASection/CTASection";
import FAQSection from "./sections/FAQSection/FAQSection";
import FeaturesSection from "./sections/featuresSection/FeaturesSection";
import HeroSection from "./sections/heroSection/HeroSection";
import NavbarSection from "./sections/navbarSection/NavbarSection";
import TeamSection from "./sections/teamSection/TeamSection";

function App() {
    return (
        <>
            <NavbarSection />
            <HeroSection />

            <FeaturesSection />

            <AvailableSection />

            <AboutSection />
            <CTASection />
            <FAQSection />
            <TeamSection />
            <ContactSection />
        </>
    );
}

export default App;
