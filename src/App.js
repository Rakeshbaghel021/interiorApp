/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Armchair, Menu, X } from "lucide-react";
import HomePage from "./components/HomePage";
import ContactPage from "./components/Contactus";
import AboutPage from "./components/AboutPage";
import Portfolio from "./components/Portfolio";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#121929] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex gap-4">
              <Armchair className="h-8 w-8 text-blue-400 animate-spin-slow" />
              <span className="text-2xl font-bold tracking-wide">
                The Interior World
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {["/", "/portfolio", "/about Us", "/contact Us"].map(
              (path, index) => (
                <Link
                  key={index}
                  to={path}
                  className={`hover:text-blue-400 transition duration-300 ease-in-out ${
                    location.pathname === path ? "text-blue-400" : ""
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path
                        .replace("/", "")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-center">
          <nav className="flex flex-col space-y-3 px-6 py-4">
            {["/", "/portfolio", "/about Us", "/contact Us"].map(
              (path, index) => (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 rounded-lg text-lg hover:bg-blue-400 hover:text-white transition duration-300 ${
                    location.pathname === path ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path
                        .replace("/", "")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="transition duration-500 hover:scale-105">
          <h3 className="text-lg font-semibold text-white mb-4">
            About The Interior World
          </h3>
          <p className="text-sm text-gray-400">
            We are committed to providing exceptional service and building
            lasting relationships with our clients. Contact us today to discuss
            your project requirements and let us help you bring your vision to
            life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="transition duration-500 hover:scale-105">
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-sm hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about us" className="text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact us" className="text-sm hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="transition duration-500 hover:scale-105">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Center Point, Aligarh(UP), India
          </p>
          <p className="text-sm text-gray-400">Phone: (+91) 7906924649</p>
          <p className="text-sm text-gray-400">
            Email: amitkumarbjym.com@gmail.com.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="transition duration-500 hover:scale-105">
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-2">
            Stay updated with our latest products and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full border border-gray-600 bg-gray-800 text-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; 2025 The Interior World. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact us" element={<ContactPage />} />
          <Route path="/about us" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
