import PropTypes from "prop-types";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../incomeSection/IncomeSection";
import BalanceCalculation from "./balance/BalanceCalculation";

const BalanceSection = ({
    setFormData,
    setIsForEdit,
    //
    allExpenseData,
    allIncomeData,
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
                    // 
                    setIsIncomeClicked={setIsIncomeClicked}
                    setSelectedCategory={setSelectedCategory}
                />
                <ExpenseSection
                    setFormData={setFormData}
                    setIsForEdit={setIsForEdit}
                    // 
                    allExpenseData={allExpenseData}
                    // 
                    setIsIncomeClicked={setIsIncomeClicked}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
        </div>
    );
};

BalanceSection.propTypes = {
    allExpenseData: PropTypes.array.isRequired,
    allIncomeData: PropTypes.array.isRequired,
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
    setFormData: PropTypes.func.isRequired,
    setIsForEdit: PropTypes.func.isRequired,
    setIsIncomeClicked: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
};

export default BalanceSection;
