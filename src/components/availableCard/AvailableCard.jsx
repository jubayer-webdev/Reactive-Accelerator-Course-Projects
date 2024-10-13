import BathroomSVG from "../SVG/available/BathroomSVG";
import BedroomSVG from "../SVG/available/BedroomSVG";

const AvailableCard = ({
    propertyImg,
    propertyName = "",
    price = 0,
    numBedrooms = 0,
    numBathrooms = 0,
}) => {
    return (
        <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            {propertyImg}

            <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                    {/* Modern Design villa */}
                    {propertyName}
                </h4>
                {/* 2 beds &bull; 2 baths */}
                <div className="mt-2">
                    <span className="text-xl font-extrabold text-blue-600">
                        {/* $3000.00 */}
                        {price}
                    </span>{" "}
                    /M
                </div>
            </div>

            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                    <BedroomSVG />
                    <p>
                        <span className="font-bold text-gray-900">
                            {numBedrooms}
                        </span>{" "}
                        Bedrooms
                    </p>
                </div>
                <div className="flex items-center">
                    <BathroomSVG />
                    <p>
                        <span className="font-bold text-gray-900">
                            {numBathrooms}
                        </span>{" "}
                        Bathrooms
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AvailableCard;
