import React from "react";
import ContactHeading from "../../../sections/contactSection/contact/ContactHeading";
import ContactCards from "../../../sections/contactSection/contact/ContactCards";

const Contact = () => {
    return (
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
                <ContactHeading />
                <ContactCards />
            </div>
        </div>
    );
};

export default Contact;
