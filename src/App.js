import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
