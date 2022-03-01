import {ITodoItem} from "../../entities/TodoItem/iTodoItem";

export interface iTodoListUseCase {
    getTodoList(): ITodoItem[]
    insertTodoItem(content: string): void
}
