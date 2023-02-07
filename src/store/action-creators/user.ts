import {Dispatch} from "redux";
import {UserAction} from "../../types/user";
import axios from "axios";
import {ActionUser, ActionUserError, ActionUserSuccess} from "../reducers/userReducer";

const _urlUsers = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch(ActionUser());
            const response = await axios.get(_urlUsers)
            setTimeout(() => {
                dispatch(ActionUserSuccess(response.data))
            }, 500)
        } catch (e) {
            dispatch(ActionUserError('о курва, якась помилка, хай йому грець'))
        }
    }
}