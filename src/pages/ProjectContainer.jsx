import { useContext, useState } from "react";
import getSeparateProjectList from "../utils/getSeparateProjectList";
import CreateTaskModal from "./CreateTaskModal";
import { ProjectList } from "./ProjectList";
import { allProjects } from "../data/initialAllProjects";
import { SearchStringContext } from "../contexts/SearchStringContextProvider";

const ProjectContainer = () => {
    const { searchString } = useContext(SearchStringContext);
    // const [allProjectList, setAllProjectList] = useState([]);
    const [allProjectList, setAllProjectList] = useState(allProjects);
    const [dataToUpdate, setDataToUpdate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleAddItem = (newData) => {
        setAllProjectList([...allProjectList, newData]);

        toggleTaskModal(null);
    };

    const handleDelete = (deleteId) => {
        const confirm = window.confirm("Are you sure to delete this item?");
        if (!confirm) return;

        const afterDelete = allProjectList.filter(
            (item) => item.id !== deleteId
        );
        setAllProjectList(afterDelete);
        setDataToUpdate(null);
    };

    const handleUpdate = (theUpdateItem) => {
        const updatedItems = allProjectList.map((project) => {
            if (project.id === theUpdateItem.id) return theUpdateItem;
            return project;
        });

        setAllProjectList(updatedItems);
        setDataToUpdate(null);
        toggleTaskModal(null);
    };

    const toggleTaskModal = (item = null) => {
        setShowModal(!showModal);
        setDataToUpdate(item);
    };

    let currentSearchResult = allProjectList;
    if (searchString) {
        // remove all tailing spaces
        const theSearchString = searchString.trim();
        currentSearchResult = allProjectList.filter((project) => {
            return project.taskName
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(theSearchString.toLowerCase().replace(/\s+/g, ""));
        });
    }

    // separate project list
    const { todoProjects, onProgressProjects, doneProjects, reviseProjects } =
        getSeparateProjectList(currentSearchResult);
    // calculate total
    // const { todoCount, onProgressCount, doneCount, revisedCount } =
    //     getSeparateTotalCount(allProjectList);

    return (
        <>
            {showModal && (
                <CreateTaskModal
                    handleAddItem={handleAddItem}
                    dataToUpdate={dataToUpdate}
                    handleUpdate={handleUpdate}
                    toggleTaskModal={toggleTaskModal}
                />
            )}

            <div className="mx-auto max-w-7xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Projectify</h2>
                    <div className="flex space-x-2">
                        <button
                            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                            onClick={() => toggleTaskModal(null)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                                <path d="M15 12h-6" />
                                <path d="M12 9v6" />
                            </svg>
                            Add
                        </button>
                    </div>
                </div>

                <div className="-mx-2 mb-6 flex flex-wrap">
                    {/* todo */}
                    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                        <ProjectList
                            type="todo"
                            listHeading="To-Do"
                            projectsData={todoProjects}
                            toggleTaskModal={toggleTaskModal}
                            handleDelete={handleDelete}
                        />
                    </div>

                    {/* <!-- On Progress --> */}
                    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                        <ProjectList
                            type="onProgress"
                            listHeading="On Progress"
                            projectsData={onProgressProjects}
                            toggleTaskModal={toggleTaskModal}
                            handleDelete={handleDelete}
                        />
                    </div>

                    {/* <!-- Done --> */}
                    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                        <ProjectList
                            type="done"
                            listHeading="Done"
                            projectsData={doneProjects}
                            toggleTaskModal={toggleTaskModal}
                            handleDelete={handleDelete}
                        />
                    </div>

                    {/* <!-- Revised --> */}
                    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                        <ProjectList
                            type="revise"
                            listHeading="Revise"
                            projectsData={reviseProjects}
                            toggleTaskModal={toggleTaskModal}
                            handleDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectContainer;
