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
        isClickedLowToHigh: null,
    });
    const [allIncomeData, setAllIncomeData] = useState({
        all: allIncome,
        store: allIncome,
        isClickedLowToHigh: null,
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

    const updateDataAccordingSorting = (allData, setAllData, setTotalTaka) => {
        const updatedAllData = allData?.all?.map((data) => {
            if (data?.id === formData?.id) return formData;
            return data;
        });

        let totalTaka = 0;
        const updatedStoreData = allData?.store?.map((data) => {
            if (data?.id === formData?.id) {
                totalTaka += parseFloat(formData?.amount);
                return formData;
            } else {
                totalTaka += parseFloat(data?.amount);
                return data;
            }
        });

        if (allData?.isClickedLowToHigh !== null) {
            const update = allData?.isClickedLowToHigh
                ? updatedAllData.sort((a, b) => a?.amount - b?.amount)
                : updatedAllData.sort((a, b) => b?.amount - a?.amount);

            setAllData((prevAllData) => ({
                ...prevAllData,
                all: update,
                store: updatedStoreData,
            }));
        } else {
            setAllData((prevAllData) => ({
                ...prevAllData,
                all: updatedAllData,
                store: updatedStoreData,
            }));
        }

        setTotalTaka(totalTaka);
    };

    const addNewDataAccordingSorting = (allData, setAllData, setTotalTaka) => {
        /**
         * There can be three case
         * 1) lowToHigh 2) highToLow 3) nothingSelected
         */

        if (allData?.isClickedLowToHigh !== null) {
            const addedNewData = [...allData.all, formData];
            const sortedData = allData?.isClickedLowToHigh
                ? addedNewData.sort((a, b) => a?.amount - b?.amount)
                : addedNewData.sort((a, b) => b?.amount - a?.amount);

            setAllData((prevAllData) => ({
                ...prevAllData,
                all: sortedData,
                store: [...prevAllData.store, formData],
            }));
        } else {
            setAllData((prevAllData) => ({
                ...prevAllData,
                all: [...prevAllData.all, formData],
                store: [...prevAllData.store, formData],
            }));
        }

        setTotalTaka(
            (prevTotalTaka) => prevTotalTaka + parseFloat(formData?.amount)
        );
    };

    // addedNewData or updateExistingData
    const handleSubmit = (e, isIncomeClicked = false) => {
        e.preventDefault();
        // console.log(formData, e);

        if (isIncomeClicked) {
            if (isForEdit) {
                updateDataAccordingSorting(
                    allIncomeData,
                    setAllIncomeData,
                    setTotalIncome
                );
            } else {
                addNewDataAccordingSorting(
                    allIncomeData,
                    setAllIncomeData,
                    setTotalIncome
                );
            }
        } else {
            if (isForEdit) {
                updateDataAccordingSorting(
                    allExpenseData,
                    setAllExpenseData,
                    setTotalExpense
                );
            } else {
                addNewDataAccordingSorting(
                    allExpenseData,
                    setAllExpenseData,
                    setTotalExpense
                );
            }
        }

        // reset data
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
