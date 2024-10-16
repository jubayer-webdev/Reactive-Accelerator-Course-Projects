import { useState } from "react";
import SortingIcon from "../svg/SortingIcon";
import SortModal from "../modals/SortModal";

const SortingComponent = () => {
    const [isClickedSort, setIsClickedSort] = useState(false);

    return (
        // <!-- Sorting -->
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsClickedSort(!isClickedSort)}
                >
                    <SortingIcon />
                </button>
            </div>

            {isClickedSort && <SortModal />}
        </div>
    );
};

export default SortingComponent;
