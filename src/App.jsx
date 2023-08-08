import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDo, { mainAction, mainLoader } from "./page/ToDo";
import TodoContextProvider from "./contexts/TodoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDo />,
    loader: mainLoader,
    action: mainAction,
  },
]);
function App() {
  return (
    <div className="app">
      <TodoContextProvider>
        <RouterProvider router={router} />
      </TodoContextProvider>
    </div>
  );
}

export default App;
