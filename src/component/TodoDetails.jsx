import React, { useContext } from "react";
import iconCross from "../assets/icon-cross.svg";
import iconCheck from "../assets/icon-check.svg";
import { TodoContext } from "../contexts/TodoContext";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleClick = () => {
    dispatch({ type: "REMOVE_TODO", id: todo.id });
  };

  const handleCheck = () => {
    dispatch({ type: "SET_CHECKBOX", id: todo.id });
  };

  return (
    <div className="todo-details grid-column spacing-sm">
      <div className="todo-content grid-column-reverse">
        <input
          type="checkbox"
          onClick={handleCheck}
          id={todo.id}
          defaultChecked={todo.isChecked}
          className="hidden"
        />
        <label htmlFor={todo.id} className="checkerImg-wrapper display-flex">
          <img src={iconCheck} alt="" className="hidden" />
        </label>
        <label htmlFor={todo.id}>
          <p className="todoValue cursor-pointer">{todo.value}</p>
        </label>
      </div>
      <img src={iconCross} alt="" onClick={handleClick} />
    </div>
  );
};

export default Todo;
