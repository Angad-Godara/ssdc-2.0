import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlice'
import userMenuReducer from "../Features/userMenu";

export const store = configureStore({
    reducer: {
        user: userReducer,
        userMenu: userMenuReducer,
    },
});