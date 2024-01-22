import "./App.css";
import { useState } from "react";

function App() {
  let [message, setMessage] = useState("");
  let [putMessage, setPutMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{putMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={message}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setPutMessage(message);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
