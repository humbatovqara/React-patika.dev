// import React from 'react';
import './App.css';
// import Header from './components/Header';

const name = "Qara";

const surname = "Humbatov";
const isLoggedIn = true;

function App(){ 
  // return React.createElement('div', null, 'Hello');

  return (
    <>
      {/* <h1>Hello React</h1>
      <Header></Header>
      <Header></Header>
      <Header></Header> */}
      <h1>{name} {surname}</h1>
      <h2>{`My name is ${name}, surname is ${surname}`}</h2>

      {/* <h3>
        {isLoggedIn && `My name is ${name}, surname is ${surname}`}
      </h3>

      {!isLoggedIn && 'Error logged process'} */}

     <h4>
       {
         isLoggedIn 
          ? `My name is ${name}, surname is ${surname}` 
          : "Error logged process"
       }
     </h4>
    </>
  )
}

export default App