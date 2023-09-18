import { createContext } from "react";
import { Task } from "../types/todo";

export interface TodoContextProps {
  tasks: Task[];
  changeTasks: (tasks: Task[]) => void;
}

export const LOCAL_STORAGE_TASKS_KEY = "tasks";

export const TodoContext = createContext<TodoContextProps>({
  tasks: [],
  changeTasks: function (tasks: Task[]): void {
    throw new Error("Function not implemented.");
  },
});
