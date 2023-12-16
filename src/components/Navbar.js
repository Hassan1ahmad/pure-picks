import React,{useState} from 'react'
import '../assets/Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Navbar() {
const [showMobileNav, setShowMobileNav] = useState(false);
const toggleMobileNav=()=>{
  setShowMobileNav(!showMobileNav)

}
const cartcount = useSelector(state=> state.cart)
  return (
    <div>
    <div className="background-desktop">
      {/* left  */}
      <div className="left">
      <div className="logo">
        <img className='pure' src={require('../assets/logo.png')} alt="" />
      </div>
      <div className="nav">
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to="/mens"><li>Men's Wearing</li></Link>
          <Link to="/womens"><li>Women's Wearing</li></Link>
          <Link to="/jewelry"><li>Jewlery</li></Link>
          <Link to="/electronics"><li>Electronics</li></Link>
        </ul>
      </div>
      </div>
     
      {/* right */}
      <div className="right"> 
        <div className="cart">
        <Link to='/cart'><i className="fa-solid fa-bag-shopping"></i></Link><p>{cartcount.length}</p>
        </div>
      </div>
    </div>
     {/* Mobile view */}
     <div className="background-mobile">
     <div className="logo">
        <img className='pure' src={require('../assets/logo.png')} alt="" />
      <i onClick={toggleMobileNav} className="fa-solid fa-caret-down"></i>
      </div>
        <div className="right">
          <div className="cart">
          <Link to='/cart'><i className="fa-solid fa-bag-shopping"><p> {cartcount.length}</p></i></Link> 
          </div>
        </div>
      </div>
     {/* Mobile navigation menu */}
     {showMobileNav && (
        <div className="mobile-nav">
          <ul>
            <Link to="/">
              <li onClick={toggleMobileNav}>Home</li>
            </Link>
            <Link to="/mens" >
              <li onClick={toggleMobileNav}>Men's Wearing</li>
            </Link>
            <Link to="/womens" >
              <li onClick={toggleMobileNav}>Women's Wearing</li>
            </Link>
            <Link to="/jewelry">
              <li onClick={toggleMobileNav}>Jewelry</li>
            </Link>
            <Link to="/electronics">
              <li onClick={toggleMobileNav}>Electronics</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
