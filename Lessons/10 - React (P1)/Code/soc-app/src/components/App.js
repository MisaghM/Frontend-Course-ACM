import ButtonParent from './ButtonParent';
import '../assets/styles/App.css';
import MyForm from './MyForm';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

// Hooks:
// useState
// useContext (createContext, useContext, Provider)
// useEffect

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <main>
        <button onClick={() => setTheme('dark')}>Change to dark</button>
        <ButtonParent />
        <MyForm />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
