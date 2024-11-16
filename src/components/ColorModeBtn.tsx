import NightMode from "./icons/NightMode";
import SunMode from "./icons/SunMode";
import SystemMode from "./icons/SystemMode";
import clsx from "clsx";
import useColorScheme from "../lib/hooks/useColorScheme";
import { RefObject, useRef, useState } from "react";
import useClickOutside from "../lib/hooks/useClickOutside";
import "./MenuAnimations.css";

const ColorModeBtn = () => {
  const { darkMode, setColorScheme } = useColorScheme();
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

  const ref = useClickOutside(() => toggleButton(false));

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      onClick={() => toggleButton(!isOpen)}
      className={clsx(
        "group relative",
        "flex flex-row items-center",
        "text-slate-900 dark:text-slate-300"
      )}
    >
      {isOpen && (
        <div
          ref={animationRef}
          className="absolute menu-expand top-12 -left-4 lg:right-0 w-48 bg-slate-300 dark:bg-slate-900 rounded-xl"
        >
          <button
            className="flex group/system justify-between items-center gap-x-2 text-sm px-4 py-2 w-full rounded-t-xl hover:bg-slate-400 dark:hover:bg-slate-800"
            onClick={() => setColorScheme("null")}
          >
            System mode{" "}
            <SystemMode className="group-hover/system:stroke-slate-300" />
          </button>
          <button
            className="flex group/dark justify-between items-center gap-x-2 text-sm px-4 py-2 w-full  hover:bg-slate-400 dark:hover:bg-slate-800"
            onClick={() => setColorScheme("true")}
          >
            Dark mode{" "}
            <NightMode className=" group-hover/dark:stroke-slate-300" />
          </button>
          <button
            className="flex group/light justify-between items-center gap-x-2 text-sm px-4 py-2 w-full rounded-b-xl hover:bg-slate-400 dark:hover:bg-slate-800"
            onClick={() => setColorScheme("false")}
          >
            Light mode{" "}
            <SunMode className="group-hover/light:stroke-slate-300" />
          </button>
        </div>
      )}
      {darkMode == null ? (
        <SystemMode className="hover:stroke-2 hover:scale-110 transition duration-300" />
      ) : darkMode ? (
        <NightMode className="hover:stroke-2 hover:scale-110 transition duration-300" />
      ) : (
        <SunMode className="hover:stroke-2 hover:scale-110 transition duration-300" />
      )}
    </div>
  );
};

export default ColorModeBtn;
