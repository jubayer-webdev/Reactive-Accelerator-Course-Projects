import { allProjects } from "../data/initialAllProjects";

const initialState = {
    allProjectList: allProjects,
};

const ProjectReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_PROJECT":
            return {
                allProjectList: [...state.allProjectList, action.payload],
            };

        case "REMOVE_TO_PROJECT":
            return {
                ...state,
                allProjectList: state.allProjectList.filter(
                    (project) => project.id !== action.payload.id
                ),
            };

        case "UPDATE_TO_PROJECT":
            return {
                ...state,
                allProjectList: state.allProjectList.map((project) => {
                    if (project.id === action.payload.id) return action.payload;
                    return project;
                }),
            };

        default:
            return state;
    }
};

export { initialState, ProjectReducer };
