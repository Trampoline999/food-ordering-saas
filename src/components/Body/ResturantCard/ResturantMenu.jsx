import React from "react";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import "./ResturantMenu.css";
import useRestaurant from "../../../utility/useRestaurant";

const ResturantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return (
      <div className="menu-loading">
        <div className="loading-spinner"></div>
        <p>Restaurant not found...</p>
      </div>
    );
  }

  if (!restaurant.menuItems) {
    return (
      <div className="menu-loading">
        <div className="loading-spinner"></div>
        <p>Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="restaurant-menu">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <div className="restaurant-meta">
            <span className="cuisine">{restaurant.cuisine}</span>
            <span className="rating">⭐ {restaurant.rating}</span>
            <span className="time">{restaurant.time}</span>
          </div>
          <div className="restaurant-offer">
            <span className="offer-tag">{restaurant.offer}</span>
          </div>
        </div>
        <div className="restaurant-image">
          <img src={restaurant.imgSrc} alt={restaurant.name} />
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items-grid">
        {restaurant.menuItems.map((item) => (
          <MenuItems
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
            isVeg={item.isVeg}
            isPopular={item.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
