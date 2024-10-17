import { useState } from "react";
import BalanceSection from "../../sections/balanceSeection/BalanceSection";
import ExpensesTrackerSection from "../../sections/expensesTrackerSection/ExpensesTrackerSection";
import NavbarSection from "../../sections/navbarSection/NavbarSection";
import { categoryForExpense } from "../../data/categoryForExpense";
import { allIncome } from "../../data/allIncome";
import { allExpense } from "../../data/allExpense";

const HomePage = () => {
    const [allExpenseData, setAllExpenseData] = useState({
        all: allExpense,
        store: allExpense,
    });
    const [allIncomeData, setAllIncomeData] = useState({
        all: allIncome,
        store: allIncome,
    });

    const [isIncomeClicked, setIsIncomeClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] =
        useState(categoryForExpense);

    const [totalIncome, setTotalIncome] = useState(70000);
    const [totalExpense, setTotalExpense] = useState(80000);

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
        const updatedExpenses = allExpenseData?.all?.map((expense) => {
            if (expense?.id === formData?.id) {
                totalExpense += parseFloat(formData?.amount);
                return formData;
            } else {
                totalExpense += parseFloat(expense?.amount);
                return expense;
            }
        });

        setAllExpenseData({ all: updatedExpenses, store: updatedExpenses });
        setTotalExpense(totalExpense);
    };

    // Function to update an existing income
    const updateExistingIncome = () => {
        let totalIncome = 0;
        const updatedIncomes = allIncomeData?.all?.map((income) => {
            if (income?.id === formData?.id) {
                totalIncome += parseFloat(formData?.amount);
                return formData;
            } else {
                totalIncome += parseFloat(income?.amount);
                return income;
            }
        });
        // console.log("🚀 ~ updatedIncomes ~ updatedIncomes:", updatedIncomes);

        setAllIncomeData({
            all: updatedIncomes,
            store: updatedIncomes,
        });
        setTotalIncome(totalIncome);
    };

    // Function to delete a item
    const handleDelete = ({ deleteItem = null, fromExpense = false } = {}) => {
        if (fromExpense) {
            const remainExpenses = allExpenseData?.all?.filter(
                (expense) => expense?.id !== deleteItem?.id
            );
            setAllExpenseData({ all: remainExpenses, store: remainExpenses });
            setTotalExpense((prevTotal) => prevTotal - deleteItem?.amount);
        } else {
            const remainIncome = allIncomeData?.all?.filter(
                (income) => income?.id !== deleteItem?.id
            );
            setAllIncomeData({ all: remainIncome, store: remainIncome });
            setTotalIncome((prevTotal) => prevTotal - deleteItem?.amount);
        }
    };

    const handleSubmit = (e, isIncomeClicked = false) => {
        e.preventDefault();
        // console.log(formData, e);

        if (isIncomeClicked) {
            if (isForEdit) {
                updateExistingIncome();
            } else {
                setAllIncomeData((prevIncome) => ({
                    ...prevIncome,
                    all: [...prevIncome.all, formData],
                    store: [...prevIncome.store, formData],
                }));
                setTotalIncome(
                    (prevTotalIncome) =>
                        prevTotalIncome + parseFloat(formData?.amount)
                );
            }
        } else {
            if (isForEdit) {
                updateExistingExpense();
            } else {
                setAllExpenseData((prevExpense) => ({
                    ...prevExpense,
                    all: [...prevExpense.all, formData],
                    store: [...prevExpense.store, formData],
                }));
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
                        setAllExpenseData={setAllExpenseData}
                        allIncomeData={allIncomeData}
                        setAllIncomeData={setAllIncomeData}
                        //
                        setIsIncomeClicked={setIsIncomeClicked}
                        setSelectedCategory={setSelectedCategory}
                        // balance
                        totalIncome={totalIncome}
                        totalExpense={totalExpense}
                        //
                        handleDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
};

export default HomePage;
