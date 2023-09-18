import Todo from "../Todo/Todo";
import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.component}>
      <h1>Todo app</h1>
      <Todo />
    </div>
  );
};

export default App;
