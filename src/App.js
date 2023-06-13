import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Login from './Login';
import Search from './Search';

function App() {
  return (
    <div className="App">
    <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
