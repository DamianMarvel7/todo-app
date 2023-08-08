export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          value: action.value,
          isChecked: false,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "SET_CHECKBOX":
      const updatedTodoList = state.map((item) => {
        if (item.id === action.id) {
          let itemChange = {
            id: item.id,
            value: item.value,
            isChecked: !item.isChecked,
          };
          return itemChange;
        }
        return item;
      });
      return updatedTodoList;
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.isChecked);
    default:
      return state;
  }
};
