import{ SHOW_MODAL, HIDE_MODAL }  from '../actions/actionTypes';

const initialState = {
  modalType: null,
  payload: null
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        payload: action.payload
      }
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default modal
