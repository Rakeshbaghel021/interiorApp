import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="transition duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-4">
              About The Interior World
            </h3>
            <p className="text-sm text-gray-400">
              We are committed to providing exceptional service and building
              lasting relationships with our clients. Contact us today to
              discuss your project requirements and let us help you bring your
              vision to life.
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
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Stay updated with our latest products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full border border-gray-600 bg-gray-800 text-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-[#B19F6F] text-white rounded-r-md hover:bg-[#eabb3b] transition duration-300">
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
}

export default Footer;
