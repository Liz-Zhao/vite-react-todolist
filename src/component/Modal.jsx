import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../actions/modalAction";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch(); 

  if (!modal.visible) return null;

  const handleConfirm = () => {
    if (modal.onConfirm) modal.onConfirm();
    dispatch(hideModal())
  };

  const handleCancel = () => {
    if (modal.onCancel) modal.onCancel();
    dispatch(hideModal());
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
