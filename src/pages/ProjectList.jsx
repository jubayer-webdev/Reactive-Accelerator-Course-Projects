/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterIcon from "../components/icons/FilterIcon";
import DeleteIcon from "../components/icons/DeleteIcon";
import PencilIcon from "../components/icons/PencilIcon";
import { formatDateToLong } from "../utils/formatDate";
import {
    PROJECT_STATUS_BG_MAP,
    PROJECT_STATUS_TEXTS_MAP,
} from "../helpers/constants";

export const ProjectList = ({
    type,
    listHeading,
    projectsData,
    toggleTaskModal,
    handleDelete,
}) => {
    const [isSortLatestToOld, setIsSortLatestToOld] = useState(true);

    const handleSort = (a, b) => {
        if (isSortLatestToOld) {
            return new Date(b.dueDate) - new Date(a.dueDate);
        }
        return new Date(a.dueDate) - new Date(b.dueDate);
        // if (sort === "latestToOld") {
        //     return a.time - b.time;
        // }
        // if (sort === "oldToLatest") {
        //     return b.time - a.time;
        // }
        // return 1;
    };

    // const handleFilter = (data) => {
    //     if (filter.length === 0) return true;
    //     if (filter.includes(data.heading.toLowerCase())) return true;
    // };

    return (
        <>
            <div className={"rounded-lg p-4 " + PROJECT_STATUS_BG_MAP[type]}>
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                        {listHeading} ({projectsData?.length})
                    </h3>
                    <button
                        onClick={() => setIsSortLatestToOld(!isSortLatestToOld)}
                    >
                        <FilterIcon />
                    </button>
                </div>

                {projectsData?.length === 0 ? (
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-stone-800 animate-pulse">
                            Task List is empty!
                        </h3>
                    </div>
                ) : (
                    [...projectsData]?.sort(handleSort)?.map((project) => (
                        <div key={project?.id}>
                            <div className="mb-4 rounded-lg bg-gray-800 p-4">
                                <div className="flex justify-between">
                                    <h4
                                        className={
                                            "mb-2 flex-1 font-semibold " +
                                            PROJECT_STATUS_TEXTS_MAP[type]
                                        }
                                    >
                                        {project?.taskName}
                                    </h4>

                                    <div className="flex gap-2">
                                        <DeleteIcon
                                            onClick={() =>
                                                // handleDelete(todo?.id)
                                                handleDelete(project)
                                            }
                                        />

                                        <PencilIcon
                                            onClick={() =>
                                                toggleTaskModal(project)
                                            }
                                        />
                                    </div>
                                </div>
                                <p className="mb-2 text-sm text-zinc-200">
                                    {project?.description}
                                </p>

                                <p className="mt-6 text-xs text-zinc-400">
                                    {formatDateToLong(project?.dueDate)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
