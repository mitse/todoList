import { AnyAction } from "redux";
import { TodoModel } from "../../types/TodoModel";
import { ADD_TODO, CHANGE_TODO, EDIT_TODO, DELETE_TODO, TODOS_MISSION_COMPLETED } from '../actions/actionTypes';

const initialState = {
  todos: [],
  todosMissionCompeted: false
}

const todos = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case ADD_TODO:
      return  {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ],
      }
    case CHANGE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo: TodoModel) =>  todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
        }
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: TodoModel) => todo.id === action.todo.id ? { ...todo, ...action.todo } : todo),
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: TodoModel) => todo.id !== action.id),
      }
    case TODOS_MISSION_COMPLETED:
      return {
        ...state,
        todosMissionCompeted: true
      } 
    default:
      return state
  }
}

export default todos