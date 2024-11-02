import { useEffect, useRef, useState } from "react";
import DelIcon from "../assets/del.svg";
import checkIcon from "../assets/check.svg";
import DoneIcon from "../assets/checked.svg";
import EditIcon from "../assets/edit.svg";

const Todo = ({ todo, handleToggleItem, handleRemoveItem,handleUpdateItem }) => {
  const [toolkitState, setToolkitState] = useState(false);
  const contextMenu = useRef(null);
  const [edited, setEdited] = useState(false);
  const [editvalue, setEditValue] = useState(todo.title)

  const handleEditItem = () => {
    handleUpdateItem(todo.id,editvalue)
    setEdited(false);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setToolkitState(true);
    console.log(e.clientX, e.clientY);
  };

  const handleClickOutside = (e) => {
    if (contextMenu.current && !contextMenu.current.contains(e.target)) {
      setToolkitState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="todo-item">
      {todo.isChecked ? (
        <>
          <div className="checked" onClick={() => handleToggleItem(todo.id)}>
            <img src={DoneIcon} alt="done" />
          </div>
          <div className="item-title-checked">{todo.title}</div>
          <div
            className="btn btn-del btn-s"
            onClick={() => handleRemoveItem(todo.id)}
          >
            <img src={DelIcon} alt="del" />
          </div>
        </>
      ) : (
        <>
          {edited ? (
            <div className="edit-box">
              <input type="text" name="edit" id="edit" value={editvalue} onChange={(e)=>setEditValue(e.target.value)} />
              <div className="btn btn-del" onClick={()=> setEdited(false)}>
                <img src={DelIcon} alt="del" />
              </div>
              <div className="btn btn-check" onClick={()=> handleEditItem()}>
                <img src={checkIcon} alt="check" />
              </div>
            </div>
          ) : (
            <>
              <div onContextMenu={handleRightClick} className="todo-item-un">
                <div
                  className="uncheck"
                  onClick={() => handleToggleItem(todo.id)}
                ></div>

                <div>{todo.title}</div>
              </div>

              {toolkitState && (
                <div className="toolkit" ref={contextMenu}>
                  <div
                    className="btn btn-del"
                    onClick={() => handleRemoveItem(todo.id)}
                  >
                    <img src={DelIcon} alt="del" />
                  </div>
                  <div className="btn btn-edit" onClick={()=> setEdited(true)}>
                    <img src={EditIcon} alt="edit" />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Todo;
