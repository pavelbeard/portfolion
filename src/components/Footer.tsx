import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import useScrambleText from "../lib/hooks/useScrambleText";
import Copyright from "./icons/Copyright";

const Footer = () => {
  const { t } = useTranslation();
  const ref = useScrambleText({
    initialText: "pavelbeard",
    textArray: ["heavycream", "pavelbeard"],
  });
  
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
