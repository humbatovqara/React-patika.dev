import {useState} from "react";

function App() {
  const [name, setName] = useState("React");
  const [age, setAge] = useState(21);

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Qara")}>Change Name</button>
      <button onClick={() => setAge(22)}>Change Age</button>
    </div>
  );
}

export default App;