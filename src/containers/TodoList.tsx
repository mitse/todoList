import React from 'react'
import Todo from '../components/Todo'
import { TodoModel } from '../types/TodoModel'
import { actionCreators } from '../state/actions/todoActions'
import { actionModalCreators } from '../state/actions/modalActions';
import { connect } from 'react-redux';

const checkForCompletedTasks = (todos, showModal, todosMissionCompleted) => {
  const completedTodos = todos.filter(todo => todo.completed);
  if(completedTodos.length === 3)
   setTimeout(() => {
    showModal('INFO_MODAL');
    todosMissionCompleted();
   }, 100); 
 }

const TodoList = ({ todosState, changeTodo, deleteTodo, showModal, todosMissionCompleted }) => {
  if(!todosState.todosMissionCompeted){
    checkForCompletedTasks(todosState.todos, showModal, todosMissionCompleted);
  }
 
  return <ul className="todo-list">
    {todosState.todos.map((todo:TodoModel) => (
      <Todo key={todo.id} 
         { ...todo } 
         onStatusChange={() => changeTodo(todo.id)}
         onEdit={() => showModal('EDIT_TODO_MODAL', todo)}
         onDelete={() => deleteTodo(todo.id)}
       />
    ))}
    </ul>
}

const mapStateToProps = state => ({
    todosState: state.todos
  })


const mapDispatchToProps = dispatch => ({
  changeTodo: id => dispatch(actionCreators.changeTodo(id)),
  deleteTodo: id => dispatch(actionCreators.deleteTodo(id)),
  todosMissionCompleted: ()=> dispatch(actionCreators.todosMissionCompleted()),
  showModal: (type,payload) => dispatch(actionModalCreators.showModal(type,payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)