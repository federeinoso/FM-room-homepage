import { useState } from "react";
import IconLogo from "../icons/iconLogo";
import IconMenu from "../icons/iconMenu";
import IconCloseMenu from "../icons/iconCloseMenu";
import NavLink from "./NavLink";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <nav
      className={
        activeMenu
          ? "absolute bg-white w-full p-10 flex items-center"
          : "absolute w-full text-white flex flex-row sm:gap-14 items-center top-10 sm:left-14"
      }
    >
      <button
        className={activeMenu ? "mx-1" : "sm:hidden absolute left-7"}
        onClick={handleClickMenu}
      >
        {activeMenu ? <IconCloseMenu /> : <IconMenu />}
      </button>
      <IconLogo
        className={activeMenu ? "hidden" : "mx-auto cursor-pointer sm:mx-0"}
      />
      <div
        className={
          activeMenu
            ? "flex gap-10 font-bold text-black mx-auto"
            : "hidden sm:flex sm:gap-10"
        }
      >
        <NavLink name="home" />
        <NavLink name="shop" />
        <NavLink name="about" />
        <NavLink name="contact" />
      </div>
    </nav>
  );
};

export default Navbar;
