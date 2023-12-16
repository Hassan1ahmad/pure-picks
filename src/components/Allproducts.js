import React,{useEffect,useState} from 'react'
import Productcard from './Productcard'
import { InfinitySpin } from 'react-loader-spinner';
import '../assets/allproducts.css'
import Clickedproduct from './Clickedproduct';
import { useDispatch,useSelector } from 'react-redux';
import { getproducts } from '../redux/apislice';

function Allproducts() {
    
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [id, setId] = useState('');

    const dispatch = useDispatch()

    const {data : products , loading: loadings} = useSelector(state=> state.api)

    const togglemodel=(clickedproduct)=>{
      setIsModelOpen(!isModelOpen);
      setId(clickedproduct);
    }
   
    // const fetchdata= async()=>{
    //   const URL = 'https://fakestoreapi.com/products'
    //   setLoading(true)
    //   const data =await fetch(URL)
    //   setLoading(true)
    //   const json= await data.json()
    //   setLoading(false)
    //     setProducts(json)
    // }

   useEffect(() => {
    // fetchdata()
    // setLoading(true)
    dispatch(getproducts('products'))
    // setLoading(false)
   }, []);

  return (
    <div className='allproducts'  >
      {loadings===true? (<>
      <div className="loader d-flex justify-content-center align-items-center">
              <div> <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
     </div>  </div>
      </>) : (<div className="container ">
        <div className="header text-center text-dark"><h1><strong>Products Dashboard</strong></h1></div>
    <div className='row justify-content-center'>
        {products.map(product=>{
          return   <Productcard key={product.id} productimg={product.image} productname={product.title} productprice={product.price} productrating={product.rating.rate} productratingcount={product.rating.count} 
          productid={product.id} togglemodel={togglemodel} product={product} />  
        })}   
    </div>
    </div>)}
    <div className={`modal ${isModelOpen=== true? 'd-block' : 'd-none'}`}>
      <Clickedproduct togglemodel={togglemodel} productid={id} isModelOpen={isModelOpen} />
    </div>


    </div>
  )
}

export default Allproducts
