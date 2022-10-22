import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { HomePage } from './components/Home';
import { About } from './components/About';
import { Todo } from './components/Todo';
import { MyContextProvider } from './contexts/MyContext';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <nav class = "navbar">
            <Link to='/home' className='mylink'>Home</Link>
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/todos' className='mylink'>TODOs</Link>
            <Link to='/login' className='mylink'>Login</Link>
          </nav>
          <TodoContextProvider>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/home' element={<HomePage />} />
              <Route exact path='/todos' element={<Todo />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </TodoContextProvider>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;