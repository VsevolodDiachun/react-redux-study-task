import {
    FetchUserAction,
    FetchUserErrorAction,
    FetchUserSuccessAction,
    UserAction,
    UserActionTypes,
    UserState
} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS :
            return {users: [], loading: true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS :
            return {users: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USERS_ERROR :
            return {users: [], loading: false, error: action.payload}
        default:
            return state
    }
}

export const ActionUser = ():FetchUserAction => ({type: UserActionTypes.FETCH_USERS});
export const ActionUserSuccess = (payload:any[]):FetchUserSuccessAction => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload});
export const ActionUserError = (payload:string):FetchUserErrorAction => ({type: UserActionTypes.FETCH_USERS_ERROR, payload});