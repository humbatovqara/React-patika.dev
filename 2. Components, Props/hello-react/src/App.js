import './App.css';
// import React from 'react';
import Header from './components/Header';

const name = "Qara";
const surname = "Humbatov";
const isLoggedIn = true;

function App() {
  // return React.createElement('div', null, 'Hello');

  return (
    <>
      <h1>Hello React</h1>
      <Header />
      <Header />
      <Header />
   

      <h1>{`My name is ${name}, surname is ${surname}`}</h1>
      <h6>{name} {surname}</h6>

      {/* <h3>
        {isLoggedIn && `My name is ${name}, surname is ${surname}`}
      </h3>

      {!isLoggedIn && "Error Logged In"} */}

      <h4>
        {
          isLoggedIn
            ? `My name is ${name}, surname is ${surname}`
            : "Error Logged In"
        }
      </h4>
    </>
  );
}

export default App;