import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: null,
        projectsData: null,
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setProjectsData: (state, action) => {
            state.projectsData = action.payload;
        }
    }
})

export const { setProjects, setProjectsData } = ProjectsSlice.actions;
export const selectProjects = (state) => state.projects;
export default ProjectsSlice.reducer;
