import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <div className="-mx-4 flex flex-wrap items-center">
            <HeroContent />

            <HeroImage />
        </div>
    );
};

export default Hero;
