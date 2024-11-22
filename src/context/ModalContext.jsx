import { createContext, useContext, useReducer } from "react";

// 定义初始状态
const initialState = {
  visible: false,
  onConfirm: null,
  onCancel: null,
};

// 定义 reducer
const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        visible: true,
        onConfirm: action.payload.onConfirm,
        onCancel: action.payload.onCancel,
      };
    case "HIDE_MODAL":
      return { ...state, visible: false, onConfirm: null, onCancel: null };
    default:
      return state;
  }
};

const ModalContext = createContext();

// 创建 Provider
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

// 自定义 Hook
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
