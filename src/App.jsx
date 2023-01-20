import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import CloudGaming from './components/CloudGaming/CloudGaming';
import QuickStart from './components/QuickStart/QuickStart';
import Subscriptiones from './components/Subscriptiones/Subscriptiones';
import Browser from './components/Browser/Browser';
import GameServers from './components/GameServers/GameServers';

function App() {
  return (
    <div className='App'>
      <Header />
      <CloudGaming />
      <QuickStart />
      <Subscriptiones />
      <Browser />
      <GameServers />
    </div>
  );
}

export default App;
