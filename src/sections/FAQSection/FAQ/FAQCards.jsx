import React from "react";
import IconAlert from "../../../components/SVG/FAQ/IconAlert";
import FAQCard from "../../../components/FAQCard/FAQCard";

const FAQCards = () => {
    return (
        <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
                <FAQCard />
                <FAQCard />
            </div>

            <div className="w-full px-4 lg:w-1/2">
                <FAQCard />
                <FAQCard />
            </div>
        </div>
    );
};

export default FAQCards;
