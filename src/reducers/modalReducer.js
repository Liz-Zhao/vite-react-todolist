import { HIDE_MODAL, SHOW_MODAL } from "../actions/modalAction";

const initialState = {
    visible: false,
    onConfirm: null,
    onCancel: null,
  };

const modalReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                visible: true,
                onConfirm: action.payload.onConfirm,
            }
        case HIDE_MODAL:
            return {
                ...state,
                visible:false,
                onConfirm:null,
                onCancel:null
            }
    
        default:
            return state;
    }
}

export default modalReducer