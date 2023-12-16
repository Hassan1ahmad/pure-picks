import React,{useEffect, useState} from 'react'
import StarRatings from 'react-star-ratings'
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartslice'
import { useNavigate } from "react-router-dom";
import '../assets/clickedproduct.css'



function Clickedproduct(props) {
  
  const{ productid,togglemodel,isModelOpen} = props

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 
  const fetchdata= async()=>{
    const URL = `https://fakestoreapi.com/products/${productid}` 
    setLoading(true)
    const data =await fetch(URL)
    setLoading(true)
    const json= await data.json()
    setLoading(true)
    setProducts(json)
    setLoading(false)
  }
  
  if (isModelOpen===true) {
    
  }
    useEffect(() => {
      if (isModelOpen===true) {
        fetchdata()
      }
      
      // eslint-disable-next-line 
    }, [isModelOpen]);


  
  return (
    <div className="container1"> 
      <div className="container2" id="style-11">
        {loading===true? (<>
        <div className='loader d-flex justify-content-center align-items-center'>
        <div> <InfinitySpin 
                  width='200'
                  color="#4fa94d"
                />
       </div> </div>
        </>) : (<>
                 <div className="catagory text-center"> <div className='text-end cross-icon'><i onClick={()=>{togglemodel()}} className="fa-solid fa-xmark sticky-top"></i> </div> <span className="badge text-bg-dark text-capitalize">{products.category}</span> </div>
        <div className="first">
          <div className="productimg">
            <img className='pimg' src={products.image} alt="" />

          </div>
          <div className="productdetail">
            <div className="producttitle fs-4">{products.title}</div>
            <div className="rating"><StarRatings
              starRatedColor='yellow'
                rating={products.rating.rate}
                starDimension="20px"
                starSpacing="1px"
            />
            <div>
            {products.rating.count} Ratings | {products.rating.rate} out of 5 {products.rating.rate > 4.5 && <div className="top-rated-box mx-2">Top Rated</div>}

              </div>
                </div> <hr />
            <div className="description" >
              <p className='desc'  id="style-11">{products.description} </p>
            </div> <hr />
            <div className="price">Price:{products.price}&#36;</div>
            <div className="buttons">
              <div onClick={()=>{navigate('/cart');dispatch(addtocart(products))}} className="buy">Buy Now</div>
              <div className="tocart" onClick={(e) => { e.preventDefault(); dispatch(addtocart(products)) }} >Add to Cart</div>
            </div>


          </div>
        </div>

                </>)}
         

      </div>
    </div>
  )
}

export default Clickedproduct
