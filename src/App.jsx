import { useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  let [showMassage, setShowMassage] = useState("Greeting Message");

  let handdleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{showMassage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>

        <input id="greeting-message" type="text" onChange={handdleInput} />
      </div>
      {/*onClick={}*/}
      <div className="buttons">
        <button
          onClick={() => {
            setShowMassage(input);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
