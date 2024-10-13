import HeroCircleSVG1 from "../../../components/SVG/hero/HeroCircleSVG1";
import HeroCircleSVG2 from "../../../components/SVG/hero/HeroCircleSVG2";

const HeroImage = () => {
    return (
        <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
                <div className="mt-16">
                    <img
                        src="/assets/images/hero/hero-image.png"
                        alt="hero"
                        className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                    <HeroCircleSVG1 />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                    <HeroCircleSVG2 />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;
