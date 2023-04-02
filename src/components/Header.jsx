import React from "react";

const Header = props => {
  return (
    <header class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white sticky top-0 z-10 font-medium">
      <section class="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <h1 class="text-2xl ">
          <a href="#hero">Technical Test</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            class="text-2xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav class="hidden sm:block space-x-8 text-lg" aria-label="main">
            <a href="#rockets" class="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" class="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" class="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
