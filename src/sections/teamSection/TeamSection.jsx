import Team from "./team/Team";

const TeamSection = () => {
    return (
        // <!-- ====== Team Section Start -->
        <section
            id="team"
            className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
        >
            <Team />
        </section>
        // <!-- ====== Team Section End -->
    );
};

export default TeamSection;
