import { useState } from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../components/buttons/DeleteButton";
import EditButton from "../../components/buttons/EditButton";
import FilterComponent from "../../components/filter/FilterComponent";
import SortingComponent from "../../components/sort/SortingComponent";
import IncomeIcon from "../../components/svg/IncomeIcon";
import formatTheDate from "../../healper/formatTheDate";

const IncomeSection = ({ allIncomeData }) => {
    const filterCategory = [
        {
            id: crypto.randomUUID(),
            label: "Salary",
        },
        {
            id: crypto.randomUUID(),
            label: "Outsourcing",
        },
        {
            id: crypto.randomUUID(),
            label: "Bond",
        },
        {
            id: crypto.randomUUID(),
            label: "Dividend",
        },
    ];

    const [clickedSortOrFilter, setClickedSortOrFilter] = useState({
        isClickedSort: false,
        isClickedFilter: false,
    });

    return (
        // <!-- Income -->
        <div className="border rounded-md relative">
            {/* <!-- Header --> */}
            <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                <div className="flex items-center gap-2">
                    {/* <!-- Icon --> */}
                    <IncomeIcon />
                    {/* <!-- Text --> */}
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800">
                            Income
                        </h3>
                    </div>
                </div>

                <div>
                    {/* <!-- Sorting --> */}
                    <SortingComponent
                        clickedSortOrFilter={clickedSortOrFilter}
                        setClickedSortOrFilter={setClickedSortOrFilter}
                    />

                    {/* <!-- Filtering --> */}
                    <FilterComponent
                        clickedSortOrFilter={clickedSortOrFilter}
                        setClickedSortOrFilter={setClickedSortOrFilter}
                        filterCategory={filterCategory}
                    />
                </div>
            </div>

            <div className="p-4 divide-y">
                {/* <!-- Row --> */}
                {allIncomeData?.map((item) => (
                    <div
                        key={item?.id}
                        className="flex justify-between items-center py-2 relative group cursor-pointer"
                    >
                        <div>
                            <h3 className="text-base font-medium leading-7 text-gray-600">
                                {item?.category}
                            </h3>
                            <p className="text-xs text-gray-600">
                                {formatTheDate(item?.date)}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                                BDT {item?.amount}
                            </p>

                            {/* <!-- 3 Dots --> */}
                            <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                                <EditButton />

                                <DeleteButton />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

IncomeSection.propTypes = {
    allIncomeData: PropTypes.array.isRequired,
};

export default IncomeSection;
