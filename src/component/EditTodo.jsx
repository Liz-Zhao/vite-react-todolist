import { useContext, useState } from "react";
import DelIcon from "../assets/del.svg";
import checkIcon from "../assets/check.svg";
import { TodoContext } from "../context/TodoContext";

const EditTodo = ({ todo, setEdited }) => {
  const [editvalue, setEditValue] = useState(todo.title);
  const { dispatch } = useContext(TodoContext);

  const handleEditItem = () => {
    dispatch({
      type: "updated",
      id: todo.id,
      value: editvalue,
    });
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
