import ProjectContainer from "./ProjectContainer";
import SearchBar from "./Searchbar";
import Sidebar from "./Sidebar";

const ProjectManagerPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <main className="flex-1 overflow-y-auto overflow-x-hidden">
                <SearchBar />

                <ProjectContainer />
            </main>
        </div>
    );
};

export default ProjectManagerPage;
