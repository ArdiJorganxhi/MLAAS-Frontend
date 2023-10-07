import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';
import AuthPage from './pages/auth-page/authPage';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/get-started' element={<AuthPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
