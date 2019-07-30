import { ADD_TODO, CHANGE_TODO, EDIT_TODO, DELETE_TODO, TODOS_MISSION_COMPLETED }  from './actionTypes';

let nextTodoId = 0
const addTodo = (newTodo) => ({
  type: ADD_TODO,
  todo: {
    id: nextTodoId++,
    ...newTodo
  }
})

const changeTodo = (id: number) => ({
  type: CHANGE_TODO,
  id
})

const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo: {...todo}
})

const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id
})

const todosMissionCompleted = () => ({
  type: TODOS_MISSION_COMPLETED
})

export const actionCreators = {
  addTodo,
  changeTodo,
  editTodo,
  deleteTodo,
  todosMissionCompleted
}