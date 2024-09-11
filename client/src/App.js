import './style/main.css';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Tracking from './pages/homeAdmin.js'
import { Routes, Route } from 'react-router-dom';
import List from './pages/list.js';
import Branch from './pages/branchdata.js'
function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homeAdmin' element={<Tracking />} />
        <Route path='/homeAdmin/list' element={<List />} />
        <Route path='/homeAdmin/data' element={<Branch />} />
        </Routes>
  );
}

export default App;
