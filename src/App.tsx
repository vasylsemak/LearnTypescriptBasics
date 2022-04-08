import './App.css';
import Header from './Header';
import UserApp from './UserApp';
import CounterApp from './counter-app';

function App() {
  return (
    <div className='App'>
      <Header headerText='Header' extraText='some extra text' />
      <UserApp />
      <CounterApp />
    </div>
  );
}

export default App;
