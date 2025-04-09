import './TodosComponent.css';
import {useEffect, useState} from "react";
import {TodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {

    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, [])

    return(
        <>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </>
    )

}

export default TodosComponent;
