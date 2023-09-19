import React from "react";
import "./FavoritePersonalities.css";
import messiImage from "./images/messi.jpg";
import aliImage from "./images/ali.jpg";

const FavoritePersonalities = () => {
  const personalities = [
    {
      name: "Lionel Messi",
      image: messiImage, // Use the imported variable
      description: "A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA Champions League (eight), and most assists in La Liga (192) and the Copa América (17). He also has the most international goals by a South American male (104).",
    },
    {
      name: "Muhammad Ali",
      image: aliImage, // Use the imported variable
      description: "Muhammad Ali was one of the greatest boxers in history, the first fighter to win the world heavyweight championship on three separate occasions. In addition, he was known for his social message of black pride and black resistance to white domination and for refusing induction into the U.S. Army during the Vietnam War.",
    },
    // Add more personalities as needed
  ];

  return (
    <div>
      <div class="content">
      <h2 className="header5">Favorite Personalities</h2>
      <div className="personality-list">
        {personalities.map((personality, index) => (
          <div className="personality-card" key={index}>
            <img src={personality.image} alt={personality.name} />
            <h3>{personality.name}</h3>
            <p>{personality.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FavoritePersonalities;
