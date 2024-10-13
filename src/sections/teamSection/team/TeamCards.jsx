import TeamCard from "../../../components/teamCard/TeamCard";

const TeamCards = () => {
    const teamMembers = [
        {
            id: 1,
            imagePath: "/assets/images/team/team-01.png",
            memberName: "Melissa Tatcher",
            expertIn: "Marketing Expert",
        },
        {
            id: 2,
            imagePath:
                "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
            memberName: "Stuard Ferrel",
            expertIn: "Digital Marketer",
        },
        {
            id: 3,
            imagePath:
                "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
            memberName: "Eva Hudson",
            expertIn: "Creative Designer",
        },
        {
            id: 4,
            imagePath:
                "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
            memberName: "Jackie Sanders",
            expertIn: "Founder of Facebook",
        },
    ];

    return (
        <div className="-mx-4 flex flex-wrap justify-center">
            {teamMembers?.map((member) => (
                <TeamCard key={member?.id} {...member} />
            ))}
        </div>
    );
};

export default TeamCards;
