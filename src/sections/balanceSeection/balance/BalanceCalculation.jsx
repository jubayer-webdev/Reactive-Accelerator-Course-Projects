import BalanceCard from "./BalanceCard";

const BalanceCalculation = () => {
    const balanceItems = [
        { id: crypto.randomUUID(), label: "Balance" },
        { id: crypto.randomUUID(), label: "Total Income" },
        { id: crypto.randomUUID(), label: "Total Expense" },
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    {balanceItems?.map((item) => (
                        <BalanceCard key={item?.id} title={item?.label} />
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default BalanceCalculation;
