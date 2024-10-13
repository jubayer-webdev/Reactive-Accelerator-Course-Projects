const SignUp = () => {
    return (
        <div className="sm:flex">
            <a
                href="signin.html"
                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
            >
                Sign In
            </a>
            <a
                href="signup.html"
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
            >
                Sign Up
            </a>
        </div>
    );
};

export default SignUp;
