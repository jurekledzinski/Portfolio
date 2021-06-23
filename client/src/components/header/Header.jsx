import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.scss";

import { headerMenuLinks } from "./HeaderMenuLinks";

import useMoveScroll from "./customHooksHeader/useMoveScroll";
import useScrollToSection from "./customHooksHeader/useScrollToSection";
import useObserverSections from "./customHooksHeader/useObserverSections";

const Header = () => {
  const isActiveHeaderWrapper = useSelector((store) => store.headerWrapperData);
  const sessionStorageData = JSON.parse(
    sessionStorage.getItem("indexBtn") || "0"
  );
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [indexBtnMenu, setIndexBtnMenu] = useState(sessionStorageData);

  useMoveScroll(setIndexBtnMenu);
  const { handleScrollToSection } = useScrollToSection(setIndexBtnMenu);
  useObserverSections();

  const handleOpenMobileMenu = () => {
    setIsOpenMenu((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <div
        className={
          isActiveHeaderWrapper
            ? "header__wrapper header__wrapper--active"
            : "header__wrapper"
        }
      >
        <nav
          className={
            isOpenMenu
              ? "header__menu-wrapper header__menu-wrapper--active"
              : "header__menu-wrapper"
          }
        >
          <ul className="header__menu">
            {headerMenuLinks.map((item, index) => {
              return (
                <li
                  className={item.classItem}
                  key={index}
                  onClick={() => handleScrollToSection(index)}
                >
                  <Link
                    className={
                      index === indexBtnMenu
                        ? `${item.activeLink} ${item.classLink}`
                        : item.classLink
                    }
                    to={item.pathName}
                  >
                    {item.nameLink}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className="header__hamburger-wrapper"
          onClick={handleOpenMobileMenu}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
