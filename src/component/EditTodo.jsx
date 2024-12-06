import { useState } from "react";
import DelIcon from "../assets/del.svg";
import checkIcon from "../assets/check.svg";
import { useDispatch } from "react-redux";
import { updateTodo } from "../actions/todoAction";

const EditTodo = ({ todo, setEdited }) => {
  const [editvalue, setEditValue] = useState(todo.title);
  const dispatch = useDispatch();

  const handleEditItem = () => {
    dispatch(updateTodo(todo.id, editvalue))
    setEdited(false);
  };

  return (
    <div className="edit-box">
      <input
        type="text"
        name="edit"
        id="edit"
        value={editvalue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <div className="btn btn-del" onClick={() => setEdited(false)}>
        <img src={DelIcon} alt="del" />
      </div>
      <div className="btn btn-check" onClick={() => handleEditItem()}>
        <img src={checkIcon} alt="check" />
      </div>
    </div>
  );
};

export default EditTodo;
