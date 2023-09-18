import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Tasks from '../Tasks';
import { TodoContext, TodoContextProps } from '../../../context/TodoContext';
import { BUTTON_DELETE_TASK, CHECKBOX_EDIT_TASK } from '../../../constants/data-test-ids';

const mockContextValue: TodoContextProps = {
  tasks: [],
  changeTasks: jest.fn(),
};

const sampleTasks = [
  {
    id: '1',
    isChecked: false,
    isEdit: false,
    name: 'Task 1',
  },
  {
    id: '2',
    isChecked: true,
    isEdit: false,
    name: 'Task 2',
  },
];

describe('Tasks component', () => {
  it('renders the list of tasks', () => {
    render(
        <TodoContext.Provider value={mockContextValue}>
            <Tasks filteredTasks={sampleTasks} />
        </TodoContext.Provider>
    );
    const task1 = screen.getByText('Task 1');
    const task2 = screen.getByText('Task 2');
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
  });

  it('calls deleteTaskById when delete button is clicked', () => {
    render(
        <TodoContext.Provider value={mockContextValue}>
            <Tasks filteredTasks={sampleTasks} />
        </TodoContext.Provider>
    );
    const [ deleteButton ] = screen.getAllByTestId(BUTTON_DELETE_TASK);
    fireEvent.click(deleteButton);
    expect(mockContextValue.changeTasks).toHaveBeenCalled();
  });

  it('calls updateTask when task status is changed', () => {
    render(
        <TodoContext.Provider value={mockContextValue}>
            <Tasks filteredTasks={sampleTasks} />
        </TodoContext.Provider>
    );
    const [ checkbox ] = screen.getAllByTestId(CHECKBOX_EDIT_TASK);
    fireEvent.click(checkbox);
    expect(mockContextValue.changeTasks).toHaveBeenCalled();
  });
});
