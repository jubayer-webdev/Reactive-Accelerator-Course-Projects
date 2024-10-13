import AboutUs from "./AboutUs";
import FeaturesFooter from "./FeaturesFooter";
import LatestBlog from "./LatestBlog";
import LWS from "./lws";

const FooterSection = () => {
    return (
        // <!-- ====== Footer Section Start -->
        <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <LWS />
                    <AboutUs />
                    <FeaturesFooter />
                    <LatestBlog />
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
