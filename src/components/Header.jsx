import React from "react";

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
          <nav className="hidden sm:block space-x-8 text-lg" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
