import IconAlert from "../SVG/FAQ/IconAlert";

const FAQCard = ({ heading = "", paragraph = "" }) => {
    return (
        <div className="mb-12 flex lg:mb-[70px]">
            <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <IconAlert />
            </div>
            <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research &amp; creation of your
                    monthly content ui/ux strategy that we do writing your first
                    blog post.
                </p>
            </div>
        </div>
    );
};

export default FAQCard;
