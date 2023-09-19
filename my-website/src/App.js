import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar"; // Import your Navbar component
import "./Components/navbar.css";
import Footer from "./Components/footer"; // Import your Footer component
import "./Components/footer.css";
import Welcome from "./pages/Welcome"; // Import your Welcome component
import "./pages/Welcome.css";
import FavoritePersonalities from "./pages/FavoritePersonalities"; // Import your Favorite Personalities component
import "./pages/FavoritePersonalities.css";
import FavoriteCities from "./pages/FavoriteCities"; // Import your Favorite Cities component
import "./pages/FavoriteCities.css";
import FavoriteTouristSpots from "./pages/FavoriteTouristSpots"; // Import your Favorite Tourist Spots component
import "./pages/FavoriteTouristSpots.css";
import Contact from "./pages/Contact"; // Import your Contact component
import "./pages/Contact.css";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/favoritepersonalities" element={<FavoritePersonalities />} />
        <Route path="/favoritecities" element={<FavoriteCities />} />
        <Route path="/favoritetouristspots" element={<FavoriteTouristSpots />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer /> {/* Render the Footer at the bottom of each page */}
    </Router>
  );
};

export default App;
