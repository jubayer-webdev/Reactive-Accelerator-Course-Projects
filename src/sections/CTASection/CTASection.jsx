import React from "react";
import CTAContent from "./CTA/CTAContent";
import CTAsvg from "./CTA/CTAsvg";

const CTASection = () => {
    return (
        // <!-- ====== CTA Section Start -->
        <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
            <CTAContent />
            <CTAsvg />
        </section>
        // <!-- ====== CTA Section End -->
    );
};

export default CTASection;
