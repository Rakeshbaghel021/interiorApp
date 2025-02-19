/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/Contactus";
import AboutPage from "./components/AboutPage";
import Portfolio from "./components/Portfolio";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StyleQuiz from "./components/StyleQuiz";
import HowItWorks from "./components/HowItWorks";
import Blog from "./components/Blog";
import Giftcards from "./components/Giftcards";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<AboutPage />} />
          <Route path="/style-quiz" element={<StyleQuiz />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gift-cards" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
