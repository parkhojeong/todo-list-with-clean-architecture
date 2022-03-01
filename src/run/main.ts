import {TodoList} from "../domains/useCases/TodoList/TodoList";
import {MemoryTodoListRepository} from "../domains/repositories/TodoListRepository/MemoryTodoListRepository";

const todoList =  new TodoList(new MemoryTodoListRepository());

todoList.insertTodoItem("item1");

console.log(todoList.getTodoList());

todoList.insertTodoItem("item2");

console.log(todoList.getTodoList());
