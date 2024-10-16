import { useState } from "react";
import BalanceSection from "../../sections/balanceSeection/BalanceSection";
import ExpensesTrackerSection from "../../sections/expensesTrackerSection/ExpensesTrackerSection";
import NavbarSection from "../../sections/navbarSection/NavbarSection";

const HomePage = () => {
    const [allExpenseData, setAllExpenseData] = useState([
        {
            id: crypto.randomUUID(),
            category: "Education",
            amount: "1000",
            date: "2024-10-16",
        },
        {
            id: crypto.randomUUID(),
            category: "Health",
            amount: "1000",
            date: "2024-10-25",
        },
        {
            id: crypto.randomUUID(),
            category: "Food",
            amount: "1000",
            date: "2024-10-16",
        },
    ]);
    const [allIncomeData, setAllIncomeData] = useState([
        {
            id: crypto.randomUUID(),
            category: "Outsourcing",
            amount: "1000",
            date: "2024-10-16",
        },
        {
            id: crypto.randomUUID(),
            category: "Salary",
            amount: "1000",
            date: "2024-08-31",
        },
    ]);

    return (
        <>
            <NavbarSection />

            <main className="relative mx-auto mt-10 w-full max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Submission Form --> */}
                    <ExpensesTrackerSection
                        allExpenseData={allExpenseData}
                        setAllExpenseData={setAllExpenseData}
                        allIncomeData={allIncomeData}
                        setAllIncomeData={setAllIncomeData}
                    />

                    {/* <!-- Right Column --> */}
                    <BalanceSection
                        allExpenseData={allExpenseData}
                        allIncomeData={allIncomeData}
                    />
                </section>
            </main>
        </>
    );
};

export default HomePage;
