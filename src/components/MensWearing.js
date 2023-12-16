import React,{useEffect,useState} from 'react'
import Productcard from './Productcard'
import { InfinitySpin } from 'react-loader-spinner';
import '../assets/allproducts.css'
import Clickedproduct from './Clickedproduct';

function MensWearing() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [id, setId] = useState('');

    const togglemodel=(clickedproduct)=>{
      setIsModelOpen(!isModelOpen);
      setId(clickedproduct);
    }
   


    const fetchdata= async()=>{
      const URL = `https://fakestoreapi.com/products/category/men's clothing`
      setLoading(true)
      const data =await fetch(URL)
      setLoading(true)
      const json= await data.json()
      setLoading(false)
        setProducts(json)
    }
   useEffect(() => {
    fetchdata()
   }, []);

  return (
    <div className='mt-5'>
    <div className='allproducts'  >
      {loading===true? (<>
      <div className="loader d-flex justify-content-center align-items-center">
              <div> <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
     </div>  </div>
      </>) : (<div className="container ">
        <div className="header text-center text-dark"><h1><strong>Men's Wearing</strong></h1></div>
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
    </div>
  )
}

export default MensWearing
