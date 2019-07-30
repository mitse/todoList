import { TodoEvents } from "./TodoEvents";
import { TodoModel } from "./TodoModel";

export interface TodoWithEvents extends TodoModel, TodoEvents {
}
