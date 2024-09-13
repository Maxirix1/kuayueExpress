import './style/main.css';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Distribution from './pages/distribution.js'
import { Routes, Route } from 'react-router-dom';
import List from './pages/list.js';
import Branch from './pages/branchdata.js'
import Firstpage from './pages/firstpage.js'
function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homeAdmin/distribution' element={<Distribution />} />
        <Route path='/homeAdmin/list' element={<List />} />
        <Route path='/homeAdmin/data' element={<Branch />} />
        <Route path='/homeAdmin' element={<Firstpage />} />
      </Routes>
  );
}

export default App;
