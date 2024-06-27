import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App${theme}`}>
      <Navigation theme={theme} setTheme={setTheme} />
      <Body theme={theme} setTheme={setTheme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;

