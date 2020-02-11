import React from "react";

const Navmenu = (props) => {
  return (
    <div className="navigation">
      <div>
      <a href="https://www.docplanner.com/about-us" alt="Docplanner Group">
      <img
        className="logo-docplanner"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner-logo"
      />
      </a>
      </div>
      <div className="list-menu">
      {props.nav.map((el, i) => (
        <div className="header-menu-drop" key={i}>
          <ul className="header-menu">
            <li className={el.title}>{el.title}</li>
            {el.drop && (
              <ul className="dropdown">
                {el.drop.map((el, i) => (
                  <li  key={i}>{el}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default Navmenu;
