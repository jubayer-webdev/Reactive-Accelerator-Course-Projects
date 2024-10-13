import React from "react";
import FAQ from "./FAQ/FAQ";
import MultiDotIcon from "../../components/SVG/FAQ/MultiDotIcon";
import BlueDotIcon from "../../components/SVG/FAQ/BlueDotIcon";

const FAQSection = () => {
    return (
        // <!-- ====== FAQ Section Start -->
        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
            <FAQ />

            <div>
                <span className="absolute left-4 top-4 -z-[1]">
                    <MultiDotIcon />
                </span>
                <span className="absolute bottom-4 right-4 -z-[1]">
                    <BlueDotIcon />
                </span>
            </div>
        </section>
        // <!-- ====== FAQ Section End -->
    );
};

export default FAQSection;
