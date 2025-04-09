import './TodoComponent.css';
import {FC} from "react";
import {TodoModel} from "../../models/TodoModel.ts";

type PropType = {
    todo: TodoModel;
}

export const TodoComponent: FC<PropType> = ({todo}) => {
    return (
        <div>
            {/*{todo.id}, {todo.title}*/}
            {todo.id}, {todo.todo}
        </div>
    );
};