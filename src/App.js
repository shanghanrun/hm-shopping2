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
import { useAuth } from './store/useAuth';
import { Navigate} from 'react-router-dom'

function App() {
  const {auth} = useAuth()
  function PrivateRoute({Target}){  //PrivateRoute는 컴포넌트라서 태그나 컴포넌트를 리턴해야 된다.
    return auth ===true? <Target />: <Navigate to='/login' />
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<PrivateRoute Target={ProductDetail} />} />
        <Route path='/user' element={<PrivateRoute Target={UserInfo} />}/>
        <Route path='/cart' element={<PrivateRoute Target={Cart} />}/>
        <Route path='/favorite' element={<PrivateRoute Target={Favorite} />}/>
      </Routes>
    </div>
  );
}

export default App;
