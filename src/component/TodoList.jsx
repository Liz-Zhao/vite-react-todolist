import Todo from "./Todo";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const searchTitle = useSelector((state) => state.todo.searchTitle);

  const filterTodos = useMemo(() => todos.filter((item) => item.title.includes(searchTitle)), [todos, searchTitle]);

  return (
    <section className="todo-box">
      {filterTodos.length === 0 ? (
        <p>NO TASK</p>
      ) : (
        filterTodos.map((item) => <Todo key={item.id} todo={item} />)
      )}
    </section>
  );
};

export default TodoList;
