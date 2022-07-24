import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function Playground({ item }) {
  const [name, setName] = useState(item);

  const clickHandler = () => {
    document.querySelector("#change").after(
      <Alert key="success" variant="success">
        This is a alert—check it out!
      </Alert>
    );
  };

  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const [count, setCount] = useState(0);

  const updateCount = () => {
    // setTimeout(() => setCount(count + 1), 1000);
    setTimeout(() => setCount((prevCount) => prevCount + 1), 1000);
  };
  return (
    <div>
      <h1 className="changeMe" id="change">
        {name}
      </h1>
      <button onClick={clickHandler} className="btn btn-primary">
        Change
      </button>

      <form>
        <input onChange={inputHandler}></input>
      </form>
      <h1>{input}</h1>

      <h1>{count}</h1>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}
