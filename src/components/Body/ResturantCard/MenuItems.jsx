import React from "react";
import "./MenuItems.css";

const MenuItems = ({
  name,
  description,
  price,
  image,
  category,
  isVeg,
  isPopular,
}) => {
  return (
    <div className="menu-item-card">
      {/* Item Image */}
      <div className="menu-item-image">
        <img src={image} alt={name} />
        {isPopular && <span className="popular-badge">Popular</span>}
        <div className="veg-indicator">
          <span className={`veg-dot ${isVeg ? "veg" : "non-veg"}`}></span>
          <span className="veg-text">{isVeg ? "Veg" : "Non-Veg"}</span>
        </div>
      </div>

      {/* Item Details */}
      <div className="menu-item-details">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{name}</h3>
          <span className="menu-item-category">{category}</span>
        </div>

        <p className="menu-item-description">{description}</p>

        <div className="menu-item-footer">
          <div className="menu-item-price">₹{price}</div>
          <button className="add-to-cart-btn">
            <i className="fas fa-plus"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
