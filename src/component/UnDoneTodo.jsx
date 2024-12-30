import { useEffect, useRef, useState } from "react";
import EditIcon from "../assets/edit.svg";
import DelIcon from "../assets/del.svg";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../actions/todoAction";
import { showModal } from "../actions/modalAction";


const UnDoneTodo = ({todo,setEdited}) => {
  const [toolkitState, setToolkitState] = useState(false);
  const contextMenu = useRef(null);
  const dispatch = useDispatch();

  const handleToggleItem = ()=>{
    dispatch(toggleTodo(todo.id))
  }

  const handleShowModal =()=>{
    dispatch(showModal(handleRemoveItem))
  }

  const handleRemoveItem = () => {
    dispatch(removeTodo(todo.id))

  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setToolkitState(true);
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
          onClick={() => handleToggleItem()}
        ></div>

        <div>{todo.title}</div>
      </div>

      {toolkitState && (
        <div className="toolkit" ref={contextMenu}>
          <div
            className="btn btn-del"
            onClick={() => handleShowModal()}
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
