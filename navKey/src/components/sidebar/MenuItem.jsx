import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/menu_items.css'

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick} className ="item">
      <Link
        exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i class={iconClassName}></i>
        </div>
        <span className="color-nombre">{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}

    </li>
    
  );
};

export default MenuItem;
