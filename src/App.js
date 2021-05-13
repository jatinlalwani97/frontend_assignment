import { useState } from "react";
// import "./styles.css";

export default function App() {
  // for creating an array of first 10 nums
  const [, ...result] = Array(11).keys();
  // state variable for controlling input's value
  const [value, setValue] = useState();
  return (
    <div className="App">
      <input
        value={value}
        type="number"
        name="input-num"
        onChange={({ target }) => setValue(target.value)}
      />
      {result.length > 0 &&
        value &&
        result.map((i) => <p>{`${value} x ${i} = ${value * i}`}</p>)}
    </div>
  );
}