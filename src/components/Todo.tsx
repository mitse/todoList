import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core';
import { TodoWithEvents } from '../types/TodoWithEvents';
import DateUtility from '../utils/DateFormat';

const Todo: React.FC<TodoWithEvents> = (todo: TodoWithEvents) => {

  let classes = 'todo__container';
  if (todo.completed)
    classes += ' todo__container__completed';

  return <li className={classes}>
    <Checkbox
      edge="start"
      tabIndex={-1}
      color="primary"
      inputProps={{ 'aria-labelledby': 'Checkbox Mark' }}
      onChange={todo.onStatusChange}
    />
    <span className="todo__text">{todo.text}</span>
    <span>{todo.dueDate ? DateUtility.formatDate(todo.dueDate) : ''}</span>
    <IconButton onClick={todo.onEdit}>
      <Edit />
    </IconButton>
    <IconButton onClick={todo.onDelete}>
      <Delete />
    </IconButton>
  </li>
}

export default Todo