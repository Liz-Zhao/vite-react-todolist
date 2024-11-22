import { useContext, useState } from "react";
import DoneIcon from "../assets/checked.svg";
import EditTodo from "./EditTodo";
import UnDoneTodo from "./UnDoneTodo";
import DelIcon from "../assets/del.svg";
import { TodoContext } from "../context/TodoContext";
import { useModal } from "../context/ModalContext";

const Todo = ({ todo }) => {
  const [edited, setEdited] = useState(false);
  const { dispatch } = useContext(TodoContext);
  const {dispatch:modalDispatch } = useModal();

  const handleToggleItem = () => {
    dispatch({
      type: "toggled",
      id: todo.id,
    });
  };

  const handleShowModal =()=>{
    modalDispatch({
      type:"SHOW_MODAL",
      payload:{
        onConfirm: handleRemoveItem
      }
    })
  }

  const handleRemoveItem = () => {

    dispatch({
      type: "removed",
      id: todo.id,
    });

  };

  return (
    <div className="todo-item">
      {todo.isChecked ? (
        <>
          <div className="checked" onClick={handleToggleItem}>
            <img src={DoneIcon} alt="done" />
          </div>
          <div className="item-title-checked">{todo.title}</div>
          <div className="btn btn-del btn-s" onClick={handleShowModal}>
            <img src={DelIcon} alt="del" />
          </div>
        </>
      ) : (
        <>
          {edited ? (
            <EditTodo todo={todo} setEdited={setEdited} />
          ) : (
            <UnDoneTodo todo={todo} setEdited={setEdited} />
          )}
        </>
      )}
    </div>
  );
};

export default Todo;
