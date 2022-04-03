import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tshirts, setTshirts] = useTShirt([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) =>{
        const exists = cart.find(tshirt=> tshirt.id === selectedItem.id)
        if(!exists){
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert('its alredy exists')
        }
    }
    const removeFromCart = (selectedItem) =>{
       const rest = cart.filter(tshirt=> tshirt.id !== selectedItem.id) 
       setCart(rest)         
    }
    const allDelete = () =>{
        const reset = []
        setCart(reset)
    }
  let onlyOne = 0
    const choooseOne = () =>{
        onlyOne = onlyOne + 1
    }
    return (

        <div className="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart} removeFromCart={removeFromCart} allDelete={allDelete}></Cart>
            </div>
        </div>
    );
};

export default Home;