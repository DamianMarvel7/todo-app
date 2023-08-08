import React, { createContext, useEffect, useReducer, useState } from "react";
import { getItem, setItem } from "../helper";
import { TodoReducer } from "../reducer/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todoList, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = getItem() ?? [];
    return localData;
  });

  useEffect(() => {
    setItem(todoList);
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
