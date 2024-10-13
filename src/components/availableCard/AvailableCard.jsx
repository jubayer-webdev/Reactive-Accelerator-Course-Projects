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
        <div class="p-4 bg-white rounded-lg border border-gray-600/10">
            {propertyImg}

            <div class="p-6">
                <h4 class="text-2xl font-bold cursor-pointer">
                    {/* Modern Design villa */}
                    {propertyName}
                </h4>
                {/* 2 beds &bull; 2 baths */}
                <div class="mt-2">
                    <span class="text-xl font-extrabold text-blue-600">
                        {/* $3000.00 */}
                        {price}
                    </span>{" "}
                    /M
                </div>
            </div>

            <div class="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div class="flex items-center">
                    <BedroomSVG />
                    <p>
                        <span class="font-bold text-gray-900">
                            {numBedrooms}
                        </span>{" "}
                        Bedrooms
                    </p>
                </div>
                <div class="flex items-center">
                    <BathroomSVG />
                    <p>
                        <span class="font-bold text-gray-900">
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
