import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
} from "../actions/todoAction";
import { v4 as uuidv4 } from "uuid";

// const defaultData = [
//   { id: 0, title: "Apple", isChecked: false },
//   { id: 1, title: "Banana", isChecked: false },
//   { id: 2, title: "review", isChecked: true },
//   { id: 3, title: "Softpedia Folder", isChecked: false },
//   { id: 4, title: "Read this", isChecked: true },
//   { id: 5, title: "Mini - review", isChecked: false },
//   { id: 6, title: "Milk eggf", isChecked: false },
// ];

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), title: action.payload.title, isChecked: false },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id != action.payload.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, isChecked: !item.isChecked }
            : item
        ),
      };
    default:
        return state
  }
};

export default todoReducer;