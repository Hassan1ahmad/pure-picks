import React,{useState,useEffect} from 'react'
import '../assets//cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcart } from '../redux/cartslice'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import Processing from './Processing';

const shipping = Math.floor(Math.random() * 5) + 5;

function Carts() {
  const cartitems= useSelector(state=>state.cart)
  const dispatch = useDispatch()


  // Calculate the sum of prices using reduce
  const totalPrice = cartitems.reduce((sum, product) => sum + product.price, 0);
  const subtotal = Math.floor( totalPrice===0? '0': totalPrice + shipping)
  

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [maxLength, setMaxLength] = useState('');
  const [error, setError] = useState('');
  const [iscardvalid, setIscardvalid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showpaymentcard, setShowpaymentcard] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
     // eslint-disable-next-line
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleCardNumberChange = (type,isvalid) => {
    setMaxLength(type.maxLength)
    setIscardvalid(isvalid)
  }

  const handlesubmitclicked=(e)=>{
    e.preventDefault()
    if (totalPrice === 0) {
      setError('Please select items before checkout')
    } 
    else if(iscardvalid === false){
      setError('Please use valid card details')
    } 
    else {
      setError('')
      setIsModalOpen(true);
    }
  }
  const closeModal = () => {
    setIsModalOpen(false);
    // Perform any other actions you want to do after the loading messages are completed
  };

  const handleclickedforpaymentdesktop=()=>{
    if (totalPrice=== 0){
       setError('Please select item before placing order');
    }
    else if(showpaymentcard===false){
      setShowpaymentcard(true);
      setError('')
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    }
  }
  const handleclickedforpaymentmobile=()=>{
    if (totalPrice=== 0){
       setError('Please select item before placing order');
    }
    else if(showpaymentcard===false){
      setShowpaymentcard(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      setError('')
      
    }
  }
  

  

  return (
    <div>
      
       <div className="cart-container">
      <div className="left-cart-items">
        <div className='fw-bold fs-3'> Continue Shopping </div>
        <Processing isOpen={isModalOpen} onClose={closeModal}/>
        <hr />
        <div className='mb-3 '> <strong>Shopping Cart </strong> <br /> You have {cartitems.length} items in your cart</div>
        {/* ==========cart card============= */}
        {cartitems.map(item=>{
          return  <div key={item.reduxid} className="cart-card">
          <div className="left-cart-card">
            <div className="cart-card-img">
            <img className='cart-card-img' src={item.image} alt="" />
            </div>
            <div className="cart-title ps-2">
              <div className='mb-1 fw-bolder'>{item.title}</div>
              <div className='text-capitalize'>{item.category}</div>
            </div>
          </div>
          <div className="right-cart-card ">
            <div className="cart-price fs-4 ">{item.price}&#36;</div>
            <div onClick={()=>{dispatch(removefromcart(item.reduxid))}} className="cart-del fs-3 "><i className="fa-regular fa-trash-can"></i></div>
          </div>
        </div>
        })}
       
      </div>
      {/* =====payment===== */}
      <div className="right-payment-card">
      {showpaymentcard===false? (<> <button onClick={handleclickedforpaymentdesktop} className={`place-order-btn-desktop`}>Place Order</button>   <button onClick={handleclickedforpaymentmobile} className={`place-order-btn-mobile`}>Place Order</button>    <div className="error-message">{error}</div>
      </>):
      (<div className="card-detail">
      <p className='ps-2 fs-4 fw-bold text-light '>Payment Details</p>
      <div className="card-format">
    <Cards
    number={state.number}
    expiry={state.expiry}
    cvc={state.cvc}
    name={state.name}
    focused={state.focus}
    callback={handleCardNumberChange}
  />
      </div>
      {/* =====form======== */}
            <form onSubmit={handlesubmitclicked} className="payment-form">
    <div className="form-row">
      <label className='text-light' htmlFor="cnumber">Card Number:</label>
      <input
        type="text"
        name="number"
        placeholder="1111 2222 3333 4444"
        value={state.number}
        id='cnumber'
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        maxLength={maxLength}
        required
        
      />
    </div>
    <div className="form-row">
      <label className='text-light' htmlFor="cname">Cardholder Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        required
      />
    </div>
    <div className="form-row">
   <div className="expiry-cvv">
  <div>
    <label className='text-light' htmlFor="cexpiry">Expiration date:</label>
    <input
      className='cart-expiry'
      type="text"
      name="expiry"
      placeholder="MM/YY"
      value={state.expiry}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      maxLength={4}
      required
    />
  </div>
  <div>
    <label className='text-light' htmlFor="ccvv">CVV:</label>
    <input
    className='cart-cvv'
      type="tel"
      name="cvc"
      placeholder="123"
      value={state.cvc}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      maxLength={3}
      required
    />
        </div>
      </div>
    </div>
    <hr/>
  <div className="checkout-amount text-light">
    <div className="total-product-price">
      <div className="subtotal">Subtotal</div>
      <div className="subtotal-price">&#36;{totalPrice}</div>
    </div>
    <div className="ship">
      <div className="shipping">Shipping</div>
      <div className="shipping-price">&#36;{totalPrice===0? '0': shipping}</div>
    </div>
    <div className="total">
      <div className="tatal-tax">Total (Tax incl.)</div>
      <div className="total-tax-price">&#36;{subtotal} </div>
    </div>
    <div className="error-message">{error}</div>
     <button type='submit' className="checkout-box">
      <div className="checkout-price">&#36;{subtotal}</div>
     <div className="checkout">Checkout &#8594;</div>
     </button>

  </div>

  </form>
  
    
    </div>)}

    </div>
      
      
      
      </div>
      
    </div>
  )
}

export default Carts
