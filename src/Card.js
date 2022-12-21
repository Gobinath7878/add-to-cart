import React from 'react'
import {useCart} from "react-use-cart"
import Rating from '@mui/material/Rating';

const Card=(props)=> {
    const {addItem}=useCart();
  return (
<>

    <div className="col mb-5">
        <div className='card h-100'>
        <img src={props.image} className="card-img-top" alt={props.image}/>
       
    
       <div className="card-body p-4">
          <div className='text-center'>
             <h5 className="card-title">{props.title}</h5>
             <Rating name="no-value"  />
        <br></br>
        ${props.price}
          </div>
        </div>

        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'> 
            <div className='text-center'>
              <button className="btn btn-outline-dark mt-auto" onClick={()=>addItem(props.item)}>Add to Cart</button>
  
            </div>  
        </div>

    </div>
</div>
</>   
  );
};

export default Card