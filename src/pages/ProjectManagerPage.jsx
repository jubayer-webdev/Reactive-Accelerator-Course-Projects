import SearchStringContextProvider from "../contexts/SearchStringContextProvider";
import ProjectContainer from "./ProjectContainer";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const ProjectManagerPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <SearchStringContextProvider>
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <SearchBar />

                    <ProjectContainer />
                </main>
            </SearchStringContextProvider>
        </div>
    );
};

export default ProjectManagerPage;
