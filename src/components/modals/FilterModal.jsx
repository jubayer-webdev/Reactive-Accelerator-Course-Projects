import PropTypes from "prop-types";

const FilterModal = ({
    filterCategory,
    allData,
    setAllData,
    //
    checkedState,
    setCheckedState,
}) => {
    const handleChangeFilter = (e) => {
        const { value, checked } = e.target;

        // Update checked state
        const updatedCheckedState = {
            ...checkedState,
            [value]: checked,
        };
        setCheckedState(updatedCheckedState);

        //! filter section
        const checkedValues = Object.keys(updatedCheckedState).filter(
            (key) => updatedCheckedState[key]
        );

        // if nothing match, will show all the data
        if (checkedValues.length === 0) {
            setAllData((prev) => ({
                ...prev,
                all: [...prev.store],
            }));
            return;
        }

        const filtered = allData?.store?.filter((item) => {
            // console.log(
            //     `Comparing item category: ${item.category} with checkedValues:`,
            //     checkedValues
            // );
            return checkedValues.includes(item.category);
        });

        setAllData((prev) => ({
            ...prev,
            all: filtered,
        }));
    };

    return (
        <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
        >
            <div className="py-1" role="none">
                {filterCategory?.map((item) => (
                    <label
                        key={item?.id}
                        className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
                    >
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                            // id="filter-option-1"
                            id={item?.id}
                            value={item?.value}
                            checked={checkedState[item?.value] || false}
                            onChange={handleChangeFilter}
                        />
                        <span className="ml-2">{item?.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

FilterModal.propTypes = {
    filterCategory: PropTypes.array.isRequired,
    allData: PropTypes.object.isRequired,
    setAllData: PropTypes.func.isRequired,
    //
    checkedState: PropTypes.object.isRequired,
    setCheckedState: PropTypes.func.isRequired,
};

export default FilterModal;
