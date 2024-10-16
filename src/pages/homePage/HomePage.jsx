import BalanceSection from "../../sections/balanceSeection/BalanceSection";
import ExpensesTrackerSection from "../../sections/expensesTrackerSection/ExpensesTrackerSection";
import NavbarSection from "../../sections/navbarSection/NavbarSection";

const HomePage = () => {
    return (
        <>
            <NavbarSection />

            <main className="relative mx-auto mt-10 w-full max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Submission Form --> */}
                    <ExpensesTrackerSection />

                    {/* <!-- Right Column --> */}
                    <BalanceSection />
                </section>
            </main>
        </>
    );
};

export default HomePage;
