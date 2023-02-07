import {
    FetchTodoAction,
    FetchTodoErrorAction,
    FetchTodoSuccessAction,
    SetTodoPage,
    TodoAction,
    TodoActionTypes,
    TodoState
} from "../../types/todo";

const initialState:TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action:TodoAction):TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true};
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, loading: false};
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload};
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}

export const ActionTodo = ():FetchTodoAction => ({type: TodoActionTypes.FETCH_TODOS});
export const ActionTodoSuccess = (payload:any[]):FetchTodoSuccessAction => ({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload});
export const ActionTodoError = (payload:string):FetchTodoErrorAction => ({type: TodoActionTypes.FETCH_TODOS_ERROR, payload});

export const ActionSetTodoPage = (payload:number):SetTodoPage => ({type: TodoActionTypes.SET_TODO_PAGE, payload});