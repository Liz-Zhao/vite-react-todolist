import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <section className="todo-box">
      {todos.length === 0 ? (
        <p>NO TASK</p>
      ) : (
        todos.map((item) => <Todo key={item.id} todo={item} />)
      )}
    </section>
  );
};

export default TodoList;
