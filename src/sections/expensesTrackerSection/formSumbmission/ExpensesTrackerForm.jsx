import Input from "../../../components/shared/Input";
import Label from "../../../components/shared/Label";
import SelectInput from "../../../components/shared/SelectInput";

const ExpensesTrackerForm = () => {
    const selectExpenseOption = [
        { id: crypto.randomUUID(), label: "Education" },
        { id: crypto.randomUUID(), label: "Food" },
        { id: crypto.randomUUID(), label: "Health" },
        { id: crypto.randomUUID(), label: "Bill" },
        { id: crypto.randomUUID(), label: "Insurance" },
        { id: crypto.randomUUID(), label: "Tax" },
        { id: crypto.randomUUID(), label: "Transport" },
        { id: crypto.randomUUID(), label: "Telephone" },
    ];

    return (
        <form>
            <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 active">
                    Expense
                </div>
                <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                    Income
                </div>
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
                    >
                        {selectExpenseOption?.map((item) => (
                            <option key={item?.id}>{item?.label}</option>
                        ))}
                    </SelectInput>
                </div>
            </div>

            <div className="mt-3">
                <Label htmlFor="amount">Amount</Label>
                <div className="mt-2">
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        autoComplete="off"
                        placeholder="12931"
                    />
                </div>
            </div>

            <div className="mt-3">
                <Label htmlFor="date">Date</Label>
                <div className="mt-2">
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="off"
                        placeholder="12931"
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

export default ExpensesTrackerForm;
