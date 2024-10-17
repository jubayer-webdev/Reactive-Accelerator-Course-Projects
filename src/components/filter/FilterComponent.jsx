import { useState } from "react";
import PropTypes from "prop-types";
import FilterIcon from "../svg/FilterIcon";
import FilterModal from "../modals/FilterModal";

const FilterComponent = ({
    isOpenFilterModal,
    toggleFilterModal,
    filterCategory,
    //
    allData,
    setAllData,
}) => {
    const [checkedState, setCheckedState] = useState({});

    return (
        // <!-- Filtering -->
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="filter-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleFilterModal}
                >
                    <FilterIcon />
                </button>
            </div>

            {isOpenFilterModal && (
                <FilterModal
                    filterCategory={filterCategory}
                    allData={allData}
                    setAllData={setAllData}
                    //
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                />
            )}
        </div>
    );
};

FilterComponent.propTypes = {
    isOpenFilterModal: PropTypes.bool.isRequired,
    toggleFilterModal: PropTypes.func.isRequired,
    filterCategory: PropTypes.array.isRequired,
    //
    allData: PropTypes.object.isRequired,
    setAllData: PropTypes.func.isRequired,
};

export default FilterComponent;
