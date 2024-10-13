import Hero from "./hero/Hero";

const HeroSection = () => {
    return (
        // <!-- ====== Hero Section Start -->
        <div
            id="home"
            className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
        >
            <div className="container">
                <Hero />
            </div>
        </div>
        // <!-- ====== Hero Section End -->
    );
};

export default HeroSection;
