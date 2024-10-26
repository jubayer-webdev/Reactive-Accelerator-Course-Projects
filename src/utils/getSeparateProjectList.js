const getSeparateProjectList = (allProjectList) => {
    // separate project list
    const todoProjects = allProjectList.filter(
        (project) => project.category === "todo"
    );
    const onProgressProjects = allProjectList.filter(
        (project) => project.category === "onProgress"
    );
    const doneProjects = allProjectList.filter(
        (project) => project.category === "done"
    );
    const reviseProjects = allProjectList.filter(
        (project) => project.category === "revise"
    );

    return { todoProjects, onProgressProjects, doneProjects, reviseProjects };
};

export default getSeparateProjectList;
