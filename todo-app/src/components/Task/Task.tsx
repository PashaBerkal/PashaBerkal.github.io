import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColor from "@mui/icons-material/BorderColor";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Task as TaskType } from "../../types/todo";
import classes from "./Task.module.scss";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  BUTTON_DELETE_TASK,
  BUTTON_EDIT_TASK,
  BUTTON_SAVE_TASK,
  CHECKBOX_EDIT_TASK,
  LIST_ITEM_TASK,
} from "../../constants/data-test-ids";

type TaskProps = {
  task: TaskType;
  updateTask: (task: TaskType) => void;
  deleteTaskById: (id: string) => void;
};

const Task: React.FC<TaskProps> = ({ task, updateTask, deleteTaskById }) => {
  const { id, isChecked, isEdit, name } = task;
  const [value, setValue] = useState<string>(name);

  const saveValue = () => {
    task.name = value;
  };

  const onChangeEditMode = (isEdit: boolean) => {
    if (!isEdit) {
      saveValue();
    }

    task.isEdit = isEdit;
    updateTask(task);
  };

  const onChangeStatus = () => {
    task.isChecked = !isChecked;
    updateTask(task);
  };

  return (
    <ListItem
      className={classes.component}
      disablePadding
      data-testid={LIST_ITEM_TASK}
      secondaryAction={
        <div className={classes.secondaryAction}>
          {isEdit ? (
            <>
              <IconButton
                onClick={() => onChangeEditMode(false)}
                data-testid={BUTTON_SAVE_TASK}
              >
                <CheckCircle />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                data-testid={BUTTON_DELETE_TASK}
                onClick={() => deleteTaskById(id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                data-testid={BUTTON_EDIT_TASK}
                onClick={() => onChangeEditMode(true)}
              >
                <BorderColor />
              </IconButton>
            </>
          )}
        </div>
      }
    >
      <ListItemIcon>
        <Checkbox
          data-testid={CHECKBOX_EDIT_TASK}
          onClick={onChangeStatus}
          checked={isChecked}
        />
      </ListItemIcon>
      {isEdit ? (
        <TextField
          name="task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <ListItemText primary={value} />
      )}
    </ListItem>
  );
};

export default Task;
