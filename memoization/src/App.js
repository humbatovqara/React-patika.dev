import { useState, useMemo } from 'react'
import Header from './components/Header';
import './App.css';

// Type 1 
// const data = { name: "Qara" }

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("");

  /* const data = useMemo(() => {
    return { name: "Qara" }
  }, [number]) */

  const data = useMemo(() => {
    return calculateObject();
  }, []);

  return (
    <div className="App">
      <Header data={data} />
      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

function calculateObject() {
  console.log("Calculating ...");

  for (let i = 0; i < 1000000; i++) { }

  console.log("Calculating completed!");

  return { name: "Qara" }
}

export default App;
