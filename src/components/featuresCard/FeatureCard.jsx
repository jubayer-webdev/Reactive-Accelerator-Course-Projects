import PremiumSVG from "../SVG/features/PremiumSVG";

const FeatureCard = ({ heading = "", paragraph = "", svgComp = <></> }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                    {svgComp}
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {heading}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                    {paragraph}
                </p>
                <a
                    href="javascript:void(0)"
                    className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default FeatureCard;
