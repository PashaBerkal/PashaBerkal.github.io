import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import TodoProvider from "./provider/TodoProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
