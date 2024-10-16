import PropTypes from "prop-types";
import BalanceCard from "./BalanceCard";

const BalanceCalculation = ({ totalIncome, totalExpense }) => {
    const balanceItems = [
        {
            id: crypto.randomUUID(),
            label: "Balance",
            amount: totalIncome - totalExpense,
        },
        { id: crypto.randomUUID(), label: "Total Income", amount: totalIncome },
        {
            id: crypto.randomUUID(),
            label: "Total Expense",
            amount: totalExpense,
        },
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    {balanceItems?.map((item) => (
                        <BalanceCard
                            key={item?.id}
                            title={item?.label}
                            amount={item?.amount}
                        />
                    ))}
                </dl>
            </div>
        </div>
    );
};

BalanceCalculation.propTypes = {
    totalIncome: PropTypes.number.isRequired,
    totalExpense: PropTypes.number.isRequired,
};

export default BalanceCalculation;
