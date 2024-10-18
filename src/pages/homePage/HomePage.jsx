import { useState } from "react";
import BalanceSection from "../../sections/balanceSeection/BalanceSection";
import ExpensesTrackerSection from "../../sections/expensesTrackerSection/ExpensesTrackerSection";
import NavbarSection from "../../sections/navbarSection/NavbarSection";
import { categoryForExpense } from "../../data/categoryForExpense";
import { allIncome } from "../../data/allIncome";
import { allExpense } from "../../data/allExpense";

const HomePage = () => {
    const [allExpenseData, setAllExpenseData] = useState({
        current: allExpense,
        dataBase: allExpense,
        isClickedLowToHigh: null,
    });
    const [allIncomeData, setAllIncomeData] = useState({
        current: allIncome,
        dataBase: allIncome,
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
            const remainCurrentExpenses = allExpenseData?.current?.filter(
                (expense) => expense?.id !== deleteItem?.id
            );

            const remainDataBaseExpenses = allExpenseData?.dataBase?.filter(
                (expense) => expense?.id !== deleteItem?.id
            );

            setAllExpenseData((preAll) => ({
                ...preAll,
                current: remainCurrentExpenses,
                dataBase: remainDataBaseExpenses,
            }));
            setTotalExpense((prevTotal) => prevTotal - deleteItem?.amount);
        } else {
            const remainCurrentIncome = allIncomeData?.current?.filter(
                (income) => income?.id !== deleteItem?.id
            );

            const remainDataBaseIncome = allIncomeData?.dataBase?.filter(
                (income) => income?.id !== deleteItem?.id
            );

            setAllIncomeData((prevAll) => ({
                ...prevAll,
                current: remainCurrentIncome,
                dataBase: remainDataBaseIncome,
            }));
            setTotalIncome((prevTotal) => prevTotal - deleteItem?.amount);
        }
    };

    const updateDataAccordingSorting = (allData, setAllData, setTotalTaka) => {
        const updatedCurrentData = allData?.current?.map((data) => {
            if (data?.id === formData?.id) return formData;
            return data;
        });

        let totalTaka = 0;
        const updatedDatabaseData = allData?.dataBase?.map((data) => {
            if (data?.id === formData?.id) {
                totalTaka += parseFloat(formData?.amount);
                return formData;
            } else {
                totalTaka += parseFloat(data?.amount);
                return data;
            }
        });

        if (allData?.isClickedLowToHigh !== null) {
            const updateCurrent = allData?.isClickedLowToHigh
                ? updatedCurrentData.sort((a, b) => a?.amount - b?.amount)
                : updatedCurrentData.sort((a, b) => b?.amount - a?.amount);

            const updateStore = allData?.isClickedLowToHigh
                ? updatedDatabaseData.sort((a, b) => a?.amount - b?.amount)
                : updatedDatabaseData.sort((a, b) => b?.amount - a?.amount);

            setAllData((prevAllData) => ({
                ...prevAllData,
                current: updateCurrent,
                dataBase: updateStore,
            }));
        } else {
            setAllData((prevAllData) => ({
                ...prevAllData,
                current: updatedCurrentData,
                dataBase: updatedDatabaseData,
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
            const addedNewData = [...allData.current, formData];
            const sortedData = allData?.isClickedLowToHigh
                ? addedNewData.sort((a, b) => a?.amount - b?.amount)
                : addedNewData.sort((a, b) => b?.amount - a?.amount);

            setAllData((prevAllData) => ({
                ...prevAllData,
                current: sortedData,
                // dataBase: [...prevAllData.dataBase, formData],
                dataBase: sortedData,
            }));
        } else {
            setAllData((prevAllData) => ({
                ...prevAllData,
                current: [...prevAllData.current, formData],
                dataBase: [...prevAllData.dataBase, formData],
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
