import { useContext, useState } from "react";
import CreationSection from "../CreationSection";
import FiltersControl from "../FiltersControl";
import { TodoContext } from "../../context/TodoContext";
import Tasks from "../Tasks";
import { Filter, SelectedFilterValue } from "../../types/filters";
import { Task } from "../../types/todo";

const Todo: React.FC = () => {
  const { tasks, changeTasks } = useContext(TodoContext);
  const [value, setValue] = useState<SelectedFilterValue>(Filter.ALL);

  const options = [Filter.ALL, Filter.ACTIVE, Filter.COMPLETED];
  const onChangeFilterValue = (
    e: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setValue(newInputValue as SelectedFilterValue);
  };

  const onClearCompleted = () => {
    const notCompletedTasks = [...tasks].filter(
      (task) => task.isChecked === false
    );
    changeTasks(notCompletedTasks);
  };

  const filterTasks: Task[] = tasks.filter((task) => {
    switch (value) {
      case Filter.ALL:
        return true;
      case Filter.ACTIVE:
        return task.isChecked === false;
      case Filter.COMPLETED:
        return task.isChecked === true;
      default:
        return true;
    }
  });

  const selectOptions = {
    onChange: onChangeFilterValue,
    options,
    value,
  };

  const buttonOptions = {
    name: "Clear Completed",
    onClick: onClearCompleted,
  };

  return (
    <div>
      <h1>Todo</h1>
      <CreationSection />
      <FiltersControl
        selectOptions={selectOptions}
        buttonOptions={buttonOptions}
      />
      <Tasks filteredTasks={filterTasks} />
    </div>
  );
};

export default Todo;
