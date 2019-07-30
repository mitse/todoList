import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const InfoModal: React.FC<any> = ({ open, onHandleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onHandleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Congratulations!"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You completed 3 tasks. Yeah!!!
          </DialogContentText>
            </DialogContent>
            <DialogActions>
        </DialogActions>
        </Dialog>
    )
}
export default InfoModal