import { combineReducers } from "redux";
import { UserSlice } from "../utilities/UserSlice";

export const rootReducer = combineReducers({
    user: UserSlice.reducer,
});