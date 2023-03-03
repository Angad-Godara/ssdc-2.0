import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        faculties: null,
        coreTeam: null,
        members: null,
        mentors: null,
        alumni: null,
    },
    reducers: {
        setCore: (state, action) => {
            state.coreTeam = action.payload
        },
        setMembers: (state, action) => {
            state.members = action.payload
        },
        setFaculties: (state, action) => {
            state.faculties = action.payload
        },
        setMentors: (state, action) => {
            state.mentors = action.payload
        },
        // setAlumni: (state, action) => {
        //     state.alumni = action.payload
        // },
    }
})

export const { setCore, setMembers, setFaculties, setMentors } = teamSlice.actions;
export const selectTeam = (state) => state.team;
export default teamSlice.reducer;
