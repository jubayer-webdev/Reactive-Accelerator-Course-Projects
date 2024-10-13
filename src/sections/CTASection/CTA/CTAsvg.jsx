import DecorativeCirclesAndPath from "../../../components/SVG/CTA/DecorativeCirclesAndPath";
import DiagonalCirclesWithTrianglePath from "../../../components/SVG/CTA/DiagonalCirclesWithTrianglePath";

const CTAsvg = () => {
    return (
        <div>
            <span className="absolute left-0 top-0">
                <DecorativeCirclesAndPath />
            </span>
            <span className="absolute bottom-0 right-0">
                <DiagonalCirclesWithTrianglePath />
            </span>
        </div>
    );
};

export default CTAsvg;
