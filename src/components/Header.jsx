import React, { useState } from "react";
import { Link } from "react-router-dom";
import LINKS from "../constants/LINKS";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div
        className={`absolute right-0 top-0 z-10 md:hidden h-screen w-full sm:w-1/2 
      border-white-500 border-l-2 shadow-xl -ml-4 bg-gray-100 p-4 
      transition duration-500  ease-in-out
       ${showMenu ? "transform translate-x-0" : "transform translate-x-full"}`}
      >
        <ul className="pt-[60px] text-right space-y-7 text-lg text-gray-500">
          {LINKS.map(link => (
            <li key={link.url}>
              <Link to={link.url} className=" hover:opacity-90">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white sticky top-0 z-10 font-medium">
        <section className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl ">
            <a href="#hero">Technical Test</a>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className="text-2xl md:hidden focus:outline-none"
              onClick={handleShowMenu}
            >
              &#9776;
            </button>
            <nav
              className="hidden md:block space-x-7 text-md"
              aria-label="main"
            >
              {LINKS.map(link => (
                <Link
                  to={link.url}
                  className=" hover:opacity-90"
                  key={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
