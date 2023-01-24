import { createSlice } from "@reduxjs/toolkit";

export const userMenuSlice = createSlice({
    name: 'userMenu',
    initialState: {
        open: false,
    },
    reducers: {
        open: (state, action) => {
            state.open = action.payload
        },
        close: (state) => {
            state.open = false;
        }
    }
})

export const { open, close } = userMenuSlice.actions;
export const selectUserMenu = (state) => state.userMenu.open;
export default userMenuSlice.reducer;
