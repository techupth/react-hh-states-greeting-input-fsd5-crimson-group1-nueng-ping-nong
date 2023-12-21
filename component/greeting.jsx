import { useState } from "react";

function Greeting() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message"); //for greeting 1

  const [greetingInputText, setGreetingInputText] = //for greeting 2
    useState("Greeting Message");
  const [inputValue, setInputValue] = useState(""); //for greeting 2
  //for greeting 2
  const handleInputChange = (event) => {
    // Update the input value as you type
    setInputValue(event.target.value);
  };
  //for greeting 2
  const handleUpdateText = () => {
    // Update the greeting message with the current input value
    setGreetingInputText(inputValue);
  };

  return (
    <div className="greeting">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>

        <button
          onClick={() => {
            setGreetingMessage("Hi!");
          }}
        >
          Hi!
        </button>

        <button
          onClick={() => {
            setGreetingMessage("你好!");
          }}
        >
          你好!
        </button>
      </div>

      <div className="greeting-2">
        <div className="greeting-container">{greetingInputText}</div>
        <div className="input-container">
          <label htmlFor="input-message">New Greeting Message</label>
          <input
            id="input-message"
            onChange={handleInputChange}
            value={inputValue}
            type="text"
          />
        </div>

        <div className="buttons">
          <button onClick={handleUpdateText}>Update Text</button>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
