import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Header/Dropdown";
import { FaBeer } from "react-icons/fa";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <div className="">
      <div
        className={`menu-items ${depthLevel > 0 ? "relative bg-red-500" : ""}`}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.submenu ? (
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="text-black hover:text-blue-800 focus:outline-none"
          >
            {items.title}
          </button>
        ) : (
          <a href="/#" className="text-black hover:text-blue-600 ">
            {items.title}
          </a>
        )}
      </div>
      <div>
        {items.submenu && (
          <div className="">
            <Dropdown
              submenus={items.submenu}
              dropdown={dropdown}
              depthlevel={depthLevel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
