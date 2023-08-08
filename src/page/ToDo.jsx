import React, { useContext } from "react";
import Header from "../component/Header";
import TodoList from "../component/TodoList";
import { getItem, setToDo } from "../helper";
import { useLoaderData } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";

export function mainLoader() {
  const todoList = getItem("todo");
  return { todoList };
}

export async function mainAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action == "addTodo") {
    try {
      setToDo(values.todo);
      return "asu";
    } catch (e) {
      throw new Error(e.message);
    }
  }
  //   else if (_action == "deleteToDo") {
  //     try {
  //       deleteItem(values.id);
  //       return "asu";
  //     } catch (e) {
  //       throw new Error(e.message);
  //     }
  //   } else if (_action == "clearComplete") {
  //     try {
  //       deleteCheckedItem();
  //       return "asu";
  //     } catch (e) {
  //       throw new Error(e.message);
  //     }
  //   } else if (_action == "checkBox") {
  //     try {
  //       setcheckItem(values.id);
  //       return "asu";
  //     } catch (e) {
  //       throw new Error(e.message);
  //     }
  //   }
  else {
    return "asu";
  }
}

const ToDo = () => {
  //   const { todoList: todo } = useContext(TodoContext);
  //   console.log(todo);
  //   const { todoList } = useLoaderData();
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};

export default ToDo;
