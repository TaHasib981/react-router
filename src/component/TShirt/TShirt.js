import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    const {tshirt,  handleAddToCart} = props
    const { name, picture, price } =tshirt
    return (
        <div className='shirt-contaier'>

            <img className='image' src={picture} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <button onClick={()=> handleAddToCart(tshirt)}>Add to Cart</button>
            </div>

        </div>
    );
};

export default TShirt;