import React, { useState } from "react";
import ResturantCard from "./ResturantCard/ResturantCard";
import "./Body.css";
import resData from "../../data/data.json";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utility/useOnlineStatus";

// { name, cuisine, rating, time, imgSrc, offer, tag }

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [filterData, setFilterData] = useState(resData);
  const [searchInput, setSearchInput] = useState("");

  const handleRating = () => {
    const filteredResturant = filterData.filter(({ rating }) => rating >= 4.5);
    setFilterData(filteredResturant);
  };

  const handleSearch = () => {
    const data = resData.filter(({ name }) => {
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilterData(data);
    setSearchInput("");
  };

  if (!onlineStatus) {
    return <div>Looks like you are Offline!!!</div>;
  }

  return filterData.length === 0 ? (
    <>
      <h1>loading...</h1>
    </>
  ) : (
    <div className="res-body">
      <div className="search">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurants or cuisines..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="clear-btn" onClick={() => setFilterData(resData)}>
            Clear
          </button>
        </div>
      </div>
      <div className="filter-bar">
        <button className="filter-btn" onClick={handleRating}>
          ⭐ Top Rated
        </button>
      </div>
      <div className="res-container">
        {filterData.map(
          ({ id, name, cuisine, rating, time, imgSrc, offer, tag, price }) => {
            return (
              <Link to={`/resturant/${id}`}>
                {" "}
                <ResturantCard
                  key={id}
                  name={name}
                  cuisine={cuisine}
                  rating={rating}
                  time={time}
                  imgSrc={imgSrc}
                  offer={offer}
                  tag={tag}
                  price={price}
                />
              </Link>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Body;
