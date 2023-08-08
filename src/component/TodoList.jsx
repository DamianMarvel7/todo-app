import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import TodoDetails from "./TodoDetails";
import { TodoContext } from "../contexts/TodoContext";
import { todoListSelection } from "../helper";
import iconCross from "../assets/icon-cross.svg";
import iconCheck from "../assets/icon-check.svg";

const TodoList = () => {
  const { todoList, dispatch } = useContext(TodoContext);
  const [todoValue, setTodoValue] = useState("");
  const [categoryTodo, setTodoCategory] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    document.getElementById("todoFormSubmit").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", value: todoValue });

    setIsChecked(true);

    setTimeout(() => {
      setIsChecked(false);
    }, 500);

    setTodoValue("");
  };

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleTodoCategory = (event) => {
    setTodoCategory(event.target.id);
  };

  let filteredTodoList = todoListSelection(todoList, categoryTodo);

  return (
    <main>
      <div className="main container flow">
        <Form
          onSubmit={handleSubmit}
          id="todoForm"
          className="spacing-sm grid-column clr-bgtodo round-corner"
        >
          <div className="grid-column-reverse">
            <input
              type="checkbox"
              id="todoFormInput"
              className="hidden"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="todoFormInput"
              className="checkerImg-wrapper display-flex"
            >
              <img src={iconCheck} alt="" className="hidden" />
            </label>
            <input
              type="text"
              name="todo"
              value={todoValue}
              onChange={handleChange}
              className="input-todo clr-body"
              placeholder="Create a new todo..."
              required
            />
          </div>
          <img src={iconCross} alt="" className="visibility-hidden" />
          <input type="submit" id="todoFormSubmit" className="hidden" />
        </Form>
        <div className="todolist-container clr-bgtodo round-corner">
          {filteredTodoList
            ? filteredTodoList.map((todo) => (
                <TodoDetails todo={todo} key={todo.id} />
              ))
            : null}
          <div className="todolist-summary spacing-sm display-flex clr-other ">
            <span>{filteredTodoList.length} items left</span>
            <span
              className="cursor-pointer"
              onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
            >
              Clear Completed
            </span>
          </div>
        </div>
        <div className="todo-category display-flex spacing-sm clr-bgtodo clr-other round-corner">
          <input
            type="radio"
            name="todoCategory"
            id="all"
            onChange={handleTodoCategory}
            defaultChecked
            className="hidden"
          />
          <label htmlFor="all">
            <p className="cursor-pointer">All</p>
          </label>
          <input
            type="radio"
            name="todoCategory"
            id="active"
            onChange={handleTodoCategory}
            className="hidden"
          />
          <label htmlFor="active">
            <p className="cursor-pointer">Active</p>
          </label>
          <input
            type="radio"
            name="todoCategory"
            id="completed"
            onChange={handleTodoCategory}
            className="hidden"
          />
          <label htmlFor="completed">
            <p className="cursor-pointer">Completed</p>
          </label>
        </div>
        <p className="drag-attention clr-other">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
};

export default TodoList;
