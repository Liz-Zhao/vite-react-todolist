export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL"

export const showModal = (onConfirm, onCancel)=>{
    return {
        type:SHOW_MODAL,
        payload:{
            onConfirm,
            onCancel
        }
    }
}

export const hideModal = ()=>{
    return {
        type:HIDE_MODAL
    }
}