import AvailableCard from "../../../components/availableCard/AvailableCard";

const AvailableCards = () => {
    const propertiesArray = [
        {
            id: 1,
            propertyImg: (
                <img
                    src="https://plus.unsplash.com/premium_photo-1661950439212-558fa5cc82e0?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="property"
                />
            ),
            propertyName: "Modern Design Villa",
            price: 3000,
            numBedrooms: 3,
            numBathrooms: 2,
        },
        {
            id: 2,
            propertyImg: (
                <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt="property"
                />
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
                    src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <img
                    src="https://plus.unsplash.com/premium_photo-1685133855289-c03dbdf78fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="property"
                />
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
