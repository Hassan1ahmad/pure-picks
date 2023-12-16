import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carts from './components/Carts';
import MensWearing from './components/MensWearing';
import Womenwearing from './components/Womenwearing';
import Jewelery from './components/Jewelery';
import Electronics from './components/Electronics';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
     <BrowserRouter>
     <Navbar/>
     <div className="content">
     <Routes>
      <Route index element={<Home/>} />
      <Route path='/mens' element={<MensWearing/>} />
      <Route path='/womens' element={<Womenwearing/>} />
      <Route path='/jewelry' element={<Jewelery/> } />
      <Route path='//electronics' element={<Electronics/> } />
      <Route path='/cart' element={<Carts/>} />
     </Routes>
     </div>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
