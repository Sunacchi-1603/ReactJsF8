import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/news'element={<News/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
