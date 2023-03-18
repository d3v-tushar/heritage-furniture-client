import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
     <Navbar/>
    </div>
  );
}

export default App;
