import {ITodoItem} from "./iTodoItem";

export class TodoItem implements ITodoItem {
    content: string;
    id: string;
    isDone: boolean;

    constructor(id: string, content: string, isDone: boolean) {
        this.id = id;
        this.content = content;
        this.isDone = isDone;
    }
}
