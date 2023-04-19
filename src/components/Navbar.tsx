import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";
import { useState } from "react";

import styles from "./Navbar.module.scss";
import { useWindowSize } from "../util/useWindowSize";

import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const windowSize = useWindowSize();

  const isMobile = windowSize.width < 600;
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" />
      <span></span>
      {!isMobile && <a>Home</a>}
      {!isMobile && <a>New</a>}
      {!isMobile && <a>Popular</a>}
      {!isMobile && <a>Trending</a>}
      {!isMobile && <a>Categories</a>}
      {isMobile && (
        <img
          src={menu}
          alt="Menu open icon"
          onClick={() => setMenuOpen(true)}
        />
      )}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.5 }}
            className={styles.sidemenu}
          >
            <img
              src={menuClose}
              alt="Menu close icon"
              onClick={() => setMenuOpen(false)}
            />
            <div>
              <a>Home</a>
              <a>New</a>
              <a>Popular</a>
              <a>Trending</a>
              <a>Categories</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
