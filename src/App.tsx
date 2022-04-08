import './App.css';
import Header from './Header';
import UserApp from './UserApp';

function App() {
  return (
    <div className='App'>
      <Header headerText='Header' extraText='some extra text' />
      <UserApp />
    </div>
  );
}

export default App;
