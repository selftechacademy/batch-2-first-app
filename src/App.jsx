import TestResult from "./components/testResult/TestResult";
import CustomButton from "./components/customButton";
import "./App.css";

const App = () => {
  let grade = 95;

  const onPressHandler = () => {
    alert("Hi");
  };

  const putNameHandler = () => {
    alert(prompt("Enter your name"));
  };

  return (
    <div className="header">
      <button onClick={() => alert("Hello")}>Click Here</button>
      <button onClick={onPressHandler}>Press Here</button>
      <button onClick={putNameHandler}>Put Name</button>
      <h2>{grade >= 85 ? "Great Job" : "Good job"}</h2>
      <TestResult />
      <CustomButton />
    </div>
  );
};

export default App;
