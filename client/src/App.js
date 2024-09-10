import './style/main.css';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
  );
}

export default App;
