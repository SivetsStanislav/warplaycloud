import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import CloudGaming from './components/CloudGaming/CloudGaming';
import QuickStart from './components/QuickStart/QuickStart';
import Subscriptiones from './components/Subscriptiones/Subscriptiones';

function App() {
  return (
    <div className='App'>
      <Header />
      <CloudGaming />
      <QuickStart />
      <Subscriptiones />
    </div>
  );
}

export default App;
