import { USER_DETAILS } from "../Actions/actions";


const initialState = {
    userData: undefined
};

export const AuthReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
    case USER_DETAILS:
        return {
            ...state,
            userData: action.payload
        };
    default:
        return state;
    }
};
