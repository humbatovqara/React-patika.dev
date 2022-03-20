import './App.css';
import User from './components/User';

function App() {
  return (
    <>
      <User name="Qara" surname="Humbatov" age={22} isLoggedIn={true}/>
    </>
  );
}

export default App;