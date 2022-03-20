import './App.css';
import User from './components/User';

// const friends = ['Nurlan', 'Ulvi', 'Tabriz', 'Fuad'];
const friends = [
  {
    id: 1,
    name: "Nurlan"
  },
  {
    id: 2,
    name: "Ulvi"
  },
  {
    id: 3,
    name: "Tabriz"
  },
  {
    id: 4,
    name: "Fuad"
  },
];

function App() {
  return (
    <>
      <User 
        name="Qara" 
        surname="Humbatov" 
        age={22} 
        isLoggedIn={true}
        // friends = {friends}
      />
    </>
  );
}

export default App;