import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlice'
import userMenuReducer from "../Features/userMenu";
import memberReducer from "../Features/isMemberSlice";
import teamReducer from '../Features/teamSlice';
import contributionReducer from '../Features/contributeSlice'
import projectsReducer from '../Features/projectsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        userMenu: userMenuReducer,
        member: memberReducer,
        team: teamReducer,
        contribute: contributionReducer,
        projects: projectsReducer,
    },
});