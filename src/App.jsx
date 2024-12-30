import AddTodo from "./component/AddTodo";
import Modal from "./component/Modal";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./component/TodoList";
import SearchTodo from "./component/SearchTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <h2 className="title">今日代办</h2>
          <SearchTodo />
          <TodoList />
          <AddTodo />
        </div>
        <Modal />
      </Provider>
    </>
  );
}

export default App;
