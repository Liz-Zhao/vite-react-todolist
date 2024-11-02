import { useContext, useEffect, useRef, useState } from "react";
import EditIcon from "../assets/edit.svg";
import DelIcon from "../assets/del.svg";
import { TodoContext } from "../context/TodoContext";


const UnDoneTodo = ({todo,setEdited}) => {
  const [toolkitState, setToolkitState] = useState(false);
  const contextMenu = useRef(null);

  const {dispatch} = useContext(TodoContext)

  const handleToggleItem = ()=>{
    dispatch({
      type:"toggled",
      id: todo.id
    })
  }

  const handleRemoveItem=()=>{
    dispatch({
      type:"removed",
      id: todo.id
    })
  }


  const handleRightClick = (e) => {
    e.preventDefault();
    setToolkitState(true);
    // console.log(e.clientX, e.clientY);
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
          <div className="btn btn-edit" onClick={() => setEdited(true)}>
            <img src={EditIcon} alt="edit" />
          </div>
        </div>
      )}
    </>
  );
};

export default UnDoneTodo;
