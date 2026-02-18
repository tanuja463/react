import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ItemDetails from "./pages/ItemDetails";
import FavoritesPage from "./pages/FavoritesPage";

import "./styles/App.css";

function App() {

  return (
    <Router>

      <Header />

      <main className="main">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/category/:categoryName" element={<CategoryPage />} />

          <Route path="/item/:itemName" element={<ItemDetails />} />

          <Route path="/favorites" element={<FavoritesPage />} />

        </Routes>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
