import PropTypes from "prop-types";
import Input from "../../../components/shared/Input";
import Label from "../../../components/shared/Label";
import SelectInput from "../../../components/shared/SelectInput";
import { categoryForExpense } from "../../../data/categoryForExpense";
import categoryForIncome from "../../../data/categoryForIncome";

const ExpensesTrackerForm = ({
    formData,
    setFormData,
    handleSubmit,
    //
    isIncomeClicked,
    setIsIncomeClicked,
    //
    selectedCategory,
    setSelectedCategory,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFromData) => ({ ...prevFromData, [name]: value }));
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, isIncomeClicked)}>
            <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                <button
                    className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                        !isIncomeClicked ? "active" : ""
                    }`}
                    onClick={() => {
                        setIsIncomeClicked(false);
                        // console.log("Expense clicked");
                        setFormData({
                            id: crypto.randomUUID(),
                            category: "",
                            amount: "",
                            date: "",
                        });
                        setSelectedCategory(categoryForExpense);
                    }}
                    disabled={!isIncomeClicked}
                >
                    Expense
                </button>
                
                <button
                    className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                        isIncomeClicked ? "active" : ""
                    }`}
                    onClick={() => {
                        setIsIncomeClicked(true);
                        setFormData({
                            id: crypto.randomUUID(),
                            category: "",
                            amount: "",
                            date: "",
                        });
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
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    // 
    isIncomeClicked: PropTypes.bool.isRequired,
    setIsIncomeClicked: PropTypes.func.isRequired,
    // 
    selectedCategory: PropTypes.array.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
};

export default ExpensesTrackerForm;
