export const setToDo = (todo) => {
  const newTodo = {
    id: crypto.randomUUID(),
    value: todo,
    isChecked: false,
  };
  const existingTodoList = getItem("todo") ?? [];
  localStorage.setItem("todo", JSON.stringify([...existingTodoList, newTodo]));
};

export const setItem = (todoList) => {
  localStorage.setItem("todo", JSON.stringify(todoList));
};

// export const setcheckItem = (id) => {
//   const todoList = getItem("todo") ?? [];

//   const updatedTodoList = todoList.map((item) => {
//     if (item.id === id) {
//       let itemChange = {
//         id: item.id,
//         value: item.value,
//         isChecked: !item.isChecked,
//       };

//       return itemChange;
//     }
//     return item;
//   });

//   localStorage.setItem("todo", JSON.stringify(updatedTodoList));
// };

export const setcheckItem = (id, isChecked) => {
  const todoList = getItem("todo") ?? [];

  const updatedTodoList = todoList.map((item) => {
    if (item.id === id) {
      let itemChange = { id: item.id, value: item.value, isChecked };
      return itemChange;
    }
    return item;
  });
  localStorage.setItem("todo", JSON.stringify(updatedTodoList));
};

export const getItem = () => {
  return JSON.parse(localStorage.getItem("todo"));
};

export const deleteCheckedItem = () => {
  const todoList = getItem("todo") ?? [];
  todoList.map((item) => {
    if (item.isChecked) {
      deleteItem(item.id);
    }
  });
};

export const deleteItem = (id) => {
  const existingTodoList = getItem("todo") ?? [];
  localStorage.setItem(
    "todo",
    JSON.stringify(existingTodoList.filter((todo) => todo.id !== id))
  );
};

export const todoListSelection = (filteredTodoList, categoryTodo) => {
  if (categoryTodo === "active") {
    filteredTodoList = filteredTodoList
      ? filteredTodoList.filter((todo) => !todo.isChecked)
      : [];
  } else if (categoryTodo === "completed") {
    filteredTodoList = filteredTodoList
      ? filteredTodoList.filter((todo) => todo.isChecked)
      : [];
  }
  return filteredTodoList;
};
