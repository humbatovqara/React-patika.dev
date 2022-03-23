import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState("Qara");
  
    useEffect(() => {
      console.log('Component mounted');

      const interval = setInterval(() => {
        setNumber((n) => n + 1);
      }, 1000);

    return () => {
        clearInterval(interval);
    }
    }, []);
  
    useEffect(() => {
      console.log("Update Number State");
    }, [number]);
  
    /* useEffect(() => {
      console.log("Update Name State");
    }, [name]); */

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Add one</button>

        <br />
        <hr />
        <br />

        {/* <h1>{name}</h1>
        <button onClick={() => setName('Gara')}>Change Name</button> */}
    </div>
  )
}

export default Counter