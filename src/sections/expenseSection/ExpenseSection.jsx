import { useState } from "react";
import PropTypesCheck from "prop-types";
import SortingComponent from "../../components/sort/SortingComponent";
import FilterComponent from "../../components/filter/FilterComponent";
import ExpenseIcon from "../../components/svg/ExpenseIcon";
import EditButton from "../../components/buttons/EditButton";
import DeleteButton from "../../components/buttons/DeleteButton";
import formatTheDate from "../../helper/formatTheDate";
import filterCategoryExpense from "../../data/filterCategoryExpense";
import { categoryForExpense } from "../../data/categoryForExpense";
import DeleteModal from "../../components/modals/DeleteModal";
import PropTypes from "prop-types";

const ExpenseSection = ({
    setFormData,
    setIsForEdit,
    //
    allExpenseData,
    setAllExpenseData,
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
    const [deleteExpenseItem, setDeleteExpenseItem] = useState(null);

    return (
        // <!-- Expense -->
        <div className="border rounded-md">
            {/* <!-- Header --> */}
            <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                <div className="flex items-center gap-2">
                    {/* <!-- Icon --> */}
                    <ExpenseIcon />
                    {/* <!-- Text --> */}
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800">
                            Expense
                        </h3>
                    </div>
                </div>

                {/* <!-- Sorting and Filtering Column --> */}
                <div>
                    {/* <!-- Sorting --> */}
                    <SortingComponent
                        isOpenSortModal={
                            clickedSortOrFilter?.isClickedExpenseSort
                        }
                        toggleSortModal={() =>
                            setClickedSortOrFilter((prev) => ({
                                isClickedExpenseSort:
                                    !prev.isClickedExpenseSort,
                                isClickedExpenseFilter: false,
                                isClickedIncomeSort: false,
                                isClickedIncomeFilter: false,
                            }))
                        }
                        //
                        allData={allExpenseData}
                        setAllData={setAllExpenseData}
                    />

                    {/* <!-- Filtering --> */}
                    <FilterComponent
                        isOpenFilterModal={
                            clickedSortOrFilter?.isClickedExpenseFilter
                        }
                        toggleFilterModal={() =>
                            setClickedSortOrFilter((prev) => ({
                                isClickedExpenseSort: false,
                                isClickedExpenseFilter:
                                    !prev.isClickedExpenseFilter,
                                isClickedIncomeSort: false,
                                isClickedIncomeFilter: false,
                            }))
                        }
                        filterCategory={filterCategoryExpense}
                        //
                        allData={allExpenseData}
                        setAllData={setAllExpenseData}
                    />
                </div>
                {/* <!-- Sorting and Filtering Column Ends --> */}
            </div>

            <div className="p-4 divide-y">
                {allExpenseData?.current?.length < 1 ? (
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800 animate-pulse">
                            Expense List Empty.
                        </h3>
                    </div>
                ) : (
                    allExpenseData?.current?.map((expense) => (
                        <div
                            key={expense?.id}
                            className="flex justify-between items-center py-2 relative group cursor-pointer"
                        >
                            <div>
                                <h3 className="text-base font-medium leading-7 text-gray-600">
                                    {expense?.category}
                                </h3>
                                <p className="text-xs text-gray-600">
                                    {formatTheDate(expense?.date)}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                                    BDT {expense?.amount}
                                </p>

                                {/* <!-- 3 Dots --> */}
                                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                                    <EditButton
                                        onClick={() => {
                                            setFormData(expense);
                                            setIsForEdit(true);
                                            setIsIncomeClicked(false);
                                            setSelectedCategory(
                                                categoryForExpense
                                            );
                                        }}
                                    />

                                    <DeleteButton
                                        onClick={() => {
                                            setShowDeleteModal(() => ({
                                                showExpenseDeleteModal: true,
                                                showIncomeDeleteModal: false,
                                            }));
                                            setDeleteExpenseItem(expense);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {/* //! Delete Modal */}
                {showDeleteModal?.showExpenseDeleteModal && (
                    <DeleteModal
                        closeDeleteModal={() =>
                            setShowDeleteModal(() => ({
                                showExpenseDeleteModal: false,
                                showIncomeDeleteModal: false,
                            }))
                        }
                        handleDelete={handleDelete}
                        deleteItem={deleteExpenseItem}
                        fromExpense
                    />
                )}
            </div>
        </div>
    );
};

ExpenseSection.propTypes = {
    setFormData: PropTypesCheck.func.isRequired,
    setIsForEdit: PropTypesCheck.func.isRequired,
    //
    allExpenseData: PropTypesCheck.object.isRequired,
    setAllExpenseData: PropTypes.func.isRequired,
    //
    setIsIncomeClicked: PropTypesCheck.func.isRequired,
    setSelectedCategory: PropTypesCheck.func.isRequired,
    //
    clickedSortOrFilter: PropTypes.object.isRequired,
    setClickedSortOrFilter: PropTypes.func.isRequired,
    //
    showDeleteModal: PropTypes.object.isRequired,
    setShowDeleteModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ExpenseSection;
