import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, removeFromCart, allDelete } = props

    //Conditional Randering 
    let command
    if (cart.length === 0) {
        command = 'plase buy something frome shop'
    }
    else if (cart.length <= 2) {
        command = 'select more product from here'
    }

    return (
        <div>
            <h1>Cart Section</h1>
            {command}
            {
                cart.map(tshirt =>
                    <p>{tshirt.name}
                        <button onClick={() => removeFromCart(tshirt)}>x</button>
                    </p>,

                )
            }
            {cart.length === 2 || <p className='hasib2'>thans for buying</p>}
            {cart.length === 4 && <button onClick={()=> allDelete()}>delete all products</button>}
            {cart.length !== 4 ? <p>keep adding</p> : <button >Choose one for free</button>}


        </div>
    );
};

export default Cart;