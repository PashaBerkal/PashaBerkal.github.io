import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreationSection from "../CreationSection";
import { TodoContext, TodoContextProps } from "../../../context/TodoContext";

const mockContextValue: TodoContextProps = {
  tasks: [],
  changeTasks: jest.fn(),
};

describe("CreationSection component", () => {
  it("renders text input and add button", () => {
    render(
      <TodoContext.Provider value={mockContextValue}>
        <CreationSection />
      </TodoContext.Provider>
    );
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add");
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("updates input value when user types", () => {
    render(
      <TodoContext.Provider value={mockContextValue}>
        <CreationSection />
      </TodoContext.Provider>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Task" } });
    expect(input).toHaveValue("New Task");
  });

  it("calls addTask when add button is clicked", () => {
    render(
      <TodoContext.Provider value={mockContextValue}>
        <CreationSection />
      </TodoContext.Provider>
    );
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    expect(mockContextValue.changeTasks).toHaveBeenCalled();
  });
});
