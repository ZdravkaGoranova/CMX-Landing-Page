import './App.css';
import { useState } from 'react';

import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    console.log('Switching theme to:', newTheme);
  };
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Main></Main>
      </main>
      
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
