import { useState } from "react/cjs/react.development";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [diffResult, setDiffResult] = useState(0);

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setInput(val);
  };

  function handleInput() {
    //please put your logic here
    if (input === "") return;

    const number = parseInt(input, 10);
    const reversedNumb = parseInt(input.split("").reverse().join("", 10));
    const differenceNumb = Math.abs(number - reversedNumb);
    setDiffResult(differenceNumb);
  }

  return (
    <div className="App">
      <div>
        Number:
        <input value={input} onChange={handleInputChange} type="text" />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {diffResult}</div>
    </div>
  );
}
