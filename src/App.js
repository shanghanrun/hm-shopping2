import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/user' element={<UserInfo />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
