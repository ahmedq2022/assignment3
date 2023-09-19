import React from "react";
import "./FavoriteTouristSpots.css";
import HunzaImage from "./images/Hunza.jpg";
import FMImage from "./images/FairyMeadows.jpg";
import SkarduImage from "./images/skardu.jpg";

const FavoriteTouristSpots = () => {
  const favoriteSpots = [
    {
      name: "Hunza",
      intro:
        "Hunza is a small town of Karakoram 100 KMs from Gilgit. If you enter from China to Pakistan it is the first town at an elevation of 7000-8000 meters. The beautiful lakes, high mountains, and glaciers enhance the beauty of this valley 100 times",
      image: HunzaImage,
      videoEmbedCode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gjXMF0EVems?si=TM2Vy9-HjSLCjVwr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Fairy Meadows",
      intro:
        "Fairy Meadows is famous for its beautiful lush green plateaus and World's ninth biggest mountain Nanga Parbat (the Killer Mountain) and located in Diamer District of Gilgit-Baltistan Pakistan, at an altitude of about 3,300 meters above the sea level.",
      image: FMImage,
      videoEmbedCode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-qWdneZzYFs?si=QI7IQGLEQvA0L7LE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Skardu",
      intro:
        "Skardu, along with Gilgit, is a major tourism, trekking and expedition hub in Gilgit–Baltistan. The mountainous terrain of the region, which includes four of the world's 14 Eight-thousander peaks, attracts tourists, trekkers and mountaineers from around the world.",
      image: SkarduImage,
      videoEmbedCode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GoAZc8QhC4k?si=QogRcHY4dkdCQ9TP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
    },
    // Add more favorite spots as needed
  ];

  return (
    <div class="content">
    <div className="favorite-tourist-spots" style={{ background: "#000" }}>
      {/* Heading above everything */}
      <h2 className="heading">My Favorite Tourist Spots</h2>

      {/* Content */}
      {favoriteSpots.map((spot, index) => (
        <div className="spot-container" key={index}>
          <img src={spot.image} alt={spot.name} className="spot-image" />
          <h3 style={{ color: "#fff" }}>{spot.name}</h3>
          <p style={{ color: "#fff" }}>{spot.intro}</p>
          {spot.videoEmbedCode && (
            <div className="video-container">
              {/* Embed YouTube video */}
              {spot.videoEmbedCode}
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default FavoriteTouristSpots;
