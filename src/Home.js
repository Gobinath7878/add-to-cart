import React from 'react'
import Card from './Card'
import Data from  './Data'
import {Link} from "react-router-dom";
import Cart from './Cart'

 const Home=() => {
    
  return (
<>
<div className='nav-flex'>
    <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='contianer px-4 px-lg-5'>
            <h1 className='navbar-brand' >Go-Na Shop</h1>           
        </div>
    </nav>

        <div className='nav-right'>
                 
                <li className='nav-item'>
                    <h3 className='nav-link active text-white'>Home</h3>
                </li>
                <li className='nav-item'>
                <h3 className='nav-link text-white' aria-current='page'>About</h3>
                </li>
                <li className='nav-item dropdown'>
                <h3 className='nav-link text-white' aria-current='page'>Shop</h3>
                </li>
          

               <form className='d-flex '>
                <button className='btn btn-outline text-white' href='home' type='submit'>
                    <Link to="/Cart"></Link>
                </button>
               </form>
        </div>                     
</div>
         
    <Cart/>

    <section>
    <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {Data.productItems.map((item,index) =>{
            return(
            <Card image={item.image} title={item.title} price={item.price} item={item} key={index}/>
            )
          })}
          
        </div>
    </div>
    
    </section>
    
   </>
   
  );
  
}

export default Home






