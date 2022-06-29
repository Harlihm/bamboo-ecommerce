import React from "react";
import Logo from "./Logo";
import style from "./style.module.css";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import Button from "../../containers/Button";


const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.navWrapper}>
        <Button >
          < GiHamburger className={style.navButton} />
        </Button>
        <Logo />
        <div className={style.navActions}>
          <Button>
            <FiSearch className={style.navActionItem} />
          </Button>
          <Button>
            <AiOutlineShoppingCart className={style.navActionItem} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
