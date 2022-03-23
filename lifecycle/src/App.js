import { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Qara");

  useEffect(() => {
    console.log("Update Number State");
  }, [number]);

  useEffect(() => {
    console.log("Update Name State");
  }, [name]);

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Add one</button>

      <br />
      <hr />
      <br />

      <h1>{name}</h1>
      <button onClick={() => setName('Gara')}>Change Name</button>
    </div>
  );
}

export default App;
