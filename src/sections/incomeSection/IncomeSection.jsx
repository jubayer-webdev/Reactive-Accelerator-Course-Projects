import { useState } from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../components/buttons/DeleteButton";
import EditButton from "../../components/buttons/EditButton";
import FilterComponent from "../../components/filter/FilterComponent";
import SortingComponent from "../../components/sort/SortingComponent";
import IncomeIcon from "../../components/svg/IncomeIcon";
import formatTheDate from "../../helper/formatTheDate";
import filterCategoryIncome from "../../data/filterCategoryIncome";
import categoryForIncome from "../../data/categoryForIncome";
import DeleteModal from "../../components/modals/DeleteModal";

// HomePage -> BalanceSection -> IncomeSection
const IncomeSection = ({
    setFormData,
    setIsForEdit,
    //
    allIncomeData,
    setAllIncomeData,
    //
    setIsIncomeClicked,
    setSelectedCategory,
    //
    clickedSortOrFilter,
    setClickedSortOrFilter,
    //
    showDeleteModal,
    setShowDeleteModal,
    handleDelete,
}) => {
    const [deleteIncomeItem, setDeleteIncomeItem] = useState(null);

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

                {/* <!-- Sorting and Filtering Column --> */}
                <div>
                    {/* <!-- Sorting --> */}
                    <SortingComponent
                        isOpenSortModal={
                            clickedSortOrFilter?.isClickedIncomeSort
                        }
                        toggleSortModal={() =>
                            setClickedSortOrFilter((prev) => ({
                                isClickedExpenseSort: false,
                                isClickedExpenseFilter: false,
                                isClickedIncomeSort: !prev.isClickedIncomeSort,
                                isClickedIncomeFilter: false,
                            }))
                        }
                        //
                        allData={allIncomeData}
                        setAllData={setAllIncomeData}
                    />

                    {/* <!-- Filtering --> */}
                    <FilterComponent
                        isOpenFilterModal={
                            clickedSortOrFilter?.isClickedIncomeFilter
                        }
                        toggleFilterModal={() =>
                            setClickedSortOrFilter((prev) => ({
                                isClickedExpenseSort: false,
                                isClickedExpenseFilter: false,
                                isClickedIncomeSort: false,
                                isClickedIncomeFilter:
                                    !prev.isClickedIncomeFilter,
                            }))
                        }
                        filterCategory={filterCategoryIncome}
                        //
                        allData={allIncomeData}
                        setAllData={setAllIncomeData}
                    />
                </div>
                {/* <!-- Sorting and Filtering Column Ends --> */}
            </div>

            <div className="p-4 divide-y">
                {/* <!-- Row --> */}
                {allIncomeData?.current?.length < 1 ? (
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800 animate-pulse">
                            Income List Empty.
                        </h3>
                    </div>
                ) : (
                    allIncomeData?.current?.map((income) => (
                        <div
                            key={income?.id}
                            className="flex justify-between items-center py-2 relative group cursor-pointer"
                        >
                            <div>
                                <h3 className="text-base font-medium leading-7 text-gray-600">
                                    {income?.category}
                                </h3>
                                <p className="text-xs text-gray-600">
                                    {formatTheDate(income?.date)}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                                    BDT {income?.amount}
                                </p>

                                {/* <!-- 3 Dots --> */}
                                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                                    <EditButton
                                        onClick={() => {
                                            setFormData(income);
                                            setIsForEdit(true);
                                            setIsIncomeClicked(true);
                                            setSelectedCategory(
                                                categoryForIncome
                                            );
                                        }}
                                    />

                                    <DeleteButton
                                        onClick={() => {
                                            setShowDeleteModal(() => ({
                                                showExpenseDeleteModal: false,
                                                showIncomeDeleteModal: true,
                                            }));
                                            setDeleteIncomeItem(income);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {/* //!Delete Modal */}
                {showDeleteModal?.showIncomeDeleteModal && (
                    <DeleteModal
                        closeDeleteModal={() =>
                            setShowDeleteModal(() => ({
                                showExpenseDeleteModal: false,
                                showIncomeDeleteModal: false,
                            }))
                        }
                        handleDelete={handleDelete}
                        deleteItem={deleteIncomeItem}
                        fromExpense={false}
                    />
                )}
            </div>
        </div>
    );
};

IncomeSection.propTypes = {
    setFormData: PropTypes.func.isRequired,
    setIsForEdit: PropTypes.func.isRequired,
    //
    allIncomeData: PropTypes.object.isRequired,
    setAllIncomeData: PropTypes.func.isRequired,
    //
    setIsIncomeClicked: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    //
    clickedSortOrFilter: PropTypes.object.isRequired,
    setClickedSortOrFilter: PropTypes.func.isRequired,
    //
    showDeleteModal: PropTypes.object.isRequired,
    setShowDeleteModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default IncomeSection;
