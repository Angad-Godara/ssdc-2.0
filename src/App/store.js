import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlice'
import userMenuReducer from "../Features/userMenu";
import memberReducer from "../Features/isMemberSlice";
import teamReducer from '../Features/teamSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        userMenu: userMenuReducer,
        member: memberReducer,
        team: teamReducer,
    },
});