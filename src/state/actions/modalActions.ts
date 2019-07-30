import { SHOW_MODAL, HIDE_MODAL}  from './actionTypes';

 const showModal = (modalType: string, payload?: any) => ({
      type: SHOW_MODAL,
      modalType,
      payload
 });

 const hideModal = () => ({
    type: HIDE_MODAL
 });

export const actionModalCreators = {
    showModal,
    hideModal
  }
