import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useDesktopBreakpoint from "./useDesktopBreakpoint";

export default function useHeader() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const isDesktop = useDesktopBreakpoint();
  const { hash } = useLocation();

  useEffect(() => {
    setBurgerOpen(false);
  }, [hash]);

  useEffect(() => {
    if (isDesktop) setBurgerOpen(false);
  }, [isDesktop]);

  return {
    isBurgerOpen,
    toggleBurger: () => setBurgerOpen(!isBurgerOpen),
    isDesktop,
  };
}
