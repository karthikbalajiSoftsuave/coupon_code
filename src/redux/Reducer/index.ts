import { combineReducers } from "redux";

import { AuthReducer } from "./authenticationReducer";

export const RootReducer = combineReducers({
    authData: AuthReducer,
});

export type RootState = ReturnType<typeof RootReducer>