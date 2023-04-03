import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white sticky top-0 z-10 font-medium">
      <section className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl ">
          <a href="#hero">Technical Test</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-2xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-md" aria-label="main">
            <Link to="/" className="hover:opacity-90">
              Turbline Inspections
            </Link>
            <Link to="/farms" className="hover:opacity-90">
              Farm
            </Link>
            <Link to="/grades" className="hover:opacity-90">
              Grades
            </Link>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
