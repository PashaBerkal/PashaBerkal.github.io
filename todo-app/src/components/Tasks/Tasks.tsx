import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Task as TaskType } from "../../types/todo";
import Task from "../Task/Task";
import classes from "./Tasks.module.scss";
import { List } from "@mui/material";

type TasksProps = {
  filteredTasks: TaskType[];
};

const Tasks: React.FC<TasksProps> = ({ filteredTasks }) => {
  const { tasks, changeTasks } = useContext(TodoContext);

  const deleteTaskById = (id: string) => {
    const filterTasks = [...tasks].filter((task) => task.id !== id);
    changeTasks(filterTasks);
  };

  const updateTask = (task: TaskType) => {
    const copiedTasks = [...tasks];
    const taskIndex = copiedTasks.findIndex(({ id }) => id === task.id);
    copiedTasks[taskIndex] = task;
    changeTasks(copiedTasks);
  };

  return (
    <List className={classes.component}>
      {filteredTasks.map((task) => {
        return (
          <Task
            deleteTaskById={deleteTaskById}
            updateTask={updateTask}
            task={task}
            key={task.id}
          />
        );
      })}
    </List>
  );
};

export default Tasks;
