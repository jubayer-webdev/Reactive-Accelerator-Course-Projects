import PropTypes from "prop-types";

const SortModal = ({ allData, setAllData }) => {
    const handleSort = ({ isLowToHigh = false } = {}) => {
        const sortedData = isLowToHigh
            ? [...allData?.all].sort((a, b) => a?.amount - b?.amount)
            : [...allData?.all].sort((a, b) => b?.amount - a?.amount);
        setAllData((prevData) => ({
            ...prevData,
            all: sortedData,
        }));
    };

    return (
        <div
            className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
        >
            <div className="py-1" role="none">
                <button
                    type="button"
                    // href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-all"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => handleSort({ isLowToHigh: true })}
                >
                    Low to High
                </button>

                <button
                    type="button"
                    // href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-all"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => handleSort()}
                >
                    High to Low
                </button>
            </div>
        </div>
    );
};

SortModal.propTypes = {
    allData: PropTypes.object.isRequired,
    setAllData: PropTypes.func.isRequired,
};

export default SortModal;
