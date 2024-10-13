import Navbar from "./navbar/Navbar";

const NavbarSection = () => {
    return (
        // <!-- ====== Navbar Section Start -->
        <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <Navbar />
            </div>
        </div>
        // <!-- ====== Navbar Section End -->
    );
};

export default NavbarSection;
