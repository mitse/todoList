import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditTodo from '../../../containers/EditTodo';

const EditTodoModal: React.FC<any> = ({ open, onHandleClose, payload }) => {
    return (
        <Dialog
            open={open}
            onClose={onHandleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        
            <EditTodo todo={payload}></EditTodo>

        </Dialog>
    )
}
export default EditTodoModal