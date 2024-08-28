import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, description, price, image}) => {
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={url + "/images/" +image} alt="" className="food-item-image" />
            {!cartItems[id]
                ?<img src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="" className="add" />
                :<div className="food-item-counter">
                    <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    <p>{cartItems[id]}</p>
                    <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem