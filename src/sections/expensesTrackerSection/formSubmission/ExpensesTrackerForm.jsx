import { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/shared/Input";
import Label from "../../../components/shared/Label";
import SelectInput from "../../../components/shared/SelectInput";

const ExpensesTrackerForm = ({
    setAllExpenseData,
    setAllIncomeData,
    setTotalIncome,
    setTotalExpense,
}) => {
    const categoryForExpense = [
        { id: crypto.randomUUID(), label: "Select Category", value: "" },
        { id: crypto.randomUUID(), label: "Education", value: "Education" },
        { id: crypto.randomUUID(), label: "Food", value: "Food" },
        { id: crypto.randomUUID(), label: "Health", value: "Health" },
        { id: crypto.randomUUID(), label: "Bill", value: "Bill" },
        { id: crypto.randomUUID(), label: "Insurance", value: "Insurance" },
        { id: crypto.randomUUID(), label: "Tax", value: "Tax" },
        { id: crypto.randomUUID(), label: "Transport", value: "Transport" },
        { id: crypto.randomUUID(), label: "Telephone", value: "Telephone" },
    ];
    const categoryForIncome = [
        { id: crypto.randomUUID(), label: "Select Category", value: "" },
        { id: crypto.randomUUID(), label: "Salary", value: "Salary" },
        { id: crypto.randomUUID(), label: "Outsourcing", value: "Outsourcing" },
        { id: crypto.randomUUID(), label: "Bond", value: "Bond" },
        { id: crypto.randomUUID(), label: "Dividend", value: "Dividend" },
    ];

    const [isExpenseClicked, setIsExpenseClicked] = useState(true);
    const [isIncomeClicked, setIsIncomeClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] =
        useState(categoryForExpense);

    const [formData, setFormData] = useState({
        id: crypto.randomUUID(),
        category: "",
        amount: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFromData) => ({ ...prevFromData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (isExpenseClicked) {
            setAllExpenseData((prevAllExpenseData) => [
                ...prevAllExpenseData,
                formData,
            ]);
            setTotalExpense(
                (prevTotalExpense) =>
                    prevTotalExpense + parseFloat(formData?.amount)
            );
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

        setFormData({
            id: crypto.randomUUID(),
            category: "",
            amount: "",
            date: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                <button
                    className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                        isExpenseClicked ? "active" : ""
                    }`}
                    onClick={() => {
                        setIsExpenseClicked(true);
                        setIsIncomeClicked(false);
                        // console.log("Expense clicked");
                        setSelectedCategory(categoryForExpense);
                    }}
                    disabled={isExpenseClicked}
                >
                    Expense
                </button>
                <button
                    className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                        isIncomeClicked ? "active" : ""
                    }`}
                    onClick={() => {
                        setIsExpenseClicked(false);
                        setIsIncomeClicked(true);
                        setSelectedCategory(categoryForIncome);
                    }}
                    disabled={isIncomeClicked}
                >
                    Income
                </button>
            </div>

            {/* <!-- Note --> */}
            {/* <!-- Income Categories - Salary, Outsourcing, Bond, Dividend --> */}
            <div className="mt-3">
                <Label htmlFor="category">Category</Label>
                <div className="mt-2">
                    <SelectInput
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        value={formData?.category}
                        onChange={handleChange}
                        required
                    >
                        {selectedCategory?.map((item) => (
                            <option key={item?.id} value={item?.value}>
                                {item?.label}
                            </option>
                        ))}
                    </SelectInput>
                </div>
            </div>

            {/* Amount */}
            <div className="mt-3">
                <Label htmlFor="amount">Amount</Label>
                <div className="mt-2">
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        // autoComplete="off"
                        placeholder="12931"
                        value={formData?.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* Date */}
            <div className="mt-3">
                <Label htmlFor="date">Date</Label>
                <div className="mt-2">
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="off"
                        placeholder="12931"
                        value={formData?.date}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
            >
                Save
            </button>
        </form>
    );
};

ExpensesTrackerForm.propTypes = {
    setAllExpenseData: PropTypes.func.isRequired,
    setAllIncomeData: PropTypes.func.isRequired,
    setTotalIncome: PropTypes.func.isRequired,
    setTotalExpense: PropTypes.func.isRequired,
};

export default ExpensesTrackerForm;
