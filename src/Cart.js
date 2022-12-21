import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    }=useCart();
    if(isEmpty) return (
      <div className='text-center mt-5 cart-containers'>
        <h3><i className="fa-solid fa-cart-shopping"> Cart is Em pty</i></h3>
      </div>
    );
    
  return (
    <div>
    <section className='container cart-item'>
       <div className='row justify-content-center'>
         <div className='col-12 mt-5'>
            <h5><i className=" font fa-solid fa-cart-shopping"><sup>{totalUniqueItems}</sup></i></h5>
            <table className='table table-light table-hover m-0'>
              <tbody>
              {items.map((item,index)=>{
                return(
                 <tr key={index}>
                  <td>
                    <img src={item.image}></img>
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>Quantity<sup>({item.quantity})</sup></td>
                  <td>
                    <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button> 
                    <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button> 
                    <button className='btn btn-info ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                  </td>
                 </tr>);
              })}
            </tbody>
            </table>

         </div>

       </div>

     </section>      
    </div>
           
       
  )
}

export default Cart
