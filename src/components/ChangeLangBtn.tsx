import clsx from "clsx";
import { MouseEvent, RefObject, useRef, useState } from "react";
import i18n from "../i18n";
import useClickOutside from "../lib/hooks/useClickOutside";
import "./MenuAnimations.css";

type Props = {};

const ChangeLangBtn = ({}: Props) => {
  const languages = ["en", "es"];
  const [isOpen, setOpen] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  const toggleButton = (state: boolean) => {
    if (state) {
      setOpen(true);
    } else {
      animationRef.current?.classList.replace("menu-expand", "menu-collapse");
      setTimeout(() => setOpen(false), 240);
    }
  };

  const changeLng = (e: MouseEvent<HTMLButtonElement>) => {
    const lng = e.currentTarget.getAttribute("data-lng") as string;
    toggleButton(false);
    i18n.changeLanguage(lng);
  };

  const ref = useClickOutside(() => toggleButton(false));

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(
        "group relative",
        "flex flex-row items-center",
        "text-slate-900 dark:text-slate-300",
      )}
    >
      <button onClick={() => toggleButton(!isOpen)}>{i18n.language}</button>
      {isOpen && (
        <div
          ref={animationRef}
          className="absolute menu-expand top-[88px] lg:top-12 -left-4 lg:right-0 w-48 bg-slate-300 dark:bg-slate-900 rounded-xl"
        >
          {languages.map((language, index) => (
            <button
              onClick={changeLng}
              className={clsx(
                "flex justify-between items-center gap-x-2 text-sm px-4 py-2 w-full hover:bg-slate-400 dark:hover:bg-slate-800",
                index == 0 && "rounded-t-xl",
                index == languages.length - 1 && "rounded-b-xl",
              )}
              key={language}
              data-lng={language}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLangBtn;
