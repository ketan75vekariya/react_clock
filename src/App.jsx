import "./App.css";
import Heading from "./components/Heading";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <center className="main-container">
        <Heading />
        <Clock />
      </center>
    </>
  );
}

export default App;
