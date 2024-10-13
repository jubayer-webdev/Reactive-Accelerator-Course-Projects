import AvailableCard from "../../../components/availableCard/AvailableCard";

const AvailableCards = () => {
    const propertiesArray = [
        {
            id: 1,
            propertyImg: (
                <img src="/availablePhotos/modern.jpg" alt="property" />
            ),
            propertyName: "Modern Design Villa",
            price: 3000,
            numBedrooms: 3,
            numBathrooms: 2,
        },
        {
            id: 2,
            propertyImg: (
                <img src="/availablePhotos/luxury.jpg" alt="property" />
            ),
            propertyName: "Luxury Apartment",
            price: 4500,
            numBedrooms: 4,
            numBathrooms: 3,
        },
        {
            id: 3,
            propertyImg: (
                <img
                    src="/availablePhotos/seafront.jpg"
                    alt="property"
                />
            ),
            propertyName: "Seafront House",
            price: 5000,
            numBedrooms: 5,
            numBathrooms: 4,
        },
        {
            id: 4,
            propertyImg: (
                <img src="/availablePhotos/elegant.jpg" alt="property" />
            ),
            propertyName: "Elegant Modern Villa",
            price: 3500,
            numBedrooms: 4,
            numBathrooms: 3,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertiesArray?.map((property) => (
                <AvailableCard key={property.id} {...property} />
            ))}
        </div>
    );
};

export default AvailableCards;
