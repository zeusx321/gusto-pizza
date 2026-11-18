import React, { useState } from 'react';
import starIcon from '../../assets/star.svg';

const Card = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleOrder = () => {
    alert(`Added ${quantity} x ${item.name} to order!`);
  };

  // Format price nicely
  const formattedPrice = typeof item.price === 'number' 
    ? `$${item.price.toFixed(2)}` 
    : `$${item.price}`;

  return (
    <div className="menu-card">
      <div className="menu-card-img-wrapper">
        <img src={item.img} alt={item.name} className="menu-card-img" />
      </div>

      <div className="menu-card-header">
        <h3 className="menu-card-name">{item.name}</h3>
        <div className="menu-card-rate">
          <img src={starIcon} alt="Rating" />
          <span>{item.rating}</span>
        </div>
      </div>

      <div className="menu-card-details">
        <h4 className="menu-card-price">{formattedPrice}</h4>
        
        <div className="menu-card-qty">
          <button 
            type="button"
            className="menu-qty-btn" 
            onClick={handleDecrease}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="menu-qty-value">{quantity}</span>
          <button 
            type="button"
            className="menu-qty-btn" 
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button 
        type="button" 
        className="menu-card-order-btn"
        onClick={handleOrder}
      >
        Order Now
      </button>
    </div>
  );
};

export default Card;
