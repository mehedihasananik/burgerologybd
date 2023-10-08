import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        {openNav ? (
          "hi"
        ) : (
          <nav className="flex justify-center items-center py-3 space-x-8">
            <div>
              <ul className="space-x-5 font-bold uppercase">
                <Link>About</Link>
                <Link>Our Menu</Link>
                <Link>Mega Menu</Link>
              </ul>
            </div>
            <div>
              <img className="w-32 h-16" src={logo} alt="" />
            </div>
            <div>
              <ul className="space-x-5 font-bold uppercase">
                <Link>Shop</Link>
                <Link>Blogs</Link>
                <Link>Contacts</Link>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
