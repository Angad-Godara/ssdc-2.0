import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlice'
import userMenuReducer from "../Features/userMenu";
import memberReducer from "../Features/isMemberSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        userMenu: userMenuReducer,
        member: memberReducer,
    },
});