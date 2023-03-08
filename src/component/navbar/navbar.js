import styles from "./navbar.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Navbar = ({ clicked }) => {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

  const show = isScroll ? styles.black : styles.nav;

  useEffect(() => {
    window.addEventListener("scroll", scrollTransition);

    return () => {
      window.removeEventListener("scroll", scrollTransition);
    };
  }, []);

  const scrollTransition = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const handleClick = () => {
    navigate("/profile");
  };

  const handleClick2 = () => {
    navigate("/");
  };

  return (
    <nav className={[styles.nav, show].join(" ")}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="some logo"
        className={styles.logoNetflix}
        onClick={handleClick2}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="some logo"
        className={styles.logoUser}
        onClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
