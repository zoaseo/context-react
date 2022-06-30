import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [ isDark, setIsDark ] = useState('false');
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
    <div className="App">
        {/* <MainPage isDark={isDark} setIsDark={setIsDark}/> */}
        <MainPage/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
