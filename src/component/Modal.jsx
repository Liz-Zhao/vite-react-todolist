import { useModal } from "../context/ModalContext";

const Modal = () => {
  const { state, dispatch } = useModal();

  if (!state.visible) return null;

  const handleConfirm = () => {
    if (state.onConfirm) state.onConfirm();
    dispatch({ type: "HIDE_MODAL" });
  };

  const handleCancel = () => {
    if (state.onCancel) state.onCancel();
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div className="m-container">
      <div className="m-box">
        <div className="m-content">确定是否删除？</div>
        <div className="m-bottom">
          <button className="m-btn" onClick={handleConfirm}>
            确定
          </button>
          <button className="m-btn" onClick={handleCancel}>
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
