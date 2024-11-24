import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import useDesktopBreakpoint from "./useDesktopBreakpoint";

export default function useHeader() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const isDesktop = useDesktopBreakpoint();
  const headerRef = useRef<HTMLElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    setBurgerOpen(false);
  }, [hash]);

  useEffect(() => {
    if (isDesktop) setBurgerOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (headerRef.current) {
      const $navigation = headerRef.current;
      const $rootStyle = getComputedStyle(document.documentElement);

      if (!document.body.style.getPropertyValue("animation-timeline")) {
        $navigation.animate(
          [
            { padding: "16px 128px" },
            {
              borderRadius: "25px",
              backdropFilter: "blur(5px)",
              background: $rootStyle.getPropertyValue("--bg-color"),
            },
          ],
          {
            // @ts-ignore
            timeline: new ScrollTimeline({
              source: document.documentElement,
            }),
            // @ts-ignore
            rangeStart: new CSSUnitValue(50, "px"),
          },
        );
      }
    }
  }, [headerRef, isDesktop]);

  return {
    isBurgerOpen,
    toggleBurger: () => setBurgerOpen(!isBurgerOpen),
    isDesktop,
    headerRef,
  };
}
