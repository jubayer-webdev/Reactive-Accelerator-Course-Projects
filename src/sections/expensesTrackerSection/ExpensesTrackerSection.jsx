import ExpensesTrackerForm from "./formSumbmission/ExpensesTrackerForm";

const ExpensesTrackerSection = () => {
    return (
        // <!-- Submission Form -->
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
                Expense Tracker
            </h2>

            <ExpensesTrackerForm />
        </div>
    );
};

export default ExpensesTrackerSection;
