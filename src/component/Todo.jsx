import {useState } from "react";
import DoneIcon from "../assets/checked.svg";
import EditTodo from "./EditTodo";
import UnDoneTodo from "./UnDoneTodo";
import DelIcon from "../assets/del.svg";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../actions/todoAction";
import { showModal } from "../actions/modalAction";

const Todo = ({ todo }) => {
  const [edited, setEdited] = useState(false);
  const dispatch = useDispatch();

  const handleToggleItem = () => {
    dispatch(toggleTodo(todo.id))
  };

  const handleShowModal =()=>{
    dispatch(showModal(handleRemoveItem))
  }

  const handleRemoveItem = () => {
    dispatch(removeTodo(todo.id))

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
