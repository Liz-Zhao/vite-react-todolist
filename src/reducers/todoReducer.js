import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SEARCH_TODO
} from "../actions/todoAction";
import { v4 as uuidv4 } from "uuid";

// const defaultData = [
//   { id: 0, title: "Apple", isChecked: false },
// ];

const initialState = {
  todos: [],
  searchTitle: "",
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
    case SEARCH_TODO:
      return {
        ...state,
        searchTitle: action.payload.searchTitle,
      };
    default:
        return state
  }
};

export default todoReducer;