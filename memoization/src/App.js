import { useState, useMemo, useCallback } from 'react'
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

  /* const data = useMemo(() => {
    return calculateObject();
  }, []); */

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />

      <h1>{number}</h1>

      <hr />

      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

/* function calculateObject() {
  console.log("Calculating ...");

  for (let i = 0; i < 1000000; i++) { }

  console.log("Calculating completed!");

  return { name: "Qara" }
} */

export default App;
