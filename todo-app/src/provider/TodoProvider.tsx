import { useState } from "react";
import { LOCAL_STORAGE_TASKS_KEY, TodoContext } from "../context/TodoContext";
import { Task } from "../types/todo";

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const defaultTasks: Task[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TASKS_KEY) || "[]"
  );

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const changeTasks = (tasks: Task[]) => {
    setTasks(tasks);
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
  };

  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        changeTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
