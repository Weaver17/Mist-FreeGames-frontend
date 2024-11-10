import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Preloader from "../Preloader/Preloader";

import "./App.css";

import Header from "../Header/Header";
import GameIconBanner from "../GameIconBanner/GameIconBanner";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Categories from "../Categories/Categories";
import GamesSection from "../GamesSection/GamesSection";
import SearchResults from "../SearchResults/SearchResults";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content">
        {/* <Preloader /> */}
        <Header />
        <GameIconBanner />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="categories" element={<Categories />} />
          <Route path="games" element={<GamesSection />} />
          <Route path="search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
