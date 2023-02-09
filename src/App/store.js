import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlice'
import userMenuReducer from "../Features/userMenu";
import memberReducer from "../Features/isMemberSlice";
import teamReducer from '../Features/teamSlice';
import ContributionReducer from '../Features/ContributeSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        userMenu: userMenuReducer,
        member: memberReducer,
        team: teamReducer,
        contribute: ContributionReducer,
    },
});