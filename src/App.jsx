import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import CloudGaming from './components/CloudGaming/CloudGaming';
import QuickStart from './components/QuickStart/QuickStart';

function App() {
  return (
    <div className='App'>
      <Header />
      <CloudGaming />
      <QuickStart />
    </div>
  );
}

export default App;
