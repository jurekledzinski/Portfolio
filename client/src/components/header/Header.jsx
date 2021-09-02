import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.scss";

import { headerMenuLinks } from "./HeaderMenuLinks";

import useMoveScroll from "./customHooksHeader/useMoveScroll";
import useScrollToSection from "./customHooksHeader/useScrollToSection";
import useObserverSections from "./customHooksHeader/useObserverSections";
import { openHideMobileMenu } from "../../reduxeStore/actions/actionOpenHideMobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const isActiveHeaderWrapper = useSelector((store) => store.headerWrapperData);
  const openHideMenuData = useSelector((store) => store.openHideMenuData);
  const sessionStorageData = JSON.parse(
    sessionStorage.getItem("indexBtn") || "0"
  );
  const [indexBtnMenu, setIndexBtnMenu] = useState(sessionStorageData);

  useMoveScroll(setIndexBtnMenu);
  const { handleScrollToSection } = useScrollToSection(setIndexBtnMenu);
  useObserverSections();

  const handleOpenMobileMenu = () => {
    if (!openHideMenuData) {
      dispatch(openHideMobileMenu(true));
    } else {
      dispatch(openHideMobileMenu(false));
    }
  };

  useEffect(() => {
    if (indexBtnMenu !== 0) {
      setIndexBtnMenu(0);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);

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
            openHideMenuData
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
                      isActiveHeaderWrapper
                        ? index === indexBtnMenu
                          ? `${item.activeLink} ${item.classLinkOutHome}`
                          : item.classLinkOutHome
                        : index === indexBtnMenu
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
