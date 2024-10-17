import PropTypes from "prop-types";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../incomeSection/IncomeSection";
import BalanceCalculation from "./balance/BalanceCalculation";

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
}) => {
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
    allIncomeData: PropTypes.object.isRequired,
    //
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
    //
    setIsIncomeClicked: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
};

export default BalanceSection;
