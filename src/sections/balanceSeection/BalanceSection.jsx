import PropTypes from "prop-types";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../incomeSection/IncomeSection";
import BalanceCalculation from "./balance/BalanceCalculation";
import { useState } from "react";

// HomePage -> BalanceSection
const BalanceSection = ({
    setFormData,
    setIsForEdit,
    //
    allExpenseData,
    setAllExpenseData,
    allIncomeData,
    setAllIncomeData,
    //
    setIsIncomeClicked,
    setSelectedCategory,
    //
    totalIncome,
    totalExpense,
    //
    handleDelete,
}) => {
    const [clickedSortOrFilter, setClickedSortOrFilter] = useState({
        isClickedExpenseSort: false,
        isClickedExpenseFilter: false,
        isClickedIncomeSort: false,
        isClickedIncomeFilter: false,
    });

    const [showDeleteModal, setShowDeleteModal] = useState({
        showExpenseDeleteModal: false,
        showIncomeDeleteModal: false,
    });

    return (
        // <!-- Right Column -->
        <div className="lg:col-span-2">
            {/* <!-- Total Balance Stat--> */}
            <BalanceCalculation
                totalIncome={totalIncome}
                totalExpense={totalExpense}
            />

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                <IncomeSection
                    setFormData={setFormData}
                    setIsForEdit={setIsForEdit}
                    //
                    allIncomeData={allIncomeData}
                    setAllIncomeData={setAllIncomeData}
                    //
                    setIsIncomeClicked={setIsIncomeClicked}
                    setSelectedCategory={setSelectedCategory}
                    //
                    clickedSortOrFilter={clickedSortOrFilter}
                    setClickedSortOrFilter={setClickedSortOrFilter}
                    //
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    handleDelete={handleDelete}
                />
                <ExpenseSection
                    setFormData={setFormData}
                    setIsForEdit={setIsForEdit}
                    //
                    allExpenseData={allExpenseData}
                    setAllExpenseData={setAllExpenseData}
                    //
                    setIsIncomeClicked={setIsIncomeClicked}
                    setSelectedCategory={setSelectedCategory}
                    //
                    //
                    clickedSortOrFilter={clickedSortOrFilter}
                    setClickedSortOrFilter={setClickedSortOrFilter}
                    //
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
};

BalanceSection.propTypes = {
    setFormData: PropTypes.func.isRequired,
    setIsForEdit: PropTypes.func.isRequired,
    //
    allExpenseData: PropTypes.object.isRequired,
    setAllExpenseData: PropTypes.func.isRequired,
    allIncomeData: PropTypes.object.isRequired,
    setAllIncomeData: PropTypes.func.isRequired,
    //
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
    //
    setIsIncomeClicked: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    //
    handleDelete: PropTypes.func.isRequired,
};

export default BalanceSection;
