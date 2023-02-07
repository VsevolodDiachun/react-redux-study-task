import {Dispatch} from "redux";
import {TodoAction} from "../../types/todo";
import axios from "axios";
import {ActionSetTodoPage, ActionTodo, ActionTodoError, ActionTodoSuccess} from "../reducers/todoReducer";

const _urlTodos = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch:Dispatch<TodoAction>) => {
        try {
            dispatch(ActionTodo());
            const response = await axios.get(_urlTodos, {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch(ActionTodoSuccess(response.data))
            },500)
        } catch (e) {
            dispatch(ActionTodoError('о курва, якась помилка, хай йому грець'));
        }
    }
}

export const setTodoPage = (page: number):TodoAction => {
    return ActionSetTodoPage(page);
}