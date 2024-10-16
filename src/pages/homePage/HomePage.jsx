import { useState } from "react";
import BalanceSection from "../../sections/balanceSeection/BalanceSection";
import ExpensesTrackerSection from "../../sections/expensesTrackerSection/ExpensesTrackerSection";
import NavbarSection from "../../sections/navbarSection/NavbarSection";
import { categoryForExpense } from "../../data/categoryForExpense";

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
    
    const [isIncomeClicked, setIsIncomeClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] =
        useState(categoryForExpense);

    const [totalIncome, setTotalIncome] = useState(2000);
    const [totalExpense, setTotalExpense] = useState(3000);

    const [formData, setFormData] = useState({
        id: crypto.randomUUID(),
        category: "",
        amount: "",
        date: "",
    });
    const [isForEdit, setIsForEdit] = useState(false);

    // Function to update an existing expense
    const updateExistingExpense = () => {
        let totalExpense = 0;
        const updatedExpenses = allExpenseData?.map((expense) => {
            if (expense?.id === formData?.id) {
                totalExpense += parseFloat(formData?.amount);
                return formData;
            } else {
                totalExpense += parseFloat(expense?.amount);
                return expense;
            }
        });

        setAllExpenseData(updatedExpenses);
        setTotalExpense(totalExpense);
    };

    // Function to update an existing income
    const updateExistingIncome = () => {
        let totalIncome = 0;
        const updatedIncomes = allIncomeData?.map((income) => {
            if (income?.id === formData?.id) {
                totalIncome += parseFloat(formData?.amount);
                return formData;
            } else {
                totalIncome += parseFloat(income?.amount);
                return income;
            }
        });

        setAllIncomeData(updatedIncomes);
        setTotalIncome(totalIncome);
    };

    const handleSubmit = (e, isIncomeClicked = false) => {
        e.preventDefault();
        // console.log(formData, e);

        if (isIncomeClicked) {
            if (isForEdit) {
                updateExistingIncome();
            } else {
                setAllIncomeData((prevAllIncomeData) => [
                    ...prevAllIncomeData,
                    formData,
                ]);
                setTotalIncome(
                    (prevTotalIncome) =>
                        prevTotalIncome + parseFloat(formData?.amount)
                );
            }
        } else {
            if (isForEdit) {
                updateExistingExpense();
            } else {
                setAllExpenseData((prevAllExpenseData) => [
                    ...prevAllExpenseData,
                    formData,
                ]);
                setTotalExpense(
                    (prevTotalExpense) =>
                        prevTotalExpense + parseFloat(formData?.amount)
                );
            }
        }

        setFormData({
            id: crypto.randomUUID(),
            category: "",
            amount: "",
            date: "",
        });
        setIsForEdit(false);
    };

    return (
        <>
            <NavbarSection />

            <main className="relative mx-auto mt-10 w-full max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Submission Form --> */}
                    <ExpensesTrackerSection
                        // form
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        //
                        isIncomeClicked={isIncomeClicked}
                        setIsIncomeClicked={setIsIncomeClicked}
                        // 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    {/* <!-- Right Column --> */}
                    <BalanceSection
                        // form
                        setFormData={setFormData}
                        setIsForEdit={setIsForEdit}
                        //
                        allExpenseData={allExpenseData}
                        allIncomeData={allIncomeData}
                        // 
                        setIsIncomeClicked={setIsIncomeClicked}
                        setSelectedCategory={setSelectedCategory}
                        // balance
                        totalIncome={totalIncome}
                        totalExpense={totalExpense}
                    />
                </section>
            </main>
        </>
    );
};

export default HomePage;
