const HeroContent = () => {
    return (
        <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                    We&#39;ll build house of your dream
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                    We have 9000 more review and our customers trust on out
                    property and quality products.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                    <li>
                        <a
                            href="https://links.tailgrids.com/play-download"
                            className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                        >
                            Book Now
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/tailgrids/play-tailwind"
                            target="_blank"
                            className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeroContent;
