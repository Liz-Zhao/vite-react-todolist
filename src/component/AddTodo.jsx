import { useContext, useState } from "react";
import AddIcon from "../assets/add.svg";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { dispatch} = useContext(TodoContext);

  const handleAdd = () => {
    dispatch({
        type: "added",
        value: title,
      })
    
    setTitle("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: "added",
        value: title,
      });
      setTitle("");
    }
  };

  return (
    <div className="add-box">
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="添加任务"
        onKeyDown={handleKeyDown}
      />
      <div className="btn btn-add btn-s" onClick={handleAdd}>
        <img src={AddIcon} alt="add" />
      </div>
    </div>
  );
};

export default AddTodo;
