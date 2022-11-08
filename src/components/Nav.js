import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [showBackground, setShowBackground] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${showBackground && "nav-dark"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix logo"
      />
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="profile avatar"
      />
    </div>
  );
};

export default Nav;