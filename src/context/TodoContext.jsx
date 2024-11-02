import { createContext } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 1001); // 生成 0 到 1000 的随机整数
}

export const todoReducer = (todoList, action) => {
  switch (action.type) {
    case "added":
      return [
        ...todoList,
        {
          id: getRandomNumber(),
          title: action.value,
          isChecked: false,
        },
      ];

    case "removed":
      return todoList.filter((item) => item.id !== action.id);
    case "updated":
      return todoList.map((item) =>
        item.id === action.id ? { ...item, title: action.value } : item
      );
    case "toggled":
      return todoList.map((item) =>
        item.id === action.id ? { ...item, isChecked: !item.isChecked } : item
      );

    default:
      throw Error("未知 action：" + action.type);
  }
};

export const TodoContext = createContext();
