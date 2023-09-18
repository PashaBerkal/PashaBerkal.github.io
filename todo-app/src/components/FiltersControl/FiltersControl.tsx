import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import classes from "./FiltersControl.module.scss";

type SelectOptions = {
  value: string;
  onChange: (
    e: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => void;
  options: string[];
};

type ButtonOptions = {
  name: string;
  onClick: () => void;
};

type FiltersControlProps = {
  buttonOptions: ButtonOptions;
  selectOptions: SelectOptions;
};

const FiltersControl: React.FC<FiltersControlProps> = ({
  buttonOptions,
  selectOptions,
}) => {
  const { onChange, options, value } = selectOptions;
  const { name, onClick } = buttonOptions;
  return (
    <div className={classes.component}>
      <Autocomplete
        fullWidth
        options={options}
        onInputChange={onChange}
        renderInput={(params) => (
          <TextField {...params} label="Filter by" value={value} />
        )}
      />
      <Button className={classes.button} onClick={onClick} variant="contained">
        {name}
      </Button>
    </div>
  );
};

export default FiltersControl;
