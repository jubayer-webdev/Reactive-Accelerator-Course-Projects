import PropTypes from "prop-types";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../incomeSection/IncomeSection";
import BalanceCalculation from "./balance/BalanceCalculation";

const BalanceSection = ({
    allExpenseData,
    allIncomeData,
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
                <IncomeSection allIncomeData={allIncomeData} />
                <ExpenseSection allExpenseData={allExpenseData} />
            </div>
        </div>
    );
};

BalanceSection.propTypes = {
    allExpenseData: PropTypes.array.isRequired,
    allIncomeData: PropTypes.array.isRequired,
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
};

export default BalanceSection;
