import { useEffect, useState } from "react";

export default function useColorScheme() {
  const [darkMode, setDarkMode] = useState<boolean | null>(
    localStorage.getItem("dark-theme") == null
      ? null
      : localStorage.getItem("dark-theme") == "true",
  );

  const setColorScheme = (mode: "null" | "true" | "false") => {
    if (mode == "null") {
      setDarkMode(null);
      localStorage.removeItem("dark-theme");
    } else {
      setDarkMode(mode == "true");
      localStorage.setItem("dark-theme", mode);
    }
  };

  const setColorSchemeAuto = (e: MediaQueryListEvent) => {
    console.log(e.matches);

    document.documentElement.classList.toggle("dark", darkMode || e.matches);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkMode != null) {
      document.documentElement.classList.toggle("dark", darkMode);
    } else {
      document.documentElement.classList.toggle("dark", media.matches);

      media.addEventListener("change", setColorSchemeAuto);
      return () => media.removeEventListener("change", setColorSchemeAuto);
    }
  }, [darkMode, window]);

  return { darkMode, setColorScheme };
}
