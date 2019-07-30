import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../state/actions/todoActions'
import DatePickerInline from '../components/UI/DatePicker';
import { TextField, IconButton } from '@material-ui/core';
import { TodoModel } from '../types/TodoModel';
import Save from '@material-ui/icons/Save'
import { actionModalCreators } from '../state/actions/modalActions';

interface State {
    text: string;
    dueDate: Date | null;
}

const EditTodo: React.FC<any> = ({ editTodo, todo, hideModal }) => {
    const [values, setValues] = useState<State>({
        text: todo.text,
        dueDate: todo.dueDate
    });

    const handleEditSubmit = () => {
        const editedTodo: TodoModel = {
            ...todo,
            text: values.text,
            dueDate: values.dueDate,
        }
        editTodo(editedTodo);
        hideModal();
    }

    const handleDateChange = date => {
        setValues({ ...values, dueDate: date });
    }

    const handleTextChange = event => {
        setValues({ ...values, text: event.target.value });
    }

    return (
        <form className="edit-todo__container">
            <TextField
                className="edit-todo__text"
                label="Edit Todo"
                value={values.text}
                onChange={handleTextChange}
            />
            <div className="edit_todo__group">
                <div className="edit-todo__date">
                    <DatePickerInline
                        label="Edit Due Date"
                        selectedDate={values.dueDate}
                        onHandleDateChange={handleDateChange}>
                    </DatePickerInline>
                </div>
                <IconButton
                    onClick={handleEditSubmit}>
                    <Save />
                </IconButton>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    editTodo: editedTodo => dispatch(actionCreators.editTodo(editedTodo)),
    hideModal: () => dispatch(actionModalCreators.hideModal())
})

export default connect(null, mapDispatchToProps)(EditTodo)