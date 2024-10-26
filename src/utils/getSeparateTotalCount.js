const getSeparateTotalCount = (allProjectList) => {
    // calculate total
    const todoCount = allProjectList.reduce((prev, current) => {
        return current.type === "todo" ? ++prev : prev;
    }, 0);

    const onProgressCount = allProjectList.reduce((prev, current) => {
        return current.type === "onProgress" ? ++prev : prev;
    }, 0);

    const doneCount = allProjectList.reduce((prev, current) => {
        return current.type === "done" ? ++prev : prev;
    }, 0);

    const revisedCount = allProjectList.reduce((prev, current) => {
        return current.type === "revise" ? ++prev : prev;
    }, 0);

    return {
        todoCount,
        onProgressCount,
        doneCount,
        revisedCount,
    };
};

export default getSeparateTotalCount;
