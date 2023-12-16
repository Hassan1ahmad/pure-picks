import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../assets/home.css'
import { Link } from 'react-router-dom';
import Allproducts from './Allproducts';


function Home() {
    
  return (
    <div className='home-background'  >
          <Carousel infiniteLoop='true' autoPlay='true'   >
                <div className='main-div'>
                    <img className='carousel-image'  src={require('../assets/men.jpg')} alt="this is" />
                    <Link to="/mens" > <p className="legend">Men's Clothing</p> </Link> 
                </div>
                <div>
                <img className='carousel-image' src={require('../assets/women.jpg')} alt="this is" />
                <Link to="/womens" > <p className="legend">Women's clothing</p>  </Link>
                </div>
                <div>
                <img className='carousel-image' src={require('../assets/jewlory.jpg')} alt="this is" />
                <Link to="/jewelry" > <p className="legend">Jewelery</p> </Link>
                    
                </div>
                <div>
                <img className='carousel-image' src={require('../assets/electronics.jpg')} alt="this is" />
                <Link to="/electronics" > <p className="legend">Electronics</p> </Link>
                    
                </div>
            </Carousel>

            <div className="allproducts">
                <Allproducts/>
            </div>


    </div>
  )
}

export default Home
