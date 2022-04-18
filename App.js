
import './App.css';
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Home/services/Services';
import Blogs from './components/blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Footer from './components/footer/Footer';
import Programs from './components/programs/Programs';
import Signup from './components/signUp/Signup';
import NotFound from './components/NotFound/NotFound';
import Requireauth from './components/Requireauth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className='w-75 mx-auto my-3' />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Programs></Programs>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='checkOut' element={
          <Requireauth>
            <CheckOut></CheckOut>
          </Requireauth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <hr className='w-75 mt-4 mx-auto' />
      <Footer></Footer>
    </div>
  );
}

export default App;
