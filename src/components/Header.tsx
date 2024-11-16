import clsx from "clsx";
import { RefObject, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useHeader from "../lib/hooks/useHeader";
import ChangeLangBtn from "./ChangeLangBtn";
import ColorModeBtn from "./ColorModeBtn";
import "./HeaderAnimation.css";
import Burger from "./icons/Burger";
import XIcon from "./icons/XIcon";
import "./MenuAnimations.css";
import useClickOutside from "../lib/hooks/useClickOutside";

const Header = () => {
  const { t } = useTranslation();
  const { isBurgerOpen, toggleBurger, isDesktop } = useHeader();
  const ref = useClickOutside(() => closeBurger());
  
  const closeBurger = () => {
    ref.current?.classList.replace("menu-expand", "menu-collapse");
    setTimeout(() => toggleBurger(), 240);
  };


  return (
    <header
      className={clsx(
        "fixed top-0 mt-4 w-full flex items-center",
        isDesktop ? "mx-auto justify-center" : "ml-4 justify-start",
      )}
    >
      {isDesktop ? (
        <nav className="relative z-10 nav-header px-8 py-4 flex items-center gap-x-4 text-slate-900 dark:text-slate-300">
          <Link to="/#experience">{t("HEADER.EXPERIENCE")}</Link>
          <Link to="/#projects">{t("HEADER.PROJECTS")}</Link>
          <Link to="/#about-me">{t("HEADER.ABOUT_ME")}</Link>
          <Link to="/#contacts">{t("HEADER.CONTACTS")}</Link>
          <ChangeLangBtn />
          <ColorModeBtn />
        </nav>
      ) : isBurgerOpen ? (
        <nav className="flex flex-col gap-y-4 text-slate-900 dark:text-slate-300">
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
