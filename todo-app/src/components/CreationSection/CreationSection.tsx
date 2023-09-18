import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import classes from "./CreationSection.module.scss";
import { TodoContext } from "../../context/TodoContext";
import { Task } from "../../types/todo";

const CreationSection = () => {
  const { tasks, changeTasks } = useContext(TodoContext);
  const [value, setValue] = useState<string>("");

  const addTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      name: value,
      isChecked: false,
      isEdit: false,
    };
    const copyTasks = [...tasks];
    copyTasks.unshift(newTask);
    changeTasks(copyTasks);
    setValue("");
  };

  return (
    <div className={classes.component}>
      <TextField
        fullWidth
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button onClick={addTask} variant="contained">
        Add
      </Button>
    </div>
  );
};

export default CreationSection;
