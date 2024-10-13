const Navigation = () => {
    return (
        <ul className="hidden lg:flex ">
            <li className="group relative">
                <a
                    href="#home"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                >
                    Home
                </a>
            </li>
            <li className="group relative">
                <a
                    href="#about"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                    About
                </a>
            </li>
            <li className="group relative">
                <a
                    href="#pricing"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                    Pricing
                </a>
            </li>

            <li className="group relative">
                <a
                    href="blog-grids.html"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                    Blog
                </a>
            </li>
        </ul>
    );
};

export default Navigation;
