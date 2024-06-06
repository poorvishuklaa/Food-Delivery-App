import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const{getTotalAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount()===0?0:10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+10}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button> 
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder