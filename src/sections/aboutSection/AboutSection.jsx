import About from "./about/About";

const AboutSection = () => {
    return (
        // <!-- ====== About Section Start -->
        <section
            id="about"
            className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
        >
            <div className="container">
                <About />
            </div>
        </section>
        // <!-- ====== About Section End -->
    );
};

export default AboutSection;
