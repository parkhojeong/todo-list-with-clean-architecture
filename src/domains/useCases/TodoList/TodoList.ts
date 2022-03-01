import {iTodoListUseCase} from "./iTodoList";
import {ITodoItem} from "../../entities/TodoItem/iTodoItem";
import {ITodoListRepository} from "../../repositories/TodoListRepository/iTodoListRepository";

export class TodoList implements iTodoListUseCase {
    constructor(private todoListRepository: ITodoListRepository) {
        this.todoListRepository = todoListRepository;
    }

    getTodoList(): ITodoItem[] {
        return this.todoListRepository.getTodoList()
    }

    insertTodoItem(content: string): void {
        this.todoListRepository.insertTodoItem(content);
    }
}
