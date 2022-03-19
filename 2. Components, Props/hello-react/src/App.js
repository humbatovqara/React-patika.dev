import './App.css';

const name = "Qara";
const surname = "Humbatov";
const isLoggedIn = true;

function App(){ 
  return (
    <>
     <h1>
       {
         isLoggedIn 
          ? `My name isa ${name}, surname is ${surname}` 
          : "Error logged process"
       }
     </h1>
    </>
  )
}

export default App