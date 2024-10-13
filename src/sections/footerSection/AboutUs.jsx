const AboutUs = () => {
    return (
        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                    About Us
                </h4>
                <ul>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                        >
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
