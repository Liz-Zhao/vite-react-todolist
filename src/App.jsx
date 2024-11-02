import { useState } from "react";
import AddIcon from "./assets/add.svg";
import Todo from "./component/Todo";

const defaultData = [
  { id: 0, title: "Apple", isChecked: false },
  { id: 1, title: "Banana", isChecked: false },
  { id: 2, title: "review", isChecked: true },
  { id: 3, title: "Softpedia Folder", isChecked: false },
  { id: 4, title: "Read this", isChecked: true },
  { id: 5, title: "Mini - review", isChecked: false },
  { id: 6, title: "Milk eggf", isChecked: false },
];

function App() {
  const [todoList, setTodoList] = useState(defaultData);
  const [title, setTitle] = useState("");

  const handleAddItem = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length++,
        title: title,
        isChecked: false,
      },
    ]);

    setTitle("");
  };

  const handleRemoveItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleUpdateItem = (id,value) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, title: value } : item
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAddItem();
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="title">今日代办</h2>
        <section className="todo-box">
          {todoList.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              handleRemoveItem={handleRemoveItem}
              handleToggleItem={handleToggleItem}
              handleUpdateItem={handleUpdateItem}
            />
          ))}
        </section>

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
          <div className="btn btn-add btn-s" onClick={handleAddItem}>
            <img src={AddIcon} alt="add" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
