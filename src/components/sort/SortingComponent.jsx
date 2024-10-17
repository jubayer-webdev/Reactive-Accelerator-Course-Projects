import PropTypes from "prop-types";
import SortingIcon from "../svg/SortingIcon";
import SortModal from "../modals/SortModal";

const SortingComponent = ({
    isOpenSortModal,
    toggleSortModal,
    //
    allData,
    setAllData,
}) => {
    return (
        // <!-- Sorting -->
        <div className="mr-1 relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleSortModal}
                >
                    <SortingIcon />
                </button>
            </div>

            {isOpenSortModal && (
                <SortModal allData={allData} setAllData={setAllData} />
            )}
        </div>
    );
};

SortingComponent.propTypes = {
    isOpenSortModal: PropTypes.bool.isRequired,
    toggleSortModal: PropTypes.func.isRequired,
    //
    allData: PropTypes.object.isRequired,
    setAllData: PropTypes.func.isRequired,
};

export default SortingComponent;
