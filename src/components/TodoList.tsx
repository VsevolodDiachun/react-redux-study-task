import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import todoStyle from '../styles/todo.module.css'
import {TodoAction} from "../types/todo";

const TodoList:React.FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    //const loading:boolean = useSelector((state:TodoState) => state.loading)
    //const loading = useSelector(state => state.todo.loading)
    const {fetchTodo, setTodoPage} = useAction();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodo(page, limit)
    },[page])

    if (loading) {
        return <div>Загрузка...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p}
                         className={p === page ? todoStyle['page-list-elect'] : todoStyle['page-list-inactive']}
                         onClick={() => setTodoPage(p)}
                    >
                        {p}
                    </div>)}
            </div>

        </div>
    );
};

export default TodoList;