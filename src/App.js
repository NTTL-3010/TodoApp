import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Noteitem from './Pages/Noteitem';
import { HomePage } from './Pages/Home';
import { About } from './Pages/About';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <nav class = "navbar">
            <Link to='/home' className='mylink'>Home</Link>
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/Noteitem' className='mylink'>Todo</Link>
          </nav>
            <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/home' element={<HomePage/>} />
              <Route exact path='/noteitem' element={<Noteitem/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
