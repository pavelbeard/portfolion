import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import AboutMeIcon from "./icons/AboutMeIcon";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Layout className="px-16 text-slate-900 dark:text-slate-300 mt-20">
      <div id="about-me">
        <div className="flex items-center gap-x-2 text-red-600 drop-shadow-xl text-xl md:text-2xl lg:text-4xl font-bold tracking-wide">
          <AboutMeIcon className="size-8" /> {t("ABOUT_ME.TITLE")}
        </div>
        <p className="mt-8 text-md md:text-lg lg:text-xl">{t("ABOUT_ME.TEXT")}</p>
      </div>
    </Layout>
  );
};

export default AboutMe;
