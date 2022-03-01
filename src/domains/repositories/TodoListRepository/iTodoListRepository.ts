import {ITodoItem} from "../../entities/TodoItem/iTodoItem";

export interface ITodoListRepository {
    getTodoList(): ITodoItem[]
    insertTodoItem(content: string): void;
}

