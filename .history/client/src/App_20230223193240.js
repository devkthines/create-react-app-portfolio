import Navigation from './components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './pages/resume';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Form from 'react-bootstrap/Form';
import NotFound from './components/notFound';
import { useState,useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
     <Navigation/><BrowserRouter>
    <div className="mainFrame">
      <Routes  basename='/>
        <Route path="/" element={<Home/>} />
        <Route path='/resume' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  </BrowserRouter>
  <footer id="footer" className='d-flex justify-content-between'>
    {/* <Form> */}
        <Form.Check
      onClick={toggleTheme}
        type="switch"
        id="custom-switch"
        // label="Check this switch"
      />
    {/* </Form>  */}
        <h3 id="foot">&lt;dev.Korey&gt;Made With Love&lt;/dev.Korey&gt;</h3>
        </footer>
    </div>
  );
}

export default App;
