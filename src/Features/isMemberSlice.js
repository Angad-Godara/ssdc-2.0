import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
    name: 'member',
    initialState: {
        member: {},
    },
    reducers: {
        setMember: (state, action) => {
            state.member = action.payload
        },
        resetMember: (state) => {
            state.member = null;
        },
        updateMember: (state, action) => {
            if (action.payload?.name) {
                state.member.name = action.payload.name
            } else if (action.payload?.aim) {
                state.member.aim = action.payload.aim
            } else if (action.payload?.linkedin) {
                state.member.linkedin = action.payload.linkedin
            } else if (action.payload?.github) {
                state.member.github = action.payload.github
            } else if (action.payload?.leetcode) {
                state.member.leetcode = action.payload.leetcode
            } else if (action.payload?.codechef) {
                state.member.codechef = action.payload?.codechef
            } else if (action.payload?.codeforces) {
                state.member.codeforces = action.payload?.codeforces
            } else if (action.payload?.web) {
                state.member.web = action.payload?.web
            }
        }
    }
})

export const { setMember, resetMember, updateMember } = memberSlice.actions;
export const selectMember = (state) => state.member.member;
export default memberSlice.reducer;