import clsx from "clsx";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useClickOutside from "../lib/hooks/useClickOutside";
import useHeader from "../lib/hooks/useHeader";
import ChangeLangBtn from "./ChangeLangBtn";
import ColorModeBtn from "./ColorModeBtn";
import "./HeaderAnimation.css";
import Burger from "./icons/Burger";
import XIcon from "./icons/XIcon";
import "./MenuAnimations.css";

const Header = () => {
  const { t } = useTranslation();
  const { isBurgerOpen, toggleBurger, isDesktop, headerRef } = useHeader();
  const ref = useClickOutside(() => closeBurger());

  const closeBurger = () => {
    ref.current?.classList.replace("menu-expand", "menu-collapse");
    setTimeout(() => toggleBurger(), 240);
  };

  return (
    <header
      role="navigation"
      className={clsx(
        "fixed top-0 mt-4 w-full flex items-center z-50",
        isDesktop ? "mx-auto justify-center" : "ml-4 justify-start",
      )}
    >
      {isDesktop ? (
        <nav
          id="desktop-nav"
          ref={headerRef}
          className="relative nav-header px-8 py-4 flex items-center gap-x-4 text-slate-900 dark:text-slate-300"
        >
          <Link
            className="hover:text-slate-500 hover:dark:text-slate-300"
            to="/#experience"
          >
            {t("HEADER.EXPERIENCE")}
          </Link>
          <Link
            className="hover:text-slate-500 hover:dark:text-slate-300"
            to="/#projects"
          >
            {t("HEADER.PROJECTS")}
          </Link>
          <Link
            className="hover:text-slate-500 hover:dark:text-slate-300"
            to="/#tech-stack"
          >
            {t("HEADER.TECH_STACK")}
          </Link>
          <Link
            className="hover:text-slate-500 hover:dark:text-slate-300"
            to="/#about-me"
          >
            {t("HEADER.ABOUT_ME")}
          </Link>
          <Link
            className="hover:text-slate-500 hover:dark:text-slate-300"
            to="/#contacts"
          >
            {t("HEADER.CONTACTS")}
          </Link>
          <ChangeLangBtn />
          <ColorModeBtn />
        </nav>
      ) : isBurgerOpen ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-y-4 text-slate-900 dark:text-slate-300"
        >
          <button onClick={closeBurger}>
            <XIcon />
          </button>
          <div
            ref={ref as RefObject<HTMLDivElement>}
            className="menu-expand flex flex-col bg-slate-100 dark:bg-slate-900 rounded-lg"
          >
            <Link
              className="px-4 py-2 hover:bg-slate-300 hover:dark:bg-slate-500 hover:rounded-t-lg"
              to="/#experience"
            >
              {t("HEADER.EXPERIENCE")}
            </Link>
            <Link
              className="px-4 py-2 hover:bg-slate-300 hover:dark:bg-slate-500"
              to="/#projects"
            >
              {t("HEADER.PROJECTS")}
            </Link>
            <Link
              className="px-4 py-2 hover:bg-slate-300 hover:dark:bg-slate-500"
              to="/#tech-stack"
            >
              {t("HEADER.TECH_STACK")}
            </Link>
            <Link
              className="px-4 py-2 hover:bg-slate-300 hover:dark:bg-slate-500"
              to="/#about-me"
            >
              {t("HEADER.ABOUT_ME")}
            </Link>
            <Link
              className="px-4 py-2 hover:bg-slate-300 hover:dark:bg-slate-500"
              to="/#contacts"
            >
              {t("HEADER.CONTACTS")}
            </Link>
            <div className="px-4 py-2 hover:rounded-b-lg">
              <ChangeLangBtn />
            </div>
            <div className="px-4 py-2 hover:rounded-b-lg">
              <ColorModeBtn />
            </div>
          </div>
        </nav>
      ) : (
        <button onClick={toggleBurger}>
          <Burger className="dark:text-slate-300" />
        </button>
      )}
    </header>
  );
};

export default Header;
