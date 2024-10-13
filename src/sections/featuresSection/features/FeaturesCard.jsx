import FeatureCard from "../../../components/featuresCard/FeatureCard";
import ExpertSVG from "../../../components/SVG/features/ExpertSVG";
import PersonalizedSVG from "../../../components/SVG/features/PersonalizedSVG";
import PremiumSVG from "../../../components/SVG/features/PremiumSVG";
import VirtualSVG from "../../../components/SVG/features/VirtualSVG";

const FeaturesCard = () => {
    const propertyArray = [
        {
            id: 1,
            heading: "Premium Property Listings",
            paragraph:
                "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
            svgComp: <PremiumSVG />,
        },
        {
            id: 2,
            heading: "Personalized Property Matching",
            paragraph:
                "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
            svgComp: <PersonalizedSVG />,
        },
        {
            id: 3,
            heading: "Expert Guidance and Support",
            paragraph:
                "Benefit from the expertise of our dedicated team of real estate professionals.",
            svgComp: <ExpertSVG />,
        },
        {
            id: 4,
            heading: "Virtual Tours",
            paragraph:
                "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
            svgComp: <VirtualSVG />,
        },
    ];

    return (
        <div className="-mx-4 flex flex-wrap">
            {propertyArray?.map((property) => (
                <FeatureCard key={property.id} {...property} />
            ))}
        </div>
    );
};

export default FeaturesCard;
