import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: null,
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        }
    }
})

export const { setProjects } = ProjectsSlice.actions;
export const selectProjects = (state) => state.projects.projects;
export default ProjectsSlice.reducer;
