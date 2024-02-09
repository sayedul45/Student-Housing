import React, { useState } from 'react';
import { menuItems } from './menuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

// import MenuItems from "./MenuItem";
// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//   depthLevel = depthLevel + 1;
//   const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
//   return (
//     <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
//       {submenus.map((submenu, index) => (
//         <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//       ))}
//     </ul>
//   );
// };

// export default Dropdown;

function Dropdown() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ?'dropdown-menu clicked':'dropdown-menu'}
        onClick={() => setDropdown(!dropdown)}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() =>setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;