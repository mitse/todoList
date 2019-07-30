import React, { useState, FC } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../state/actions/todoActions'
import DatePickerInline from '../components/UI/DatePicker';
import { TextField, IconButton } from '@material-ui/core';
import { TodoModel } from '../types/TodoModel';
import Save from '@material-ui/icons/Save'

interface State {
  text: string;
  dueDate: Date | null;
}

const AddTodo: React.FC<any> = ({ addTodo }) => {

  const [values, setValues] = useState<State>({
    text: '',
    dueDate: null
  });

  const handleSubmit = e => {
    if (!values.text.trim()) {
      return
    }

    const newTodo: TodoModel = {
      text: values.text,
      dueDate: values.dueDate,
      completed: false
    }

    addTodo(newTodo)
    setValues({ text: '', dueDate: null });
  }


  const handleDateChange = date => {
    setValues({ ...values, dueDate: date });
  }

  const handleTextChange = event => {
    setValues({ ...values, text: event.target.value });
  }

  return (
      <form className="add-todo__container flex-center" >
        <TextField
          className="add-todo__text"
          label="Add Todo"
          value={values.text}
          onChange={handleTextChange}
        />
        <div className="add-todo__date">
          <DatePickerInline 
            label="Add Due Date"
            selectedDate={values.dueDate}
            onHandleDateChange={handleDateChange}>
          </DatePickerInline>
        </div>
        <IconButton
          onClick={handleSubmit}>
          <Save />
        </IconButton>
      </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(actionCreators.addTodo(todo)),
})

export default connect(null, mapDispatchToProps)(AddTodo)