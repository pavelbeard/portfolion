import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Layout className="px-16 text-slate-900 dark:text-slate-300 mt-20">
      <div id="about-me" className="mt-4">
        <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide">
          {t("ABOUT_ME.TITLE")}
        </p>
        <p className="mt-8">
          {t("ABOUT_ME.TEXT")}
        </p>
      </div>
    </Layout>
  );
};

export default AboutMe;
