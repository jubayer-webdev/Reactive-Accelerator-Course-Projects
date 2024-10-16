import PropTypes from "prop-types";
import FilterIcon from "../svg/FilterIcon";
import FilterModal from "../modals/FilterModal";

const FilterComponent = ({
    clickedSortOrFilter,
    setClickedSortOrFilter,
    filterCategory,
}) => {
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
                    onClick={() =>
                        setClickedSortOrFilter({
                            isClickedSort: false,
                            isClickedFilter:
                                !clickedSortOrFilter?.isClickedFilter,
                        })
                    }
                >
                    <FilterIcon />
                </button>
            </div>

            {clickedSortOrFilter?.isClickedFilter && (
                <FilterModal filterCategory={filterCategory} />
            )}
        </div>
    );
};

FilterComponent.propTypes = {
    clickedSortOrFilter: PropTypes.object.isRequired,
    setClickedSortOrFilter: PropTypes.object.isRequired,
    filterCategory: PropTypes.array.isRequired,
};

export default FilterComponent;
