import React from "react";
import "./FavoriteCities.css";
import NewYork from "./images/newyork.jpg";
import ParisImage from "./images/paris.avif";

const cities = [
  {
    name: "New York City",
    image: NewYork, // Use the imported variable
    description:
      "The city that never sleeps! New York City is known for its iconic skyline, Broadway shows, and diverse culture.",
  },
  {
    name: "Paris",
    image: ParisImage, // Use the imported variable
    description:
      "The City of Love! Paris is famous for its romantic atmosphere, world-class cuisine, and iconic landmarks like the Eiffel Tower.",
  },
  // Add more cities as needed
];

const FavoriteCities = () => {
  return (
    <div class="content">
    <div className="favorite-cities">
      <h2>Favorite Cities</h2>
      <div className="city-list">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.image} alt={city.name} className="city-image" />
            <h3>{city.name}</h3>
            <p>{city.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FavoriteCities;
