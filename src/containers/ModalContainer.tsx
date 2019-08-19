import React from "react";
import { connect } from "react-redux";
import InfoModal from "../components/UI/modals/InfoModal";
import { actionModalCreators } from "../state/actions/modalActions";
import EditTodoModal from "../components/UI/modals/EditTodoModal";

const MODAL_COMPONENTS = {
    INFO_MODAL: InfoModal,
    EDIT_TODO_MODAL: EditTodoModal
}

const ModaContainer = ({ currentModal, hideModal }) => {
    const {modalType, payload} = currentModal;
    if (!modalType) {
        return null;
    }

    const RenderedModal = MODAL_COMPONENTS[modalType];
    return <RenderedModal
        open={true}
        onHandleClose={hideModal}
        payload = { payload ? payload : null}
    />;
}

const mapStateToProps = state => ({
    currentModal: state.modal
})

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(actionModalCreators.hideModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(ModaContainer);