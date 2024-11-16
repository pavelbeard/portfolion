import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import Layout from "../Layout";
import Copyright from "./icons/Copyright";

const Footer = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("pavelbeard");
  const { ref, replay } = useScramble({
    playOnMount: false,
    text: text,
    speed: 0.18,
    tick: 2,
    seed: 2,
    scramble: 2,
    step: 4,
    range: [65, 68],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevState) => {
        const nickName = ["heavycream", "pavelbeard"].at(
          Math.random() < 0.5 ? 0 : 1,
        ) as string;
        if (prevState == nickName) {
          return prevState;
        } else {
          replay();
          return nickName;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Layout className="flex flex-col lg:flex-row lg:justify-between gap-x-4 px-16 mt-48 mb-24 text-slate-900 dark:text-slate-300">
      <div className="flex items-center gap-x-2">
        <Copyright className="size-4" />
        {new Date().getFullYear()}
        <span ref={ref} />
      </div>
      <Link
        id="contacts"
        to="mailto:heavycream9090@icloud.com"
        className="transition animate-pulse duration-300"
      >
        {t("FOOTER.CONTACT")}
      </Link>
    </Layout>
  );
};

export default Footer;
