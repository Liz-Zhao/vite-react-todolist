import { useReducer } from "react";
import Todo from "./component/Todo";
import AddTodo from "./component/AddTodo";
import { TodoContext, todoReducer } from "./context/TodoContext";

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
  const [todoList, dispatch] = useReducer(todoReducer, defaultData);

  return (
    <>
      <TodoContext.Provider value={{ todoList, dispatch }}>
        <div className="container">
          <h2 className="title">今日代办</h2>
          <section className="todo-box">
            {todoList.map((item) => (
              <Todo key={item.id} todo={item} />
            ))}
          </section>

          <AddTodo />
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
