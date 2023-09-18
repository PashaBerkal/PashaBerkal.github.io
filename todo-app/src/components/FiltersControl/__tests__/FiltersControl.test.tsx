import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FiltersControl from "../FiltersControl";

describe("FiltersControl component", () => {
  const sampleButtonOptions = {
    name: "Clear Completed",
    onClick: jest.fn(),
  };

  const sampleSelectOptions = {
    value: "",
    onChange: jest.fn(),
    options: ["Option 1", "Option 2", "Option 3"],
  };

  it("renders Autocomplete and Button", () => {
    render(
      <FiltersControl
        buttonOptions={sampleButtonOptions}
        selectOptions={sampleSelectOptions}
      />
    );
    const input = screen.getByLabelText("Filter by");
    const button = screen.getByRole("button", { name: "Clear Completed" });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    render(
      <FiltersControl
        buttonOptions={sampleButtonOptions}
        selectOptions={sampleSelectOptions}
      />
    );
    const input = screen.getByLabelText("Filter by");
    fireEvent.change(input, { target: { value: "Option 1" } });
    expect(sampleSelectOptions.onChange).toHaveBeenCalled();
  });

  it("calls onClick when button is clicked", () => {
    render(
      <FiltersControl
        buttonOptions={sampleButtonOptions}
        selectOptions={sampleSelectOptions}
      />
    );
    const button = screen.getByText("Clear Completed");
    fireEvent.click(button);
    expect(sampleButtonOptions.onClick).toHaveBeenCalled();
  });
});
