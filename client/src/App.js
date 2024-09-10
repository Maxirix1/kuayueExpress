import './style/main.css';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Tracking from './pages/ariamairu.jsx'
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
        <Route path='/Tracking' element={<Tracking />} />
      </Routes>
  );
}

export default App;
