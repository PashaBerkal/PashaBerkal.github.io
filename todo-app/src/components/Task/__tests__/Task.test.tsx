import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Task from "../Task";
import {
  BUTTON_DELETE_TASK,
  BUTTON_EDIT_TASK,
  BUTTON_SAVE_TASK,
} from "../../../constants/data-test-ids";
import { Task as TaskType } from "../../../types/todo";

const defaultTask: TaskType = {
  id: "1",
  isChecked: false,
  isEdit: false,
  name: "Sample Task",
};
const editTask: TaskType = {
  id: "1",
  isChecked: false,
  isEdit: true,
  name: "Sample Task",
};

const mockUpdateTask = jest.fn();
const mockDeleteTaskById = jest.fn();

describe("Task component", () => {
  it("renders the task name", () => {
    render(
      <Task
        task={defaultTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );
    const taskNameElement = screen.getByText("Sample Task");
    expect(taskNameElement).toBeInTheDocument();
  });

  it("renders the task as unchecked by default", () => {
    render(
      <Task
        task={defaultTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("calls updateTask when checkbox is clicked", () => {
    render(
      <Task
        task={defaultTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockUpdateTask).toHaveBeenCalledWith({
      ...defaultTask,
      isChecked: true,
    });
  });

  it("calls deleteTaskById when delete button is clicked", () => {
    render(
      <Task
        task={defaultTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );
    const deleteButton = screen.getByTestId(BUTTON_DELETE_TASK);
    fireEvent.click(deleteButton);
    expect(mockDeleteTaskById).toHaveBeenCalledWith("1");
  });

  it("switches to edit mode when edit button is clicked", async () => {
    render(
      <Task
        task={defaultTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );

    const editButton = screen.getByTestId(BUTTON_EDIT_TASK);
    fireEvent.click(editButton);
    expect(mockUpdateTask).toBeCalledWith({ ...defaultTask, isEdit: true });
  });

  it("saves the edited value when check button is clicked in edit mode", () => {
    render(
      <Task
        task={editTask}
        updateTask={mockUpdateTask}
        deleteTaskById={mockDeleteTaskById}
      />
    );

    const textField = screen.getByRole("textbox");
    expect(textField).toHaveValue("Sample Task");
    fireEvent.change(textField, { target: { value: "Edited Task" } });

    const saveButton = screen.getByTestId(BUTTON_SAVE_TASK);
    fireEvent.click(saveButton);

    expect(mockUpdateTask).toHaveBeenCalledWith({
      ...editTask,
      name: "Edited Task",
      isEdit: false,
    });
  });
});
