import BrandLogo from "./BrandLogo";
import Navigation from "./Navigation";
import SignUp from "./SignUp";

const Navbar = () => {
    return (
        <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
                <BrandLogo />

                <Navigation />

                <SignUp />
            </div>
        </div>
    );
};

export default Navbar;
