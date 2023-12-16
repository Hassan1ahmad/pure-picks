import React,{useState} from 'react'
import StarRatings from 'react-star-ratings';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartslice';
import '../assets/allproducts.css'

function Productcard(props) {
    const {productid,productimg, productname, productprice,productrating,productratingcount,togglemodel, product} = props

    const [buttonText, setButtonText] = useState('Add to Cart');

    const dispatch = useDispatch()

    const handleclick=()=>{
        togglemodel(productid)
    }
    setTimeout(() => {
      setButtonText('Add to Cart');
    }, 3000);
    
  return (
    <div className=' pcard col-md-4 mb-3' >
      <div className="card"  style={{width : '18rem'}}>
        <div className="text-center">
  <img src={productimg} onClick={handleclick} className="card-pointer card-img-top" alt="..." style={{ width:'100px', height: '130px'}}/>
  </div>
  <hr className='mb-0' />
  <div className="card-body ">
    <h5 className="card-title card-pointer-title" onClick={handleclick} style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2, textOverflow: 'ellipsis' }}>{productname}</h5>
    <div className="card-text mb-3"> <p className='mb-0'> <strong>Price:</strong> {productprice}&#36;  </p> 
    <StarRatings
    starRatedColor='yellow'
      rating={productrating}
      starDimension="20px"
      starSpacing="1px"
    /><p style={{top: '3px'}} className='d-inline position-relative top-3'> ({productratingcount}) </p>
    </div>
    <div className="text-center">
    <button href="/" className="btn btn-outline-info" disabled={buttonText === 'Added to Cart'} onClick={(e) => { e.preventDefault(); dispatch(addtocart(product));setButtonText('Added to Cart'); }}>{buttonText}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Productcard
