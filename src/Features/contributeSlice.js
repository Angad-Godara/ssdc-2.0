import { createSlice } from "@reduxjs/toolkit";

export const ContributeSlice = createSlice({
    name: 'contribute',
    initialState: {
        currentContribution: {},
        prevContributions: {},
    },
    reducers: {
        setCurrentContribution: (state, action) => {
            if (action.payload?.owner) {
                state.currentContribution.owner = action.payload.owner
            } else if (action.payload?.repo) {
                state.currentContribution.repo = action.payload.repo
            } else if (action.payload?.ssdcContri) {
                state.currentContribution.ssdcContri = action.payload.ssdcContri
            }
        },
        loadContributions: (state, action) => {
            state.prevContributions = action.payload;
        }
    }
})

export const { setCurrentContribution, loadContributions } = ContributeSlice.actions;
export const selectContributions = (state) => state.contribute;
export default ContributeSlice.reducer;
