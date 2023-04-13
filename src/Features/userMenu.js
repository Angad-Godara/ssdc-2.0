import { createSlice } from "@reduxjs/toolkit";

export const userMenuSlice = createSlice({
    name: 'userMenu',
    initialState: {
        userMenu: false,
        brgrMenu: false,
    },
    reducers: {
        open: (state, action) => {
            state.userMenu = action.payload
        },
        close: (state) => {
            state.userMenu = false;
        },
        brgrOpen: (state, action) => {
            state.brgrMenu = action.payload
        },
        brgrClose: (state) => {
            state.brgrMenu = false;
        }
    }
})

export const { open, close, brgrClose, brgrOpen } = userMenuSlice.actions;
export const selectUserMenu = (state) => state.userMenu;
export default userMenuSlice.reducer;
