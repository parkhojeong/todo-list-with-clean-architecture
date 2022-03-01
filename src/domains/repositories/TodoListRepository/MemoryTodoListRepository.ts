import {ITodoListRepository} from "./iTodoListRepository";
import {ITodoItem} from "../../entities/TodoItem/iTodoItem";
import {TodoItem} from "../../entities/TodoItem/TodoItem";

export class MemoryTodoListRepository implements ITodoListRepository {

    private todoList: ITodoItem[] = [];

    getTodoList(): ITodoItem[] {
        return this.todoList;
    }

    insertTodoItem(content: string): void {
        const id = this.todoList.length + 1;
        const todoItem = new TodoItem('' + id, content, false);
        this.todoList.push(todoItem)
    }
}
